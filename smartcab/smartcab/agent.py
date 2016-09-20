import random
from environment import Agent, Environment
from planner import RoutePlanner
from simulator import Simulator

class LearningAgent(Agent):
    """ An agent that learns to drive in the smartcab world."""

    def __init__(self, env):
        super(LearningAgent, self).__init__(env)  # sets self.env = env, state = None, next_waypoint = None, and a default color
        self.color = 'red'  # override color
        self.planner = RoutePlanner(self.env, self)  # simple route planner to get next_waypoint
        # TODO: Initialize any additional variables here
        self.q = {}
        self.actions = [None, 'forward', 'left', 'right']


        # Q-Learning parameters
        self.epsilon = 0.1
        self.alpha = 0.3 # Alpha is the learning rate
        self.gamma = 0.5 # gamma is the value of future reward. Learning doesn't work well with high gamma.
        self.defaultq = 0.0
        self.total_reward = 0.0

    def get_q(self, state, action):
        """Returns the Q-value array for the given state"""
        return self.q.get(str((state,action)), self.defaultq)

    def learn_q(self, state, action, reward, state2):
        max_state2_q = max([self.get_q(state2, a) for a in self.actions])

        old_q = self.get_q(state, action)
            
        new_q = old_q*(1 - self.alpha) + self.alpha*(reward + self.gamma * max_state2_q)
        
        self.q[str((state, action))] = new_q

    def reset(self, destination=None):
        self.planner.route_to(destination)
        # TODO: Prepare for a new trip; reset any variables here, if required
        print "q: ", self.q

    def choose_action(self, state):
        """User-created function"""
        # Get all the Q-values corresponding to the current state
        q = [self.get_q(state, a) for a in self.actions]
        print "q: ", q
        # Find the max Q-value for this state
        max_q = max(q)
        print "max_q: ", max_q
        # Find the action corresponding to the max Q-value for this state
        count = len([i for i in q if i == max_q])
        print "count: ", count
        # If there are multiple actions with Q-value = max Q-value for this state
        if count > 1:
            best = [i for i in range(len(self.env.valid_actions)) if q[i] == max_q]
            print "best: ", best
            # Pick among the 'best' actions randomly
            i = random.choice(best)
        # Else if there is only one 'best' action,
        else:
            # Pick the action corresponding to the max Q-value 
            i = q.index(max_q)
            print "action index: ", i



        # Return the action
        return self.actions[i]

    def update(self, t):
        # Gather inputs
        self.next_waypoint = self.planner.next_waypoint()  # from route planner, also displayed by simulator
        print "next_waypoint: ", self.next_waypoint
        # Variables for state

        inputs = self.env.sense(self)
        self.inputs = inputs
        deadline = self.env.get_deadline(self)
        
        # Variable indicating whether it's possible
        # TODO: MAKE THIS WORK
        # possible = (deadline >= compute_dist)        
        # distance = compute_dist(Environment().agent_states[agent]['location'],destination)
        #possible = 'possible'

        # TODO: Update state
        self.state = [v for v in self.inputs.values()]
        self.state.append(self.next_waypoint)
        # print "self.state:" + str(self.state)
                
        # TODO: Select action according to your policy

        random_action = (random.random() < self.epsilon)

        # Allow for exploration
        if random_action:
            print "random"
            action = random.choice([None, 'forward', 'left', 'right'])
        else:
            action = self.choose_action(self.state)

        print "action: ", action
        # Execute action and get reward
        reward = self.env.act(self, action)
        self.total_reward += reward

        self.inputs = self.env.sense(self)

        state2 = [v for v in self.inputs.values()]
        state2.append(self.next_waypoint)
        # print "state2: ", state2
        # TODO: Learn policy based on state, action, reward
        self.learn_q(self.state, action, reward, state2)

        print "LearningAgent.update(): deadline = {}, inputs = {}, action = {}, reward = {}".format(deadline, inputs, action, reward)  # [debug]
        # print "location = {}".format(Environment().agent_states[agent]['location'])


def run():
    """Run the agent for a finite number of trials."""

    # Set up environment and agent
    e = Environment()  # create environment (also adds some dummy traffic)
    a = e.create_agent(LearningAgent)  # create agent
    e.set_primary_agent(a, enforce_deadline=True)  # specify agent to track
    # NOTE: You can set enforce_deadline=False while debugging to allow longer trials

    # Now simulate it
    sim = Simulator(e, update_delay=0.4, display=True)  # create simulator (uses pygame when display=True, if available)
    # NOTE: To speed up simulation, reduce update_delay and/or set display=False

    sim.run(n_trials=100)  # run for a specified number of trials
    # NOTE: To quit midway, press Esc or close pygame window, or hit Ctrl+C on the command-line
    print "epsilon: ", a.epsilon, "gamma: ", a.gamma, "alpha: ", a.alpha, "defaultq: ", a.defaultq
    print "Results: ", e.results
    print "Number of Successful Outcomes: ", len(e.results)

if __name__ == '__main__':
    run()
