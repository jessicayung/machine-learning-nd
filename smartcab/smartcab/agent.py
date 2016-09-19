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

        self.epsilon = 0.1
        self.alpha = 0.2
        self.gamma = 0.9
        self.actions = [None, 'forward', 'left', 'right']
        self.q = {}
        self.defaultq = 0.0

    def get_qs(self, state, action):
        """Returns the Q-value array for the given state"""
        return self.q.get((state,action),self.defaultq)

    def learn_q(self, state, action, reward, value):
        # If there is no Q-value for this state, return None


        old_q = self.q.get((state, action),None)
        # If there is no old Q-value
        if old_q is None:
            self.q[(state, action)] = reward
        else:
            new_q = old_q*(1 - self.alpha) + alpha*(reward + self.gamma * max([self.getQ(state2, a) for a in self.actions])

            self.q[(state, action)] = new_q

        # TODO: HELP
        next_state = 0 # FIX


    def learn(self, state1, action1, reward, state2):
        maxqnew = max([self.getQ(state2, a) for a in self.actions])
        self.learn_q(state1, action1, reward, reward + self.gamma*maxqnew)

    def reset(self, destination=None):
        self.planner.route_to(destination)
        # TODO: Prepare for a new trip; reset any variables here, if required

    def choose_action(self, state):
        """User-created function"""
        # Get all the Q-values corresponding to the current state
        # We don't add 'None' as default because that's an unorderable type.
        q = [self.qlearn.get_qs((state, a)) for a in self.actions]
        # Find the max Q-value for this state
        max_q = max(q)
        # Find the action corresponding to the max Q-value for this state
        count = count(max_q)
        # If there are multiple actions with Q-value = max Q-value for this state
        if count > 1:
            best = [i for i in range(len(self.env.valid_actions)) if q[i] == max_q]
            # Pick among the 'best' actions randomly
            i = random.choice(best)
        # Else if there is only one 'best' action,
        else:
            # Pick the action corresponding to the max Q-value 
            i = q.index(max_q)

        # Return the action
        return self.actions[i]

    def update(self, t):
        # Gather inputs
        self.next_waypoint = self.planner.next_waypoint()  # from route planner, also displayed by simulator

        # Variables for state

        inputs = self.env.sense(self)
        deadline = self.env.get_deadline(self)
        
        # Variable indicating whether it's possible
        # TODO: MAKE THIS WORK
        # possible = (deadline >= compute_dist)
        possible = 1

        # TODO: Update state
        self.state = [self.inputs[], possible]
                
        # TODO: Select action according to your policy

        random_action = (random.random() < self.epsilon)

        # Allow for exploration
        if random_action:
            action = random.choice([None, 'forward', 'left', 'right'])
        else:
            action = choose_action(self, state)

        # Execute action and get reward
        reward = self.env.act(self, action)

        new_state = [self.inputs[], possible]
        # TODO: Learn policy based on state, action, reward
        self.qlearn.learn(state, action, reward, state2)

        print "LearningAgent.update(): deadline = {}, inputs = {}, action = {}, reward = {}".format(deadline, inputs, action, reward)  # [debug]
        # print "location = {}".format(Environment().agent_states[agent]['location'])

def run():
    """Run the agent for a finite number of trials."""

    # Set up environment and agent
    e = Environment()  # create environment (also adds some dummy traffic)
    a = e.create_agent(LearningAgent)  # create agent
    e.set_primary_agent(a, enforce_deadline=False)  # specify agent to track
    # NOTE: You can set enforce_deadline=False while debugging to allow longer trials

    # Now simulate it
    sim = Simulator(e, update_delay=1, display=True)  # create simulator (uses pygame when display=True, if available)
    # NOTE: To speed up simulation, reduce update_delay and/or set display=False

    sim.run(n_trials=100)  # run for a specified number of trials
    # NOTE: To quit midway, press Esc or close pygame window, or hit Ctrl+C on the command-line


if __name__ == '__main__':
    run()
