self.epsilon = 0.1
self.alpha = 0.2 # Alpha is the learning rate
self.gamma = 0.5 # gamma is the value of future reward. Learning doesn't work well with high gamma.
self.actions = [None, 'forward', 'left', 'right']
self.q = {}
self.defaultq = 0.0

SUCCESS: 8/100

((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ python smartcab/agent.py 
Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (8, 4), destination = (4, 4), deadline = 20
RoutePlanner.route_to(): destination = (4, 4)
q:  {}
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
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (5, 6), destination = (8, 2), deadline = 35
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, None, 'possible'], 'forward')": -0.1, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.2}
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (1, 2), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.2, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": 0.42620800000000025, "(['green', None, None, None, 'possible'], 'left')": -0.1, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', None, 'right', None, 'possible'], None)": 0.0}
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
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (6, 6), destination = (8, 4), deadline = 20
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.2, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.0065041919999998254, "(['green', None, None, None, 'possible'], 'left')": -0.18000000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.2, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
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
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (2, 1), destination = (5, 4), deadline = 30
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.2, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.0065041919999998254, "(['green', None, None, None, 'possible'], 'left')": -0.18000000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.2, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
random
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (3, 4), destination = (6, 3), deadline = 20
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.2, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.0065041919999998254, "(['green', None, None, None, 'possible'], 'left')": -0.18000000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.2, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (6, 1), destination = (2, 1), deadline = 20
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.48800000000000004, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.0065041919999998254, "(['green', None, None, None, 'possible'], 'left')": -0.18000000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.2, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (3, 5), destination = (7, 2), deadline = 35
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.48800000000000004, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.0065041919999998254, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.18000000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.2, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
random
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 8
Environment.reset(): Trial set up with start = (2, 4), destination = (8, 2), deadline = 40
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.48800000000000004, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.0065041919999998254, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.18000000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.36000000000000004, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
random
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'left', 'possible']
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
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (3, 1), destination = (6, 5), deadline = 35
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.5904, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": 1.0968644366376739, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.24400000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.36000000000000004, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (6, 4), destination = (1, 6), deadline = 35
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.5904, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": 0.9122300825757362, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.24400000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.36000000000000004, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
random
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (7, 5), destination = (2, 6), deadline = 30
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": 1.2699990146455533, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.24400000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.48800000000000004, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', 'right', None, 'possible']
action:  None
state2:  ['red', 'left', 'right', None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'left', 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 4), deadline = 25
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": 1.332453991353804, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.24400000000000002, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.48800000000000004, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 13
Environment.reset(): Trial set up with start = (3, 2), destination = (6, 4), deadline = 25
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.01555533608651212, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.14860368069169572, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.48800000000000004, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (5, 3), destination = (8, 4), deadline = 20
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.01555533608651212, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.21888294455335658, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5904, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  left
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (7, 5), destination = (8, 1), deadline = 25
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.01555533608651212, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.01807657606273337, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5904, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (3, 5), destination = (1, 2), deadline = 25
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], None)": 0.031004458490463228, "(['green', None, None, None, 'possible'], 'right')": 0.23474282747117173, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.01807657606273337, "(['green', None, None, None, 'possible'], 'forward')": -0.18000000000000002, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.67232, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (8, 2), destination = (4, 6), deadline = 40
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], None)": 0.031004458490463228, "(['green', None, None, None, 'possible'], 'right')": 1.060577032694368, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.01807657606273337, "(['green', None, None, None, 'possible'], 'forward')": 0.256, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7378560000000001, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  right
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 1), deadline = 40
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.01807657606273337, "(['green', None, None, None, 'possible'], None)": 0.031004458490463228, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.18000000000000002, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], 'right')": 0.14138282037388442, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.5277852682240003, "(['red', None, None, None, 'possible'], 'left')": -0.7378560000000001, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (2, 6), destination = (5, 3), deadline = 30
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09040816187560843, "(['green', None, None, None, 'possible'], None)": 0.031004458490463228, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.18000000000000002, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], 'right')": 0.5898128373762125, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.09000485380915224, "(['red', None, None, None, 'possible'], 'left')": -0.7378560000000001, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (6, 4), destination = (8, 2), deadline = 20
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09040816187560843, "(['green', None, None, None, 'possible'], None)": 0.031004458490463228, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.18000000000000002, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.67232, "(['green', None, None, None, 'possible'], 'right')": 0.9201350140556279, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.09000485380915224, "(['red', None, None, None, 'possible'], 'left')": -0.7902848, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
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
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (6, 1), destination = (3, 6), deadline = 40
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09040816187560843, "(['green', None, None, None, 'possible'], None)": 0.11305328780437582, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.18000000000000002, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7378560000000001, "(['green', None, None, None, 'possible'], 'right')": 0.6205492429809883, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.09000485380915224, "(['red', None, None, None, 'possible'], 'left')": -0.7902848, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (2, 1), destination = (4, 6), deadline = 35
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09040816187560843, "(['green', None, None, None, 'possible'], None)": 0.11305328780437582, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.15435606056152096, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7378560000000001, "(['green', None, None, None, 'possible'], 'right')": 1.2274579899678013, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.9003489054346376, "(['red', None, None, None, 'possible'], 'left')": -0.83222784, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (1, 1), destination = (8, 5), deadline = 55
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09040816187560843, "(['green', None, None, None, 'possible'], None)": 0.11305328780437582, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2234848484492168, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7902848, "(['green', None, None, None, 'possible'], 'right')": 1.1454063791462383, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.6202791243477102, "(['red', None, None, None, 'possible'], 'left')": -0.8657822720000001, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 55, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 54, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 53, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 52, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 51, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Environment.reset(): Trial set up with start = (6, 2), destination = (8, 5), deadline = 25
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.09040816187560843, "(['green', None, None, None, 'possible'], None)": 0.10174795902393824, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.27878787875937344, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7902848, "(['green', None, None, None, 'possible'], 'right')": 0.03260864020357526, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.0871381808541998, "(['red', None, None, None, 'possible'], 'left')": -0.8657822720000001, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['green', 'left', None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (2, 3), destination = (5, 5), deadline = 25
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.16316921318833233, "(['green', None, None, None, 'possible'], None)": 0.03547731963582553, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3230303030074988, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7902848, "(['green', None, None, None, 'possible'], 'right')": -0.06373829193474596, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.030289455316640165, "(['red', None, None, None, 'possible'], 'left')": -0.8926258176000001, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (1, 6), destination = (8, 3), deadline = 50
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.16316921318833233, "(['green', None, None, None, 'possible'], None)": 0.012370176469548758, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.07432165205482576, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7902848, "(['green', None, None, None, 'possible'], 'right')": -0.06373829193474596, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.030289455316640165, "(['red', None, None, None, 'possible'], 'left')": -0.8926258176000001, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', 'right', 'possible']
action:  None
state2:  ['green', None, 'right', 'right', 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': 'right'}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (1, 3), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 1.0353493814611356, "(['green', None, None, None, 'possible'], None)": 0.004313213835163988, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21597418124846046, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.83222784, "(['green', None, None, None, 'possible'], 'right')": -0.14137383415559548, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.12332977838868203, "(['red', None, None, None, 'possible'], 'left')": -0.931280523264, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (5, 5), destination = (2, 2), deadline = 30
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.18037707733844552, "(['green', None, None, None, 'possible'], None)": 0.004313213835163988, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21597418124846046, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.83222784, "(['green', None, None, None, 'possible'], 'right')": -0.14137383415559548, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.22425038616274573, "(['red', None, None, None, 'possible'], 'left')": -0.931280523264, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
random
action:  forward
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', 'forward', None, None, 'possible']
random
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (2, 5), destination = (8, 1), deadline = 50
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.18037707733844552, "(['green', None, None, None, 'possible'], None)": 0.004313213835163988, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.21597418124846046, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.83222784, "(['green', None, None, None, 'possible'], 'right')": -0.14137383415559548, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.0267927807062585, "(['red', None, None, None, 'possible'], 'left')": -0.931280523264, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (7, 1), destination = (5, 6), deadline = 35
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.18037707733844552, "(['green', None, None, None, 'possible'], None)": 0.004313213835163988, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2727793449987684, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.83222784, "(['green', None, None, None, 'possible'], 'right')": -0.2130990673244764, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.7214342245650068, "(['red', None, None, None, 'possible'], 'left')": -0.931280523264, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (4, 4), destination = (6, 2), deadline = 20
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1401028034530554, "(['green', None, None, None, 'possible'], None)": 0.002829899597251093, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2727793449987684, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.83222784, "(['green', None, None, None, 'possible'], 'right')": 0.6544564991490923, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.09680824378928726, "(['red', None, None, None, 'possible'], 'left')": -0.931280523264, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (7, 2), destination = (6, 5), deadline = 20
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1401028034530554, "(['green', None, None, None, 'possible'], None)": 0.06770956959271011, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2727793449987684, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8657822720000001, "(['green', None, None, None, 'possible'], 'right')": 1.0917268116368308, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.09680824378928726, "(['red', None, None, None, 'possible'], 'left')": -0.931280523264, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (5, 2), destination = (2, 4), deadline = 25
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1401028034530554, "(['green', None, None, None, 'possible'], None)": 0.06770956959271011, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2727793449987684, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8657822720000001, "(['green', None, None, None, 'possible'], 'right')": 1.3600580886419773, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.09680824378928726, "(['red', None, None, None, 'possible'], 'left')": -0.9450244186112, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 34
Environment.reset(): Trial set up with start = (5, 2), destination = (1, 2), deadline = 20
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1401028034530554, "(['green', None, None, None, 'possible'], None)": 0.06770956959271011, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2727793449987684, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8926258176000001, "(['green', None, None, None, 'possible'], 'right')": 1.0019229432257584, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.09680824378928726, "(['red', None, None, None, 'possible'], 'left')": -0.9450244186112, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (2, 6), destination = (6, 2), deadline = 40
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1401028034530554, "(['green', None, None, None, 'possible'], None)": 0.16632341407545453, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2727793449987684, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8926258176000001, "(['green', None, None, None, 'possible'], 'right')": 0.912437464181604, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.09680824378928726, "(['red', None, None, None, 'possible'], 'left')": -0.9450244186112, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (8, 5), destination = (4, 6), deadline = 25
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.16438674534136882, "(['green', None, None, None, 'possible'], None)": 0.05799338857193591, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3182234759990147, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8926258176000001, "(['green', None, None, None, 'possible'], 'right')": 0.012726065145394885, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.09680824378928726, "(['red', None, None, None, 'possible'], 'left')": -0.95601953488896, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
self.state:['red', None, None, 'right', 'possible']
action:  None
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (1, 2), destination = (1, 6), deadline = 20
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.016379045853334395, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3182234759990147, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8926258176000001, "(['green', None, None, None, 'possible'], 'right')": 0.012726065145394885, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.09680824378928726, "(['red', None, None, None, 'possible'], 'left')": -0.95601953488896, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (7, 2), destination = (2, 3), deadline = 30
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.0057110201584670145, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3545787807992118, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.931280523264, "(['green', None, None, None, 'possible'], 'right')": -0.08854654136914461, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.17666319034576905, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
random
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
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (3, 2), destination = (6, 4), deadline = 25
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.0013064982287134845, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3545787807992118, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.931280523264, "(['green', None, None, None, 'possible'], 'right')": -0.08854654136914461, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.17666319034576905, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, 'right', 'possible']
action:  None
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (8, 6), destination = (5, 1), deadline = 40
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.00033209432023391735, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3545787807992118, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.931280523264, "(['green', None, None, None, 'possible'], 'right')": -0.08854654136914461, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.17666319034576905, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
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
random
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
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (8, 1), destination = (2, 5), deadline = 50
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 3.633742481631203e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3545787807992118, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.931280523264, "(['green', None, None, None, 'possible'], 'right')": -0.08854654136914461, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.17666319034576905, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (6, 2), destination = (1, 2), deadline = 25
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 2.608656415353443e-06, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9450244186112, "(['green', None, None, None, 'possible'], 'right')": -0.17083679131706114, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.20693621173613116, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (3, 5), destination = (3, 1), deadline = 20
RoutePlanner.route_to(): destination = (3, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.13456966014153335, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9450244186112, "(['green', None, None, None, 'possible'], 'right')": -0.17083679131706114, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.3456757321640105, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (6, 3), destination = (8, 1), deadline = 20
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.13456966014153335, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9450244186112, "(['green', None, None, None, 'possible'], 'right')": -0.17083679131706114, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.9765405857312085, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (8, 4), destination = (1, 5), deadline = 40
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.09810128224317782, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.95601953488896, "(['green', None, None, None, 'possible'], 'right')": -0.17083679131706114, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.04931091171444685, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (3, 2), destination = (8, 4), deadline = 35
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.01636052908939752, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.22784031765176294, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.05562017945699785, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9648156279111679, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (8, 2), destination = (1, 2), deadline = 35
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.009689907691801067, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.013640525838342368, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.14398273282700913, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9718525023289344, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
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
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (4, 3), destination = (8, 3), deadline = 20
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.2257100574159015, "(['green', None, None, None, 'possible'], None)": 0.0057217935929316155, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.013640525838342368, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.14398273282700913, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9718525023289344, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'right', 'possible']
action:  None
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (2, 5), destination = (5, 2), deadline = 30
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.28010458065169375, "(['green', None, None, None, 'possible'], None)": 0.0017955594581018143, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4255443357691965, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.013640525838342368, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.14398273282700913, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9718525023289344, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
self.state:['green', None, None, 'right', 'possible']
action:  None
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (4, 6), destination = (4, 1), deadline = 25
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.04852999869789519, "(['green', None, None, None, 'possible'], None)": 0.0006260728709577423, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.04765162510771426, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.013640525838342368, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.14398273282700913, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9718525023289344, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
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
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (2, 1), destination = (1, 5), deadline = 25
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.13882399895831615, "(['green', None, None, None, 'possible'], None)": 0.00017682147074792422, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.06181609262673283, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.21516435645040388, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9774820018631476, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (7, 5), destination = (7, 1), deadline = 20
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.13882399895831615, "(['green', None, None, None, 'possible'], None)": 0.01062403567713733, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.06181609262673283, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.4629578390093059, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9774820018631476, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (5, 2), destination = (8, 3), deadline = 20
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.13882399895831615, "(['green', None, None, None, 'possible'], None)": 0.01062403567713733, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.06181609262673283, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 2.1504962646377845, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9774820018631476, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (5, 2), destination = (8, 6), deadline = 35
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.04132433129214379, "(['green', None, None, None, 'possible'], None)": 0.01062403567713733, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.06181609262673283, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.054667474675820935, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
random
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
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (2, 3), destination = (7, 4), deadline = 30
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.04132433129214379, "(['green', None, None, None, 'possible'], None)": 0.0019686552596817736, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.056266020259343255, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (1, 1), destination = (5, 1), deadline = 20
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.04132433129214379, "(['green', None, None, None, 'possible'], None)": 0.0004503651779110732, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.056266020259343255, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (2, 2), destination = (6, 5), deadline = 35
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.04132433129214379, "(['green', None, None, None, 'possible'], None)": 0.00012719642844460764, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.056266020259343255, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (4, 6), destination = (8, 1), deadline = 45
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.04132433129214379, "(['green', None, None, None, 'possible'], None)": 1.9091501538474245e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9718525023289344, "(['green', None, None, None, 'possible'], 'right')": -0.1109124206706739, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1450128162074746, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (6, 6), destination = (6, 2), deadline = 20
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.20644533127652798, "(['green', None, None, None, 'possible'], None)": 1.8800755194083097e-06, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9774820018631476, "(['green', None, None, None, 'possible'], 'right')": -0.18872993653653913, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2160102529659797, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (5, 5), destination = (8, 1), deadline = 35
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.05029999038641772, "(['green', None, None, None, 'possible'], None)": 7.283797770860967e-07, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9774820018631476, "(['green', None, None, None, 'possible'], 'right')": -0.18872993653653913, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.4, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.27280810245786236, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (6, 3), destination = (8, 1), deadline = 20
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.34467553013411834, "(['green', None, None, None, 'possible'], None)": 0.007171593223686862, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9774820018631476, "(['green', None, None, None, 'possible'], 'right')": -0.18872993653653913, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.30158704258925007, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (8, 6), destination = (6, 3), deadline = 25
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.05973736563547967, "(['green', None, None, None, 'possible'], None)": 0.007171593223686862, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9819856014905182, "(['green', None, None, None, 'possible'], 'right')": -0.18872993653653913, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3235210378896801, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'right', 'possible']
action:  None
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (2, 1), destination = (4, 5), deadline = 30
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.0462363709280683, "(['green', None, None, None, 'possible'], None)": 0.0030871357262553904, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9855884811924145, "(['green', None, None, None, 'possible'], 'right')": -0.18872993653653913, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3235210378896801, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (7, 5), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.034836828992811736, "(['green', None, None, None, 'possible'], None)": 0.0007847084809982211, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9855884811924145, "(['green', None, None, None, 'possible'], 'right')": -0.2508870716389846, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.35856677231791745, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
self.state:['red', 'right', None, 'forward', 'possible']
action:  None
state2:  ['red', 'right', None, 'forward', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (3, 1), destination = (7, 3), deadline = 30
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.034836828992811736, "(['green', None, None, None, 'possible'], None)": 0.00033779127047864235, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9855884811924145, "(['green', None, None, None, 'possible'], 'right')": -0.2508870716389846, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.35856677231791745, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
random
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
random
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 66
Environment.reset(): Trial set up with start = (1, 4), destination = (8, 4), deadline = 35
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 0.00013086725918876692, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.14945287410138627, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9884707849539316, "(['green', None, None, None, 'possible'], 'right')": -0.3007096573111877, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (5, 2), destination = (7, 5), deadline = 25
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 1.9642473540255852e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.8797627628823348, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9884707849539316, "(['green', None, None, None, 'possible'], 'right')": -0.07520876261124411, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (6, 4), destination = (3, 6), deadline = 25
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 4.4935679048249644e-06, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.270369683281185, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9884707849539316, "(['green', None, None, None, 'possible'], 'right')": -0.07520876261124411, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.11395846520731825, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (7, 2), destination = (2, 4), deadline = 35
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 1.2691163005056142e-06, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.015053744702345, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8673100107669, "(['green', None, None, None, 'possible'], 'right')": -0.07520876261124411, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9819856014905182, "(['red', None, None, None, 'possible'], None)": 0.11395846520731825, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (1, 4), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 1.714387934464804e-07, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.9529130568472381, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8673100107669, "(['green', None, None, None, 'possible'], 'right')": -0.07520876261124411, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.875262392172779, "(['red', None, None, None, 'possible'], None)": 0.11395846520731825, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (1, 6), destination = (6, 2), deadline = 45
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 5.977701107154492e-08, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.06947113047129375, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8673100107669, "(['green', None, None, None, 'possible'], 'right')": -0.07520876261124411, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.875262392172779, "(['red', None, None, None, 'possible'], None)": 0.11402897584076924, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
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
random
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
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (7, 1), destination = (1, 2), deadline = 35
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 5.2979995010488604e-09, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.037475982575835634, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.88943029245548, "(['green', None, None, None, 'possible'], 'right')": -0.15805403014552485, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.875262392172779, "(['red', None, None, None, 'possible'], None)": 0.013863261409109588, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (8, 3), destination = (6, 5), deadline = 20
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 9.817300035970529e-10, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.37001921403750454, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9110071428129588, "(['green', None, None, None, 'possible'], 'right')": -0.15805403014552485, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8991992819814992, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
action:  right
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (4, 3), destination = (7, 4), deadline = 20
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 2.0212950185188115e-10, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.44257436849018883, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9110071428129588, "(['green', None, None, None, 'possible'], 'right')": -0.15805403014552485, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8991992819814992, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (8, 6), destination = (6, 4), deadline = 20
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 8.701012272086916e-11, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.0831969310445058, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9110071428129588, "(['green', None, None, None, 'possible'], 'right')": -0.15805403014552485, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.386853417854334, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8991992819814992, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (1, 5), destination = (5, 2), deadline = 35
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.020859412149873566, "(['green', None, None, None, 'possible'], None)": 2.4574228629210013e-11, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.7097291168076147, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9110071428129588, "(['green', None, None, None, 'possible'], 'right')": -0.15805403014552485, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.22000000000000006, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4094827342793056, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8991992819814992, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (1, 2), destination = (5, 2), deadline = 20
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.5988259648194938, "(['green', None, None, None, 'possible'], None)": 0.03833124704791525, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.58864706522962, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7073598269447571, "(['green', None, None, None, 'possible'], 'right')": -0.01744500169703217, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4094827342793056, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8991992819814992, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (1, 5), destination = (5, 2), deadline = 35
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.8433656258104407, "(['green', None, None, None, 'possible'], None)": 0.03833124704791525, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.4462426792037411, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.4849631757514965, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7073598269447571, "(['green', None, None, None, 'possible'], 'right')": -0.01744500169703217, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4094827342793056, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8003546602747729, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 4), deadline = 25
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.17817655124810322, "(['green', None, None, None, 'possible'], None)": 0.03833124704791525, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.5031509463039625, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.4849631757514965, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6501680980208424, "(['green', None, None, None, 'possible'], 'right')": -0.01744500169703217, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4094827342793056, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8003546602747729, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (6, 5), destination = (2, 4), deadline = 25
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.23851268256296598, "(['green', None, None, None, 'possible'], None)": 0.03833124704791525, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.5303400836144957, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.4849631757514965, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6501680980208424, "(['green', None, None, None, 'possible'], 'right')": -0.09031360600553892, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4094827342793056, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8003546602747729, "(['red', None, None, None, 'possible'], None)": 0.0025688903274410702, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
random
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (1, 5), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.02350518196728167, "(['green', None, None, None, 'possible'], None)": 0.03833124704791525, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.54790256272855, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.565344222143819, "(['green', None, None, None, 'possible'], 'right')": -0.09031360600553892, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4094827342793056, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8003546602747729, "(['red', None, None, None, 'possible'], None)": 0.11166120386943595, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (8, 5), destination = (2, 5), deadline = 30
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.02350518196728167, "(['green', None, None, None, 'possible'], None)": 0.009743288702833268, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.17422223754150223, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.565344222143819, "(['green', None, None, None, 'possible'], 'right')": -0.09031360600553892, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.42554910779720534, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8003546602747729, "(['red', None, None, None, 'possible'], None)": 0.11166120386943595, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', 'left', None, None, 'possible']
random
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (1, 1), destination = (7, 6), deadline = 55
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.02350518196728167, "(['green', None, None, None, 'possible'], None)": 0.003057547235713073, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.723257852972657, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.565344222143819, "(['green', None, None, None, 'possible'], 'right')": -0.09031360600553892, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.36191141154536005, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8003546602747729, "(['red', None, None, None, 'possible'], None)": 0.11166120386943595, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 51, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (1, 5), destination = (6, 2), deadline = 40
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.02350518196728167, "(['green', None, None, None, 'possible'], None)": 0.00012961296880306287, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.05344920028582736, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6487713308204157, "(['green', None, None, None, 'possible'], 'right')": -0.09031360600553892, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.38950203038434, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8374454502351605, "(['red', None, None, None, 'possible'], None)": 0.01862194185734097, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'right', None, None, 'possible']
random
action:  left
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (1, 5), destination = (4, 4), deadline = 20
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 2.965128986779006e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.31404984427516336, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.6487713308204157, "(['green', None, None, None, 'possible'], 'right')": -0.09031360600553892, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.10543613772455504, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8693070532242834, "(['red', None, None, None, 'possible'], None)": 0.00473344776643045, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
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
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (3, 2), destination = (7, 1), deadline = 25
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 1.1487517220059976e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.048492735780707334, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.6487713308204157, "(['green', None, None, None, 'possible'], 'right')": -0.09031360600553892, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.10543613772455504, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8693070532242834, "(['red', None, None, None, 'possible'], None)": 0.0020375940536960487, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (6, 4), destination = (5, 1), deadline = 20
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 1.1487517220059976e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.048492735780707334, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.6487713308204157, "(['green', None, None, None, 'possible'], 'right')": 0.8350691140799307, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.10543613772455504, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8693070532242834, "(['red', None, None, None, 'possible'], None)": 0.00046613616273867195, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (7, 1), destination = (2, 2), deadline = 30
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 1.1487517220059976e-05, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.048492735780707334, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.8373045145102642, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.6487713308204157, "(['green', None, None, None, 'possible'], 'right')": 1.7449265967851557, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5744926596785156, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.10543613772455504, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8693070532242834, "(['red', None, None, None, 'possible'], None)": 0.00013165062037931517, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, 'left', None, 'possible']
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
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (8, 1), destination = (7, 6), deadline = 30
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 0.12616008349536034, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.048492735780707334, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.6813873148961734, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.6487713308204157, "(['green', None, None, None, 'possible'], 'right')": 1.227113056340289, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5744926596785156, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.10543613772455504, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8954419243770577, "(['red', None, None, None, 'possible'], None)": 2.7105695270860083e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (8, 6), destination = (2, 2), deadline = 50
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 0.12616008349536034, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.048492735780707334, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.6813873148961734, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.7752087726999173, "(['green', None, None, None, 'possible'], 'right')": 1.3816931556417584, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5744926596785156, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.10543613772455504, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9163508289321192, "(['red', None, None, None, 'possible'], None)": 2.7105695270860083e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (7, 1), destination = (1, 1), deadline = 30
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 0.05430777915561483, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.048492735780707334, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.6813873148961734, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.8201645786473596, "(['green', None, None, None, 'possible'], 'right')": -0.047302874411478825, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5744926596785156, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.8065696083561338, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9163508289321192, "(['red', None, None, None, 'possible'], None)": 1.4185701461565564e-06, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
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
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (8, 4), destination = (4, 1), deadline = 35
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 0.04738452134470257, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1387941391620833, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.6813873148961734, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.8201645786473596, "(['green', None, None, None, 'possible'], 'right')": -0.047302874411478825, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.5744926596785156, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.030141894472019745, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9330806136832128, "(['red', None, None, None, 'possible'], None)": 4.00646108844781e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
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
self.state:['red', 'forward', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (6, 1), destination = (2, 2), deadline = 25
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.11879118427694504, "(['green', None, None, None, 'possible'], None)": 0.008780447469081493, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1387941391620833, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.6813873148961734, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.8849052690354555, "(['green', None, None, None, 'possible'], 'right')": -0.047302874411478825, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8595941417124786, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.030141894472019745, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9330806136832128, "(['red', None, None, None, 'possible'], None)": 6.681647954468804e-08, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (2, 1), destination = (5, 6), deadline = 40
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.12117254829627247, "(['green', None, None, None, 'possible'], None)": 0.003401725252110366, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1387941391620833, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.6813873148961734, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.9079242108445352, "(['green', None, None, None, 'possible'], 'right')": -0.047302874411478825, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8595941417124786, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.16343590335938962, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9330806136832128, "(['red', None, None, None, 'possible'], None)": 2.3297465860615405e-08, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['green', None, 'forward', None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = -0.5
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
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
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (4, 4), destination = (3, 1), deadline = 20
RoutePlanner.route_to(): destination = (3, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19693803820531125, "(['green', None, None, None, 'possible'], None)": 0.0014643311784624967, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1387941391620833, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.25642805470862795, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.9079242108445352, "(['green', None, None, None, 'possible'], 'right')": 0.6719312342722008, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8595941417124786, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.0754010195128427, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9464644904668962, "(['red', None, None, None, 'possible'], None)": 2.832427959771622e-09, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (1, 2), destination = (5, 5), deadline = 35
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.19693803820531125, "(['green', None, None, None, 'possible'], None)": 0.0014643311784624967, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.6600682199130341, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.25642805470862795, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.9263393684462016, "(['green', None, None, None, 'possible'], 'right')": 0.6846486130933758, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8595941417124786, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.0754010195128427, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9571715922062649, "(['red', None, None, None, 'possible'], None)": 1.2192673613688829e-09, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (3, 2), destination = (8, 2), deadline = 25
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.015436309930207823, "(['green', None, None, None, 'possible'], None)": 0.008362127982515833, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.03565638229455537, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.25642805470862795, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.9263393684462016, "(['green', None, None, None, 'possible'], 'right')": -0.08748671935901571, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8595941417124786, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.0754010195128427, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9571715922062649, "(['red', None, None, None, 'possible'], None)": 3.826190174642508e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (7, 3), destination = (3, 1), deadline = 30
RoutePlanner.route_to(): destination = (3, 1)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.015436309930207823, "(['green', None, None, None, 'possible'], None)": 0.0029156937408601827, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.03565638229455537, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.25642805470862795, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.9263393684462016, "(['green', None, None, None, 'possible'], 'right')": -0.08748671935901571, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8595941417124786, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1594846028120226, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9571715922062649, "(['red', None, None, None, 'possible'], None)": 7.877786266665695e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'right', 'possible']
action:  None
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (3, 6), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['green', None, 'right', 'right', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.015436309930207823, "(['green', None, None, None, 'possible'], None)": 0.0008234780317516948, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.1, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.03565638229455537, "(['red', 'left', 'right', None, 'possible'], None)": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.07296438966123998, "(['green', None, 'forward', None, 'possible'], 'forward')": 0.25642805470862795, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], 'left')": -0.2, "(['red', None, None, None, 'possible'], 'forward')": -0.9410714947555016, "(['green', None, None, None, 'possible'], 'right')": -0.08748671935901571, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.7296438966123998, "(['green', None, 'forward', None, 'possible'], 'right')": 0.400000000027727, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'right')": 0.8595941417124786, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['red', 'right', None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.22758768224687126, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9571715922062649, "(['red', None, None, None, 'possible'], None)": 1.4597696995591313e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.2, "(['red', None, 'left', None, 'possible'], None)": 0.0}
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