self.epsilon = 0.1
self.alpha = 0.3 # Alpha is the learning rate
self.gamma = 0.5 # gamma is the value of future reward. Learning doesn't work well with high gamma.
self.actions = [None, 'forward', 'left', 'right']
self.q = {}
self.defaultq = 0.0

SUCCESS: 2/100

((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ python smartcab/agent.py 
Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (2, 1), destination = (8, 2), deadline = 35
RoutePlanner.route_to(): destination = (8, 2)
q:  {}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (8, 4), destination = (2, 6), deadline = 40
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', None, None, None, 'possible'], 'forward')": -0.15, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (3, 1), destination = (7, 2), deadline = 25
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['green', None, None, None, 'possible'], 'forward')": -0.15, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (1, 6), destination = (6, 3), deadline = 40
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.15, "(['red', None, None, None, 'possible'], 'left')": -0.3, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (7, 4), destination = (1, 1), deadline = 45
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.3, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.15, "(['red', None, None, None, 'possible'], 'left')": -0.3, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
random
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (3, 6), destination = (7, 5), deadline = 25
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.51, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.255, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.15, "(['green', None, None, None, 'possible'], 'forward')": -0.255, "(['red', None, None, None, 'possible'], 'left')": -0.3, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (1, 6), destination = (6, 4), deadline = 35
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.51, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.255, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.15, "(['green', None, None, None, 'possible'], 'forward')": -0.255, "(['red', None, None, None, 'possible'], 'left')": -0.3, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (1, 6), destination = (5, 4), deadline = 30
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.51, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": 1.083919259727666, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.15, "(['green', None, None, None, 'possible'], 'forward')": -0.255, "(['red', None, None, None, 'possible'], 'left')": -0.3, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 8
Environment.reset(): Trial set up with start = (1, 5), destination = (6, 4), deadline = 30
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.51, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.25854783719670743, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.15, "(['green', None, None, None, 'possible'], 'forward')": -0.255, "(['red', None, None, None, 'possible'], 'left')": -0.51, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (2, 5), destination = (7, 3), deadline = 35
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.657, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.25854783719670743, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.15, "(['green', None, None, None, 'possible'], 'forward')": -0.255, "(['red', None, None, None, 'possible'], 'left')": -0.51, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3285, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (4, 3), destination = (6, 1), deadline = 20
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.657, "(['green', None, None, None, 'possible'], None)": 0.07789722387113569, "(['green', None, None, None, 'possible'], 'right')": 0.5193148258075713, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.255, "(['green', None, None, None, 'possible'], 'forward')": -0.255, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.51, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.37995, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (8, 6), destination = (1, 5), deadline = 40
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.657, "(['green', None, None, None, 'possible'], None)": 0.21054123668862695, "(['green', None, None, None, 'possible'], 'right')": 1.4840746865467143, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.255, "(['green', None, None, None, 'possible'], 'forward')": -0.3285, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.51, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.37995, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (6, 4), destination = (2, 1), deadline = 35
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.657, "(['red', 'forward', None, None, 'possible'], 'right')": 0.7176872962294041, "(['green', None, None, None, 'possible'], None)": 0.21054123668862695, "(['green', None, None, None, 'possible'], 'right')": 1.245879815517684, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.255, "(['green', None, None, None, 'possible'], 'forward')": -0.19306802767234738, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.657, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.41596500000000003, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 13
Environment.reset(): Trial set up with start = (5, 6), destination = (3, 2), deadline = 30
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.8319300000000001, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', None, None, None, 'possible'], None)": 0.21054123668862695, "(['green', None, None, None, 'possible'], 'right')": 1.2151162402067357, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.255, "(['green', None, None, None, 'possible'], 'forward')": -0.21519710286225835, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.657, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.41596500000000003, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (2, 5), destination = (8, 1), deadline = 50
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.8319300000000001, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', None, None, None, 'possible'], None)": 0.21054123668862695, "(['green', None, None, None, 'possible'], 'right')": 1.568474297898311, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.255, "(['green', None, None, None, 'possible'], 'forward')": -0.1381888475651297, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.657, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.41596500000000003, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (5, 5), destination = (2, 3), deadline = 25
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.4215, "(['green', None, None, None, 'possible'], None)": 0.20771542127612938, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.41596500000000003, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8823509999999999, "(['green', None, None, None, 'possible'], 'right')": 0.436571049479196, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1381888475651297, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7599, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (4, 5), destination = (8, 4), deadline = 25
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.33013797213672086, "(['green', None, None, None, 'possible'], None)": 0.20771542127612938, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.41596500000000003, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8823509999999999, "(['green', None, None, None, 'possible'], 'right')": 1.648831842108085, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1381888475651297, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8319300000000001, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (8, 5), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.33013797213672086, "(['green', None, None, None, 'possible'], None)": 0.39340459635428404, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.0104080012078471, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9176456999999998, "(['green', None, None, None, 'possible'], 'right')": 1.1303765494510907, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1381888475651297, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7112965597889475, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (2, 6), destination = (3, 3), deadline = 20
RoutePlanner.route_to(): destination = (3, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.33013797213672086, "(['green', None, None, None, 'possible'], None)": 0.4310541857247229, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.9393268252588934, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9176456999999998, "(['green', None, None, None, 'possible'], 'right')": 1.8598151638662208, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1381888475651297, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7112965597889475, "(['red', None, None, None, 'possible'], None)": 0.1319668018896233, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (3, 1), destination = (3, 5), deadline = 20
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.33013797213672086, "(['green', None, None, None, 'possible'], None)": 0.4310541857247229, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.8950152158104622, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7747044460198662, "(['green', None, None, None, 'possible'], 'right')": 1.7510667371322586, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1381888475651297, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.6636553094806938, "(['red', None, None, None, 'possible'], None)": 0.1319668018896233, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (1, 2), destination = (2, 6), deadline = 25
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.33013797213672086, "(['green', None, None, None, 'possible'], None)": 0.4310541857247229, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.1800607780596626, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7747044460198662, "(['green', None, None, None, 'possible'], 'right')": 1.549825592474985, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.06846864594091696, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5386078191974585, "(['red', None, None, None, 'possible'], None)": 0.1319668018896233, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 5), deadline = 30
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.2831198293788023, "(['green', None, None, None, 'possible'], None)": 0.26472115180819544, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.2991227350741257, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7110240913850518, "(['green', None, None, None, 'possible'], 'right')": 1.005629134205372, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2738275031171725, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5386078191974585, "(['red', None, None, None, 'possible'], None)": 0.0953460143652528, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (3, 3), destination = (8, 3), deadline = 25
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.09065185497198197, "(['green', None, None, None, 'possible'], None)": 0.1912610321814212, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.9497151619587991, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7110240913850518, "(['green', None, None, None, 'possible'], 'right')": 0.3302495442463198, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2846485433915933, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2738275031171725, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.22057624191095923, "(['red', None, None, None, 'possible'], None)": 0.0953460143652528, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', 'forward', None, None, 'possible']
random
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (1, 1), destination = (8, 3), deadline = 45
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.09065185497198197, "(['green', None, None, None, 'possible'], None)": 0.1912610321814212, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.6280875655873395, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7110240913850518, "(['green', None, None, None, 'possible'], 'right')": 0.9742519970214203, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.6791485109609439, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2738275031171725, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.22057624191095923, "(['red', None, None, None, 'possible'], None)": 0.0953460143652528, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 24
Environment.reset(): Trial set up with start = (2, 6), destination = (6, 6), deadline = 20
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.07213400564516054, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1662632695984743, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.794404301066403, "(['green', None, None, None, 'possible'], 'right')": 0.06668976707997351, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.6791485109609439, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2738275031171725, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.22057624191095923, "(['red', None, None, None, 'possible'], None)": 0.0070795451348993725, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (4, 2), destination = (8, 5), deadline = 35
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.06131390479838646, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.398186134716611, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.794404301066403, "(['green', None, None, None, 'possible'], 'right')": 0.7640852008513559, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.6791485109609439, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2738275031171725, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.4536361236336767, "(['red', None, None, None, 'possible'], None)": 0.001393781231436574, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (2, 4), destination = (8, 1), deadline = 45
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.11302964286534788, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.7543479387081782, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.794404301066403, "(['green', None, None, None, 'possible'], 'right')": 2.1756057481332465, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7822674360310103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2738275031171725, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.4536361236336767, "(['red', None, None, None, 'possible'], None)": 0.001393781231436574, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (3, 4), destination = (8, 1), deadline = 40
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.3281439697149655, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.7950929872929245, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.794404301066403, "(['green', None, None, None, 'possible'], 'right')": 2.3743286536302644, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.6637389371730298, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.6310044129999013, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.4536361236336767, "(['red', None, None, None, 'possible'], None)": 0.001393781231436574, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'left', None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (7, 5), destination = (6, 1), deadline = 25
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.44994919547705875, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.8811563814039798, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.794404301066403, "(['green', None, None, None, 'possible'], 'right')": 1.8480743611673032, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5576895951407947, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.6310044129999013, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.4536361236336767, "(['red', None, None, None, 'possible'], None)": 0.208744208326292, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, 'right', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (5, 6), destination = (6, 3), deadline = 20
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.44994919547705875, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 2.5195603179003685, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.29822707576795765, "(['green', None, None, None, 'possible'], 'right')": 2.021666525171803, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.272556173809153, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.6310044129999013, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.4536361236336767, "(['red', None, None, None, 'possible'], None)": 0.208744208326292, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (6, 6), destination = (7, 3), deadline = 20
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.44994919547705875, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 2.058875241282011, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.29822707576795765, "(['green', None, None, None, 'possible'], 'right')": 2.715690808573445, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.11733013487609, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.5949530678757013, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.17830486955108182, "(['red', None, None, None, 'possible'], None)": 0.208744208326292, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (7, 1), destination = (2, 3), deadline = 35
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, None, 'possible'], None)": 0.6560845548445203, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.598204951204143, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.29822707576795765, "(['green', None, None, None, 'possible'], 'right')": 2.1167549286994944, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.11733013487609, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.5949530678757013, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.28583329755840686, "(['red', None, None, None, 'possible'], None)": 0.208744208326292, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'forward', 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (3, 3), destination = (6, 1), deadline = 25
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.036546017431290795, "(['green', None, None, 'forward', 'possible'], 'left')": 0.12513482012031868, "(['green', None, None, None, 'possible'], None)": 0.6560845548445203, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.4815036508470392, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.059963140016477685, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.29822707576795765, "(['green', None, None, None, 'possible'], 'right')": 1.5835936674376534, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.8958192999822375, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48869269514004676, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3111896688236621, "(['red', None, None, None, 'possible'], None)": 0.5026100952552934, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (6, 1), destination = (2, 2), deadline = 25
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.8279324016629533, "(['green', None, None, 'forward', 'possible'], 'left')": 0.12513482012031868, "(['green', None, None, None, 'possible'], None)": 0.6560845548445203, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.9897045614972496, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.059963140016477685, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.2865334054105145, "(['green', None, None, None, 'possible'], 'right')": 1.447153412570723, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.8958192999822375, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48869269514004676, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3111896688236621, "(['red', None, None, None, 'possible'], None)": 0.5026100952552934, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 34
Environment.reset(): Trial set up with start = (5, 4), destination = (8, 6), deadline = 25
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5859278051810354, "(['green', None, None, 'forward', 'possible'], 'left')": 0.12513482012031868, "(['green', None, None, None, 'possible'], None)": 0.6560845548445203, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.7548857822179934, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.059963140016477685, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.2865334054105145, "(['green', None, None, None, 'possible'], 'right')": 0.9458546927904896, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.8958192999822375, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48869269514004676, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3111896688236621, "(['red', None, None, None, 'possible'], None)": 0.5026100952552934, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (5, 6), destination = (1, 3), deadline = 35
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5859278051810354, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.6560845548445203, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.8902625194008076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.7984812003427035, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.2865334054105145, "(['green', None, None, None, 'possible'], 'right')": 1.4222522802473005, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.8958192999822375, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48869269514004676, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3111896688236621, "(['red', None, None, None, 'possible'], None)": 0.308665424748657, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (4, 5), destination = (8, 2), deadline = 35
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5859278051810354, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.6560845548445203, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.457923591712838, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.7984812003427035, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.3382352653571416, "(['green', None, None, None, 'possible'], 'right')": 1.3187964178963831, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.273949519822188, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48869269514004676, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3957695922176954, "(['red', None, None, None, 'possible'], None)": 0.33812897328292796, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', 'left', None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (8, 2), destination = (2, 1), deadline = 35
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5859278051810354, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.7332505020316104, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.267511417772738, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.7984812003427035, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.2990313442288598, "(['green', None, None, None, 'possible'], 'right')": 1.2049164805663106, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9794980053966709, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48869269514004676, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3957695922176954, "(['red', None, None, None, 'possible'], None)": 0.4024913656791888, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (7, 1), destination = (4, 2), deadline = 20
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.35698882662949283, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.41821398763946566, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.009205029469120149, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.7984812003427035, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.2990313442288598, "(['green', None, None, None, 'possible'], 'right')": 0.3255102148982898, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9794980053966709, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.2585992574945635, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3957695922176954, "(['red', None, None, None, 'possible'], None)": 0.17858755718723618, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (8, 5), destination = (7, 1), deadline = 25
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.1266803122187304, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.3021596060695139, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.009205029469120149, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.7984812003427035, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.2990313442288598, "(['green', None, None, None, 'possible'], 'right')": 0.5228305336519854, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9794980053966709, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.14975428030242716, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.55768428804222, "(['red', None, None, None, 'possible'], None)": 0.04866341722339356, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (7, 3), destination = (3, 6), deadline = 35
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.1266803122187304, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.3021596060695139, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.129311464494526, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.7984812003427035, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6508445821666219, "(['green', None, None, None, 'possible'], 'right')": 1.8177068056034553, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9794980053966709, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.14975428030242716, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.55768428804222, "(['red', None, None, None, 'possible'], None)": 0.008143494087183714, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (3, 3), destination = (7, 2), deadline = 25
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.1266803122187304, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.1975251640341364, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.09654224978890408, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.5603678727739628, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6508445821666219, "(['green', None, None, None, 'possible'], 'right')": 0.19084688492009522, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9794980053966709, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.14975428030242716, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.55768428804222, "(['red', None, None, None, 'possible'], None)": 0.0036133115887957506, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (4, 2), destination = (8, 4), deadline = 30
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.06078178470856935, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.02809632641082617, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21733908802008287, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.5603678727739628, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6508445821666219, "(['green', None, None, None, 'possible'], 'right')": -0.03906010778446782, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.044711306560729525, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.6900960759446717, "(['red', None, None, None, 'possible'], None)": 0.0013627587155165162, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, 'forward', None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (1, 4), destination = (6, 1), deadline = 40
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.06078178470856935, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 0.0028874501802724616, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21733908802008287, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.2464719599033979, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7555141129482146, "(['green', None, None, None, 'possible'], 'right')": -0.03906010778446782, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.044711306560729525, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.6900960759446717, "(['red', None, None, None, 'possible'], None)": 0.00014005026284396468, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (7, 5), destination = (6, 1), deadline = 25
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.06078178470856935, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 9.512878276466837e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.2464719599033979, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7555141129482146, "(['green', None, None, None, 'possible'], 'right')": -0.03906010778446782, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.18129658873478233, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7830659273035419, "(['red', None, None, None, 'possible'], None)": 8.839051522239037e-06, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (6, 6), destination = (2, 1), deadline = 45
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.06078178470856935, "(['green', None, None, 'forward', 'possible'], 'left')": 0.8876900637490582, "(['green', None, None, None, 'possible'], None)": 1.3531285214671623e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.2464719599033979, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7555141129482146, "(['green', None, None, None, 'possible'], 'right')": -0.03906010778446782, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2769037238605533, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7830659273035419, "(['red', None, None, None, 'possible'], None)": 1.068689886949371e-06, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (1, 5), destination = (4, 4), deadline = 20
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.06078178470856935, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 7.259048718221363e-07, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7555141129482146, "(['green', None, None, None, 'possible'], 'right')": 0.21430366109906124, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2769037238605533, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7830659273035419, "(['red', None, None, None, 'possible'], None)": 3.520863105898222e-08, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (6, 6), destination = (1, 5), deadline = 30
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.06078178470856935, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 1.4291208924801163e-07, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7555141129482146, "(['green', None, None, None, 'possible'], 'right')": -0.12266560485592827, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2769037238605533, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7830659273035419, "(['red', None, None, None, 'possible'], None)": 9.594018363168702e-09, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (2, 1), destination = (5, 4), deadline = 30
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19254724121111474, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 2.391537257722189e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7555141129482146, "(['green', None, None, None, 'possible'], 'right')": 0.26736024638422673, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2769037238605533, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8481461482286903, "(['red', None, None, None, 'possible'], None)": 1.6054941529103732e-09, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (6, 5), destination = (2, 3), deadline = 30
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19254724121111474, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 2.391537257722189e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7555141129482146, "(['green', None, None, None, 'possible'], 'right')": 1.2243272702086827, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2769037238605533, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8481461482286903, "(['red', None, None, None, 'possible'], None)": 1.0132823207935781e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (5, 5), destination = (7, 2), deadline = 25
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19254724121111474, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 2.391537257722189e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.880201915329844, "(['green', None, None, None, 'possible'], 'right')": 1.0421024387111868, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2769037238605533, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8937023037507489, "(['red', None, None, None, 'possible'], None)": 1.2251139911699234e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (6, 3), destination = (3, 2), deadline = 20
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23340042619270296, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 2.391537257722189e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.880201915329844, "(['green', None, None, None, 'possible'], 'right')": 0.39305762030811753, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2769037238605533, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8937023037507489, "(['red', None, None, None, 'possible'], None)": 6.572296722882223e-13, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (6, 6), destination = (3, 2), deadline = 35
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23340042619270296, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 2.391537257722189e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9161413407308678, "(['green', None, None, None, 'possible'], 'right')": 1.2195388914708571, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3906828246916173, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8937023037507489, "(['red', None, None, None, 'possible'], None)": 1.0998294520977319e-13, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (2, 2), destination = (7, 6), deadline = 45
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23340042619270296, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.17355245486384763, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.02253037721367318, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.958909256958123, "(['green', None, None, None, 'possible'], 'right')": 1.3084442436262016, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3906828246916173, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8937023037507489, "(['red', None, None, None, 'possible'], None)": 6.9414001768770814e-15, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (8, 1), destination = (1, 3), deadline = 45
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23340042619270296, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.2852363651042249, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.958909256958123, "(['green', None, None, None, 'possible'], 'right')": 1.5089052612722644, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.3137933660080193, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9255916126255241, "(['red', None, None, None, 'possible'], None)": 1.9438531300633286e-16, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (7, 5), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23340042619270296, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.04899214529125839, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3021244603589076, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9712364798706861, "(['green', None, None, None, 'possible'], 'right')": 0.007336381107699685, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.0682929472252285, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9255916126255241, "(['red', None, None, None, 'possible'], None)": 7.534283581842003e-18, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (2, 1), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23340042619270296, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.2561344052857965, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2665759880963554, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9712364798706861, "(['green', None, None, None, 'possible'], 'right')": 1.2713239866126589, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2861906005159889, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.29130129716427633, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9479141288378667, "(['red', None, None, None, 'possible'], None)": 2.053020889009315e-18, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (4, 4), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23340042619270296, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.2561344052857965, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2665759880963554, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9712364798706861, "(['green', None, None, None, 'possible'], 'right')": 1.898213873151089, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.29130129716427633, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9635398901865067, "(['red', None, None, None, 'possible'], None)": 4.0418726462276947e-19, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (8, 2), destination = (1, 2), deadline = 35
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.2561344052857965, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2665759880963554, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9798655359094801, "(['green', None, None, None, 'possible'], 'right')": 0.40689746396235227, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.29130129716427633, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9635398901865067, "(['red', None, None, None, 'possible'], None)": 4.886846072220482e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (2, 5), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.2561344052857965, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2665759880963554, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9798655359094801, "(['green', None, None, None, 'possible'], 'right')": 0.40689746396235227, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.29130129716427633, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9635398901865067, "(['red', None, None, None, 'possible'], None)": 4.886846072220482e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (6, 4), destination = (1, 4), deadline = 25
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.217714244492927, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.0690767651670499, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9798655359094801, "(['green', None, None, None, 'possible'], 'right')": 1.036584269052967, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.13891634492734675, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9635398901865067, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (6, 6), destination = (1, 2), deadline = 45
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5572817342389648, "(['green', None, None, None, 'possible'], None)": 0.217714244492927, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.756122306190869, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9798655359094801, "(['green', None, None, None, 'possible'], 'right')": 0.5388386196902255, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.3269637907524976, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9635398901865067, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'forward', 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (5, 5), destination = (6, 2), deadline = 20
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5386668848828302, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.3012125768019658, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9798655359094801, "(['green', None, None, None, 'possible'], 'right')": 1.5771367987419807, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.4194354212532139, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9635398901865067, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'right', 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (2, 6), destination = (4, 1), deadline = 35
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.5386668848828302, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 2.171917773311027, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9798655359094801, "(['green', None, None, None, 'possible'], 'right')": 2.238917934983153, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.4194354212532139, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7241105937079269, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'forward', 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 4), deadline = 25
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.5417822290724288, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9798655359094801, "(['green', None, None, None, 'possible'], 'right')": 1.2613204241573057, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.36119916122708084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5594650024408041, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (7, 3), destination = (2, 5), deadline = 35
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31338029833489206, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.4800728035073574, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.015436139949244032, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 1.2140253700848478, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.913976439008477, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.36119916122708084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5594650024408041, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 66
Environment.reset(): Trial set up with start = (5, 1), destination = (7, 3), deadline = 20
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.8129520025463847, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.6482782825656936, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 0.5804861231089306, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.7601591391082819, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.36119916122708084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5594650024408041, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (5, 6), destination = (6, 2), deadline = 25
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5410092021644269, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.16340743117779, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 1.6783678544472886, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.7601591391082819, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.36119916122708084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.4484928440605017, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (7, 4), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5410092021644269, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.6871430283981336, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 1.8471640893232304, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.7601591391082819, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.36119916122708084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.3213607104884582, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (6, 5), destination = (6, 1), deadline = 20
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5410092021644269, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.5864371926435865, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 1.2910550544829782, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4494149316246387, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.7601591391082819, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.36119916122708084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.34734176122115873, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (1, 6), destination = (5, 1), deadline = 45
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5410092021644269, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2574229162061607, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 2.4451200087797527, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 2.6548889284443473, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.7601591391082819, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.36119916122708084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.34734176122115873, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.5509641924870423e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (4, 1), destination = (7, 2), deadline = 20
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.27135738461521264, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2706672144751923, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.11754329810406755, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 0.20463704162349003, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.7601591391082819, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.545769483913738, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.34734176122115873, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.566610884711104e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
random
action:  left
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (5, 6), destination = (1, 6), deadline = 20
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.27135738461521264, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2706672144751923, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.11754329810406755, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8196141139287255, "(['green', None, None, None, 'possible'], 'right')": 1.1206693608262868, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5219171931867397, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.39589791648937267, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.543139232854811, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 5.0221955589039855e-21, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (4, 2), destination = (7, 3), deadline = 20
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5214576438460514, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.2846373330193947, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.11754329810406755, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8737298797501079, "(['green', None, None, None, 'possible'], 'right')": 0.6344685525784006, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5219171931867397, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.39589791648937267, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.543139232854811, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 8.404304952705673e-22, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 5), deadline = 30
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.09925314767877214, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.18080848147620654, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.11754329810406755, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8737298797501079, "(['green', None, None, None, 'possible'], 'right')": -0.005459138312199435, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5219171931867397, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.12712854154256084, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.6801974629983677, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.290093469151161e-22, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (1, 4), destination = (6, 3), deadline = 30
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.09925314767877214, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.3112569550236127, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.11754329810406755, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8737298797501079, "(['green', None, None, None, 'possible'], 'right')": -0.005459138312199435, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9653420352307177, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 2.0267463826256935, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.6801974629983677, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.7004192766658954e-23, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (6, 3), destination = (5, 6), deadline = 20
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.09925314767877214, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.09978184834875777, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21467174719953708, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9116109158250754, "(['green', None, None, None, 'possible'], 'right')": -0.005459138312199435, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9653420352307177, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.18776353757815617, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.6801974629983677, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.4853879805786445e-24, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (2, 4), destination = (5, 2), deadline = 25
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19594437713113058, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.016697818164026296, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21467174719953708, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9116109158250754, "(['green', None, None, None, 'possible'], 'right')": -0.005459138312199435, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.1154872616014004, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9653420352307177, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.18776353757815617, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7761382240988574, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 4.761813537818675e-25, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (8, 5), destination = (1, 2), deadline = 50
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19594437713113058, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.016697818164026296, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21467174719953708, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9116109158250754, "(['green', None, None, None, 'possible'], 'right')": 0.5178801207702022, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.9653420352307177, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.18776353757815617, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8432967568692, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 9.374792038396404e-26, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (7, 3), destination = (2, 5), deadline = 35
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19594437713113058, "(['green', None, None, 'forward', 'possible'], 'left')": 0.48993924939410527, "(['green', None, None, None, 'possible'], None)": 0.0004676017125693746, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21467174719953708, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9116109158250754, "(['green', None, None, None, 'possible'], 'right')": -0.0678318708319996, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.4236456060378449, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8432967568692, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.6252943762317723e-27, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (4, 3), destination = (1, 2), deadline = 20
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2871610639917914, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 4.8055273472830156e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.30021060382132336, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9381276410775528, "(['green', None, None, None, 'possible'], 'right')": -0.1974316332468, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8432967568692, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.6980063546662825e-28, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (5, 6), destination = (7, 2), deadline = 30
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2871610639917914, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 4.8055273472830156e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.36014742267492633, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9381276410775528, "(['green', None, None, None, 'possible'], 'right')": 1.2354047882936818, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9232154108659079, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 4.5149313488504724e-29, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (1, 1), destination = (3, 5), deadline = 30
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2871610639917914, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 4.8055273472830156e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.40210319587244836, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9381276410775528, "(['green', None, None, None, 'possible'], 'right')": 1.352357158707006, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9232154108659079, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 4.6399800267599264e-30, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (4, 6), destination = (7, 1), deadline = 40
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2871610639917914, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 6.835466538434638e-06, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.40210319587244836, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9381276410775528, "(['green', None, None, None, 'possible'], 'right')": -0.14768668926528072, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9232154108659079, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 4.76849213980021e-31, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (3, 5), destination = (8, 5), deadline = 25
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2871610639917914, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 4.314096930976834e-07, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.31852776288928614, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": 0.13325662785148695, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9381276410775528, "(['green', None, None, None, 'possible'], 'right')": -0.327365869618381, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9232154108659079, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.8482451931884843e-32, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (7, 4), destination = (8, 1), deadline = 20
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.37572038188023693, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 8.493352635542034e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.3893067252222964, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7349272108186291, "(['green', None, None, None, 'possible'], 'right')": -0.327365869618381, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9232154108659079, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.8482451931884843e-32, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (7, 6), destination = (1, 1), deadline = 55
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.37572038188023693, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 1.672123740978044e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.353726987694193, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7349272108186291, "(['green', None, None, None, 'possible'], 'right')": -0.327365869618381, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.2758737913609153, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9232154108659079, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.8482451931884843e-32, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 55, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 54, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 53, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 52, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 51, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (8, 2), destination = (3, 4), deadline = 35
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.15852300324646806, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 2.8756866146702896e-10, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.2078095725996802, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7279320701270084, "(['green', None, None, None, 'possible'], 'right')": -0.327365869618381, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.4931116540670124, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7200938659798181, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.8482451931884843e-32, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (5, 1), destination = (1, 1), deadline = 20
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.26096610227252764, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 2.1352285481377822e-11, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6970638383377121, "(['green', None, None, None, 'possible'], 'right')": -0.327365869618381, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 1.4931116540670124, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7200938659798181, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.1350535792668777e-32, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (6, 3), destination = (3, 6), deadline = 30
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.26096610227252764, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 4.945551159363903e-12, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6970638383377121, "(['green', None, None, None, 'possible'], 'right')": -0.327365869618381, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.02543086440748231, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8040657061858727, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.234629973129716e-33, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (3, 2), destination = (7, 2), deadline = 20
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.26096610227252764, "(['green', None, None, 'forward', 'possible'], 'left')": 0.19295747457587367, "(['green', None, None, None, 'possible'], None)": 7.034638869147545e-13, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7879446868363984, "(['green', None, None, None, 'possible'], 'right')": -0.41540927611248735, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16780160508523762, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8040657061858727, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.9520435628299723e-34, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'forward', None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (6, 1), destination = (8, 5), deadline = 30
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.26096610227252764, "(['green', None, None, 'forward', 'possible'], 'left')": 0.10753765040885054, "(['green', None, None, None, 'possible'], None)": 4.3201475955152356e-13, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7879446868363984, "(['green', None, None, None, 'possible'], 'right')": 1.5851814149594639, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.4692302842046852, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16780160508523762, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8040657061858727, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 4.5212636903446195e-35, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (1, 6), destination = (4, 5), deadline = 20
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.26096610227252764, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 0.2426954252658838, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7879446868363984, "(['green', None, None, None, 'possible'], 'right')": 1.1878770526543874, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16780160508523762, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8040657061858727, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 4.646487753187029e-36, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5955052863073887, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 0.2426954252658838, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7879446868363984, "(['green', None, None, None, 'possible'], 'right')": 1.0120275443340083, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16780160508523762, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8628459943301108, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 4.77518010874332e-37, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (6, 6), destination = (6, 2), deadline = 20
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.09932564535289629, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 0.0990854846681373, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7879446868363984, "(['green', None, None, None, 'possible'], 'right')": 0.09300947221511441, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16780160508523762, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8628459943301108, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 9.401107395285077e-38, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (2, 3), destination = (6, 3), deadline = 20
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09374160809736315, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 0.043964755938889814, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7879446868363984, "(['green', None, None, None, 'possible'], 'right')": -0.08489336944941991, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2548277242644788, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8628459943301108, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.1774557865763663e-38, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (3, 4), destination = (2, 1), deadline = 20
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09374160809736315, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 0.011979979429002318, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7879446868363984, "(['green', None, None, None, 'possible'], 'right')": -0.08489336944941991, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8951781578501115, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2548277242644788, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8628459943301108, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 5.043356599535079e-39, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (6, 2), destination = (1, 6), deadline = 45
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09374160809736315, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 0.0012311785269053601, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8515612807854789, "(['green', None, None, None, 'possible'], 'right')": -0.08489336944941991, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.47662471049507793, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2548277242644788, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8628459943301108, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 2.2377641160456486e-39, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (2, 6), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2156191256681542, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 4.7719902384174845e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15288670732179105, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8515612807854789, "(['green', None, None, None, 'possible'], 'right')": -0.29659775103021574, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.47662471049507793, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2548277242644788, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8628459943301108, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 5.32659401548057e-41, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'right', 'possible']
action:  None
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (2, 4), destination = (6, 4), deadline = 20
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2156191256681542, "(['green', None, None, 'forward', 'possible'], 'left')": 0.07763619079287562, "(['green', None, None, None, 'possible'], None)": 1.1052738067155119e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2570206951252537, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'left')": -0.05672029579250516, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8515612807854789, "(['green', None, None, None, 'possible'], 'right')": -0.29659775103021574, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.6284611989432793, "(['red', None, 'forward', None, 'possible'], 'right')": -0.15, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": -0.15, "(['red', 'forward', None, None, 'possible'], 'right')": 0.47662471049507793, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2548277242644788, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8628459943301108, "(['green', None, None, 'right', 'possible'], 'forward')": 0.10036732942262783, "(['red', None, None, None, 'possible'], None)": 1.233729439955994e-41, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.1859761291337577, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.