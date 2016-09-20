self.epsilon = 0.1
self.alpha = 0.5 # Alpha is the learning rate
self.gamma = 0.5 # gamma is the value of future reward. Learning doesn't work well with high gamma.
self.actions = [None, 'forward', 'left', 'right']
self.q = {}
self.defaultq = 0.0

SUCCESS: 11/100

Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (1, 4), destination = (8, 4), deadline = 35
RoutePlanner.route_to(): destination = (8, 4)
q:  {}
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
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (1, 2), destination = (7, 6), deadline = 50
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (6, 3), destination = (8, 6), deadline = 25
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.5, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.25}
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
random
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
random
action:  left
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (7, 2), destination = (3, 4), deadline = 30
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.375, "(['green', None, None, None, 'possible'], 'forward')": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.75, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.25}
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
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (1, 3), destination = (5, 2), deadline = 25
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.375, "(['green', None, None, None, 'possible'], 'forward')": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.75, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.375}
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (3, 4), destination = (5, 6), deadline = 20
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.375, "(['green', None, None, None, 'possible'], 'forward')": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4375}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (5, 5), destination = (1, 4), deadline = 25
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.3863525390625, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.375, "(['green', None, None, None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'forward')": 0.0, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.085235595703125, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.5170516967773438}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (2, 4), destination = (6, 2), deadline = 30
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.3863525390625, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": 0.03468299051746726, "(['green', None, None, None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'forward')": -0.1724272508872673, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0035999369792989455, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1811056137084961}
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
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
Environment.reset(): Trial set up with start = (8, 4), destination = (1, 2), deadline = 45
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.3863525390625, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'right')": -0.008789984405838197, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.29459666146861274, "(['green', None, None, None, 'possible'], 'forward')": -0.33592886480366957, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.00027030013871590097, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1811056137084961}
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
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, 'right', None, 'possible']
random
action:  left
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = left, reward = -0.5
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
self.state:['green', None, None, 'forward', 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
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
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (2, 6), destination = (8, 3), deadline = 45
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.29459666146861274, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3404852318195691, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.3863525390625, "(['green', None, None, None, 'possible'], 'right')": 0.9050167624837112, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4179644324018348, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.428842702435349e-07, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
random
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (5, 3), destination = (1, 4), deadline = 25
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.24337006845847917, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3404852318195691, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6931761088101824, "(['green', None, None, None, 'possible'], 'right')": -0.2678093096837142, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.45898221529481864, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.0387222731491665e-09, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (2, 5), destination = (1, 1), deadline = 25
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.24337006845847917, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3404852318195691, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6931761088101824, "(['green', None, None, None, 'possible'], 'right')": -0.3839046548418571, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.45898221529481864, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.1480761671751511e-10, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (7, 6), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3716850342287282, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.4601213079468199, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6931761088101824, "(['green', None, None, None, 'possible'], 'right')": -0.3839046548418571, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.45898221529481864, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.0456361462315783e-12, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
Environment.reset(): Trial set up with start = (6, 1), destination = (4, 6), deadline = 35
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.43584251711414834, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.4601213079468199, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6931761088101824, "(['green', None, None, None, 'possible'], 'right')": -0.3839046548418571, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.45898221529481864, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 8.63977209082807e-14, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
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
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (1, 5), destination = (8, 2), deadline = 50
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.43584251711414834, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.4601213079468199, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6931761088101824, "(['green', None, None, None, 'possible'], 'right')": -0.3839046548418571, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4794911076473877, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.1545725747243271e-15, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, 'right', 'possible']
action:  None
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
random
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
random
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (5, 4), destination = (2, 5), deadline = 20
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.43584251711414834, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.581204540401242, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6931761088101824, "(['green', None, None, None, 'possible'], 'right')": -0.3839046548418571, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4794911076473877, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.509145481478303e-18, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', 'left', 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'forward', 'left', 'possible']
action:  None
state2:  ['green', None, 'forward', 'left', 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': 'left'}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (6, 2), destination = (5, 5), deadline = 20
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.43584251711414834, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.1552347626744843, "(['red', None, None, None, 'possible'], 'left')": -0.875, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6931761088101824, "(['green', None, None, None, 'possible'], 'right')": -0.3839046548418571, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.509145481478303e-18, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (5, 6), destination = (2, 4), deadline = 25
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.589924030695042, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.266849280755891, "(['red', None, None, None, 'possible'], 'left')": -0.272432605295992, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.18152065970108322, "(['green', None, None, None, 'possible'], 'right')": 0.930249499832623, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.713853601928938, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (3, 6), destination = (6, 4), deadline = 25
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.589924030695042, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.7048076716283456, "(['red', None, None, None, 'possible'], 'left')": -0.272432605295992, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.18152065970108322, "(['green', None, None, None, 'possible'], 'right')": 1.0416393209353547, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.713853601928938, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (1, 6), destination = (8, 3), deadline = 50
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.589924030695042, "(['green', None, None, None, 'possible'], None)": 0.6039887000709946, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.8648730262260771, "(['red', None, None, None, 'possible'], 'left')": -0.44813892202015765, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.40268294922270326, "(['green', None, None, None, 'possible'], 'right')": 0.8717899110413283, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.564232141883515, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
random
action:  forward
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (5, 2), destination = (7, 4), deadline = 20
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.01761182316585652, "(['green', None, None, None, 'possible'], None)": 0.0806227592196817, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.029199522631760955, "(['red', None, None, None, 'possible'], 'left')": -0.21350074536130112, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6635973891236663, "(['green', None, None, None, 'possible'], 'right')": -0.054402580299845876, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.007540094228738322, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (8, 5), destination = (4, 4), deadline = 25
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.01761182316585652, "(['green', None, None, None, 'possible'], None)": 0.0034051132029268637, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.7396466122479801, "(['red', None, None, None, 'possible'], 'left')": -0.21350074536130112, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6635973891236663, "(['green', None, None, None, 'possible'], 'right')": -0.054402580299845876, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0031809772527489795, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (4, 3), destination = (2, 1), deadline = 20
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.01761182316585652, "(['green', None, None, None, 'possible'], None)": 0.0001438154193303311, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.1522031551108405, "(['red', None, None, None, 'possible'], 'left')": -0.12326855519891793, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6635973891236663, "(['green', None, None, None, 'possible'], 'right')": -0.054402580299845876, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0031809772527489795, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
self.state:['red', 'forward', None, 'right', 'possible']
action:  None
state2:  ['red', 'forward', None, 'right', 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': 'right'}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (2, 4), destination = (4, 1), deadline = 25
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.01761182316585652, "(['green', None, None, None, 'possible'], None)": 2.5624956651738826e-06, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.26155983695883456, "(['red', None, None, None, 'possible'], 'left')": -0.12326855519891793, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6635973891236663, "(['green', None, None, None, 'possible'], 'right')": -0.054402580299845876, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0031809772527489795, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 24
Environment.reset(): Trial set up with start = (2, 4), destination = (6, 3), deadline = 25
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.01761182316585652, "(['green', None, None, None, 'possible'], None)": 2.565389108155188e-07, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.006653878040901368, "(['red', None, None, None, 'possible'], 'left')": -0.12326855519891793, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6822774218411778, "(['green', None, None, None, 'possible'], 'right')": 1.4867348806870282, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0013419747785034758, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (8, 5), destination = (2, 3), deadline = 40
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.01761182316585652, "(['green', None, None, None, 'possible'], None)": 2.565389108155188e-07, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.006653878040901368, "(['red', None, None, None, 'possible'], 'left')": -0.12326855519891793, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.840803217225963, "(['green', None, None, None, 'possible'], 'right')": 1.4470555443620072, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.188164911848301e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
self.state:['green', None, None, 'right', 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (8, 3), destination = (1, 3), deadline = 35
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.003302136197544936, "(['green', None, None, None, 'possible'], None)": 8.126216846866021e-09, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.006653878040901368, "(['red', None, None, None, 'possible'], 'left')": -0.12326855519891793, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.920400190050835, "(['green', None, None, None, 'possible'], 'right')": 0.16610838193722738, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 3.1953688120079083e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (8, 5), destination = (5, 1), deadline = 35
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.003302136197544936, "(['green', None, None, None, 'possible'], None)": 8.126216846866021e-09, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.006653878040901368, "(['red', None, None, None, 'possible'], 'left')": -0.5616342523235924, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.920400190050835, "(['green', None, None, None, 'possible'], 'right')": 0.16610838193722738, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 1.0110346631743773e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', 'forward', 'forward', None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (6, 2), destination = (4, 4), deadline = 20
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.0006191476852007438, "(['green', None, None, None, 'possible'], None)": 1.0847190090390617e-09, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.006653878040901368, "(['red', None, None, None, 'possible'], 'left')": -0.5616342523235924, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9801000448241155, "(['green', None, None, None, 'possible'], 'right')": 0.15818349833394355, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 7.599893794452607e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (5, 1), destination = (3, 6), deadline = 35
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.06261609013461603, "(['green', None, None, None, 'possible'], None)": 4.5761583193835415e-10, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.7569144414717837, "(['red', None, None, None, 'possible'], 'left')": -0.5616342523235924, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9801000448241155, "(['green', None, None, None, 'possible'], 'right')": 0.05018477726464779, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3545949862735386, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 7.608475217499323e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (5, 1), destination = (7, 4), deadline = 25
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.06261609013461603, "(['green', None, None, None, 'possible'], None)": 0.24354207943608072, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.739533665980293, "(['red', None, None, None, 'possible'], 'left')": -0.31454247196801255, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9801000448241155, "(['green', None, None, None, 'possible'], 'right')": 1.426372901957431, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48062623762181844, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.24094360128543282, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (7, 6), destination = (1, 3), deadline = 45
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.06261609013461603, "(['green', None, None, None, 'possible'], None)": 0.24354207943608072, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.025645969595665674, "(['red', None, None, None, 'possible'], 'left')": -0.47238781948893305, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9801000448241155, "(['green', None, None, None, 'possible'], 'right')": 1.5461393584428287, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.48062623762181844, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.07623606134421898, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (5, 1), destination = (4, 5), deadline = 25
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.06261609013461603, "(['green', None, None, None, 'possible'], None)": 0.24354207943608072, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.07898648271447675, "(['red', None, None, None, 'possible'], 'left')": -0.5768545687286784, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9801000448241155, "(['green', None, None, None, 'possible'], 'right')": 1.147357158408479, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.17122382091610933, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.005724160749199915, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'right', 'possible']
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (8, 5), destination = (5, 6), deadline = 20
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.11219649786986362, "(['green', None, None, None, 'possible'], None)": 0.1369924196827954, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.07898648271447675, "(['red', None, None, None, 'possible'], 'left')": -0.5768545687286784, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9801000448241155, "(['green', None, None, None, 'possible'], 'right')": 0.013219847875328344, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.17122382091610933, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.0001019927986504136, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Simulator.run(): Trial 34
Environment.reset(): Trial set up with start = (7, 6), destination = (7, 2), deadline = 20
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.11219649786986362, "(['green', None, None, None, 'possible'], None)": 0.10274431476209656, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.07898648271447675, "(['red', None, None, None, 'possible'], 'left')": -0.7884253698400168, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9801000448241155, "(['green', None, None, None, 'possible'], 'right')": 0.013219847875328344, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.02946535855807303, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 2.4230698454785845e-06, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (8, 6), destination = (4, 2), deadline = 40
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.10396251302147289, "(['green', None, None, None, 'possible'], None)": 0.04334525779025948, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.07898648271447675, "(['red', None, None, None, 'possible'], 'left')": -0.7884253698400168, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 0.8879372670624497, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 1.0233868453907842e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (5, 3), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.39641905769258723, "(['green', None, None, None, 'possible'], None)": 0.0032545650828768816, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.07898648271447675, "(['red', None, None, None, 'possible'], 'left')": -0.894212678848646, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.0911569832350026, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 1.8255243275163282e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (1, 2), destination = (8, 5), deadline = 50
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.39641905769258723, "(['green', None, None, None, 'possible'], None)": 0.00024436799822336454, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.07898648271447675, "(['red', None, None, None, 'possible'], 'left')": -0.894212678848646, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.0911569832350026, "(['green', 'left', None, None, 'possible'], 'right')": 1.2872307159053686, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 5.782595122692613e-12, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (1, 4), destination = (8, 1), deadline = 50
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.39641905769258723, "(['green', None, None, None, 'possible'], None)": 0.00010309274925048192, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.8090123137582226, "(['red', None, None, None, 'possible'], 'left')": -0.894212678848646, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 1.0806396714912316, "(['green', 'left', None, None, 'possible'], 'right')": 0.39361535795412994, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 5.789124542234229e-13, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (3, 5), destination = (8, 4), deadline = 30
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.39641905769258723, "(['green', None, None, None, 'possible'], None)": 0.00010309274925048192, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.9880821532925217, "(['red', None, None, None, 'possible'], 'left')": -0.894212678848646, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 0.6965246747009112, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.549982133022633, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.49331241676220583, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (1, 4), destination = (5, 1), deadline = 35
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.0942846381667296, "(['green', None, None, None, 'possible'], None)": 0.2668321029687464, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.3613796602629038, "(['red', None, None, None, 'possible'], 'left')": -0.894212678848646, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 1.8182875589228635, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.549982133022633, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.49331241676220583, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'right', 'possible']
action:  None
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (3, 6), destination = (1, 4), deadline = 20
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.12641775120505822, "(['green', None, None, None, 'possible'], None)": 0.04749038160747463, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.2808376420512033, "(['red', None, None, None, 'possible'], 'left')": -0.9347596034075656, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.1082762020595627, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.549982133022633, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.008789814996304775, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, 'left', None, 'possible']
random
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
random
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (6, 3), destination = (8, 1), deadline = 20
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.12641775120505822, "(['green', None, None, None, 'possible'], None)": 0.0015043220455561832, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.3487912441243753, "(['red', None, None, None, 'possible'], 'left')": -0.9347596034075656, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.1082762020595627, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2352672129073699, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.008789814996304775, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (8, 4), destination = (2, 4), deadline = 30
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.12641775120505822, "(['green', None, None, None, 'possible'], None)": 0.0006346358629690149, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.8116718200189604, "(['red', None, None, None, 'possible'], 'left')": -0.7644618466990427, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 1.9908575172635947, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3316974124137704, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.008789814996304775, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (4, 2), destination = (7, 4), deadline = 25
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.12641775120505822, "(['green', None, None, None, 'possible'], None)": 2.0102949002511277e-05, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3147058601254217, "(['red', None, None, None, 'possible'], 'left')": -0.7644618466990427, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.1143496427620442, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.41545760665047005, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.0004949853760879522, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.1407451191471651, "(['green', None, None, None, 'possible'], None)": 8.490507857675228e-07, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3147058601254217, "(['red', None, None, None, 'possible'], 'left')": -0.7644618466990427, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.1143496427620442, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.41545760665047005, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 1.5679331019732794e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
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
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (1, 5), destination = (5, 5), deadline = 20
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.1407451191471651, "(['green', None, None, None, 'possible'], None)": 6.375071188454495e-08, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3147058601254217, "(['red', None, None, None, 'possible'], 'left')": -0.7644618466990427, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.30717473183269706, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.41545760665047005, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 6.622186785108102e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (7, 1), destination = (4, 5), deadline = 35
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.1407451191471651, "(['green', None, None, None, 'possible'], None)": 4.7867022019329e-09, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3147058601254217, "(['red', None, None, None, 'possible'], 'left')": -0.8822308709669892, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.30717473183269706, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.41545760665047005, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 2.796889596990454e-08, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (6, 3), destination = (2, 3), deadline = 20
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.1407451191471651, "(['green', None, None, None, 'possible'], None)": 6.389476144792025e-10, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.3147058601254217, "(['red', None, None, None, 'possible'], 'left')": -0.8822308709669892, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.30717473183269706, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 2.035212924915643, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 6.652147261392309e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (3, 5), destination = (5, 2), deadline = 25
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.1407451191471651, "(['green', None, None, None, 'possible'], None)": 6.389476144792025e-10, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.1845283818120107, "(['red', None, None, None, 'possible'], 'left')": -0.8822308709669892, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.30717473183269706, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 3.1921029388248385, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 3.741832834533174e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (8, 4), destination = (4, 1), deadline = 35
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.1407451191471651, "(['green', None, None, None, 'possible'], None)": 6.396690824276807e-11, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.2059301283017267, "(['red', None, None, None, 'possible'], 'left')": -0.8822308709669892, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": -0.4035873658658068, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.0009279869869912305, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.4755468187214108, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
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
state2:  ['green', None, None, None, 'possible']
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (5, 1), destination = (1, 3), deadline = 30
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.5617334083624795, "(['green', None, None, None, 'possible'], None)": 0.14030199319694117, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.4182898709141316, "(['red', None, None, None, 'possible'], 'left')": -0.8822308709669892, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 1.6340170330195762, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.2431471840396729, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.4755468187214108, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (7, 1), destination = (8, 6), deadline = 30
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.5617334083624795, "(['green', None, None, None, 'possible'], None)": 0.14030199319694117, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.4010135214842196, "(['red', None, None, None, 'possible'], 'left')": -0.7572934223861949, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 2.383450447254688, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.2431471840396729, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.2674950855307936, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (5, 6), destination = (5, 2), deadline = 20
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.5617334083624795, "(['green', None, None, None, 'possible'], None)": 0.14030199319694117, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.296369372555782, "(['red', None, None, None, 'possible'], 'left')": -0.7572934223861949, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 2.383450447254688, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.2431471840396729, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.2674950855307936, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (8, 2), destination = (1, 1), deadline = 40
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.5617334083624795, "(['green', None, None, None, 'possible'], None)": 0.4995102063091069, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.7132104648028448, "(['red', None, None, None, 'possible'], 'left')": -0.42819680211511957, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 1.4344230244806386, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.2431471840396729, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.2674950855307936, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (7, 2), destination = (1, 3), deadline = 35
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.17130005627185965, "(['green', None, None, None, 'possible'], None)": 0.37463265473183016, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.060359250818479, "(['red', None, None, None, 'possible'], 'left')": -0.42819680211511957, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 0.4007092534180585, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.2431471840396729, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.2674950855307936, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (1, 2), destination = (5, 1), deadline = 25
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.17130005627185965, "(['green', None, None, None, 'possible'], None)": 0.37463265473183016, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.060359250818479, "(['red', None, None, None, 'possible'], 'left')": -0.42819680211511957, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 0.05053194006354389, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.38666340472445615, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.2674950855307936, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (5, 1), destination = (6, 6), deadline = 30
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.6632514701654847, "(['green', None, None, None, 'possible'], None)": 0.15804815121499086, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.1472022665008823, "(['red', None, None, None, 'possible'], 'left')": -0.42819680211511957, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 0.05053194006354389, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.23000122322832894, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.08463711690622766, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (2, 1), destination = (3, 6), deadline = 30
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 1.3740780602453726, "(['green', None, None, None, 'possible'], None)": 0.15804815121499086, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.0078578460252812, "(['red', None, None, None, 'possible'], 'left')": -0.35165598539518533, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 0.05053194006354389, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.23000122322832894, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.08463711690622766, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (1, 5), destination = (6, 6), deadline = 30
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 1.3740780602453726, "(['green', None, None, None, 'possible'], None)": 0.15804815121499086, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.8474484380739837, "(['red', None, None, None, 'possible'], 'left')": -0.35165598539518533, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9900496816678608, "(['green', None, None, None, 'possible'], 'right')": 0.05053194006354389, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.23000122322832894, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.08463711690622766, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 2), deadline = 35
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.04239714126379207, "(['green', None, None, None, 'possible'], None)": 0.05000742284536821, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.13521089444123904, "(['red', None, None, None, 'possible'], 'left')": -0.35165598539518533, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9824060917396855, "(['green', None, None, None, 'possible'], 'right')": 0.08537949043924192, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.23000122322832894, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.02129413909653824, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (1, 4), destination = (8, 2), deadline = 45
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.04239714126379207, "(['green', None, None, None, 'possible'], None)": 0.1529126843774158, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.13521089444123904, "(['red', None, None, None, 'possible'], 'left')": -0.8368826305323978, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 0.13372691886419508, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.23000122322832894, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.00012005018334624563, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (5, 1), destination = (1, 6), deadline = 45
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.04239714126379207, "(['green', None, None, None, 'possible'], None)": 0.11468451328306184, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.13521089444123904, "(['red', None, None, None, 'possible'], 'left')": -0.9184390617836102, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 1.4629219665130102, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.23000122322832894, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 3.807045746988292e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (8, 1), destination = (1, 2), deadline = 40
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.04239714126379207, "(['green', None, None, None, 'possible'], None)": 0.3422538272108968, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.13521089444123904, "(['red', None, None, None, 'possible'], 'left')": -0.9184390617836102, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 1.8943306215793583, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.23000122322832894, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 2.864967371830926e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
random
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (8, 4), destination = (3, 4), deadline = 25
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.04239714126379207, "(['green', None, None, None, 'possible'], None)": 0.10143832735239079, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.13521089444123904, "(['red', None, None, None, 'possible'], 'left')": -0.9184390617836102, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 0.11384127285922088, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.33654029339935926, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 5.104783969178345e-12, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
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
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (3, 4), destination = (7, 5), deadline = 25
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.04239714126379207, "(['green', None, None, None, 'possible'], None)": 0.0760787455142931, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.13521089444123904, "(['red', None, None, None, 'possible'], 'left')": -0.9592195308917513, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 1.8008320138341476, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4182701466996257, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 1.2127570051092398e-13, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 66
Environment.reset(): Trial set up with start = (2, 4), destination = (6, 3), deadline = 25
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.04239714126379207, "(['green', None, None, None, 'possible'], None)": 0.0760787455142931, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.588853660518184, "(['red', None, None, None, 'possible'], 'left')": -0.9796097654458529, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 1.3884128771886062, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.7908649266501903, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.12087522061051764, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
random
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (8, 6), destination = (2, 3), deadline = 45
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.19740251068119027, "(['green', None, None, None, 'possible'], None)": 0.0760787455142931, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.8214293061535232, "(['red', None, None, None, 'possible'], 'left')": -0.9796097654458529, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 1.704815760197177, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.7908649266501903, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.12087522061051764, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  forward
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (2, 6), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.14516024848156567, "(['green', None, None, None, 'possible'], None)": 0.49599081291223807, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.1294533605069808, "(['red', None, None, None, 'possible'], 'left')": -0.5597693511107267, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 1.2567105226042858, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.2437036288672942, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.016895092347891365, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (3, 2), destination = (8, 4), deadline = 35
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.14516024848156567, "(['green', None, None, None, 'possible'], None)": 0.49599081291223807, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.9957380982617616, "(['red', None, None, None, 'possible'], 'left')": -0.5597693511107267, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 0.9034608833671222, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.5667699330720068, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.016895092347891365, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (4, 4), destination = (1, 2), deadline = 25
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.6872062636524745, "(['green', None, None, None, 'possible'], None)": 0.486274806371089, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.7745066890746304, "(['red', None, None, None, 'possible'], 'left')": -0.5597693511107267, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 2.667371778270545, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.5667699330720068, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.016895092347891365, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (6, 1), destination = (2, 2), deadline = 25
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 1.5154046977393558, "(['green', None, None, None, 'possible'], None)": 0.486274806371089, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.0470175803862913, "(['red', None, None, None, 'possible'], 'left')": -0.5597693511107267, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 0.5800019971436979, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.5667699330720068, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.016895092347891365, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (8, 6), destination = (5, 1), deadline = 40
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.4149151424783877, "(['green', None, None, None, 'possible'], None)": 0.486274806371089, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.7660723259657136, "(['red', None, None, None, 'possible'], 'left')": -0.5597693511107267, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9954590902814062, "(['green', None, None, None, 'possible'], 'right')": 1.6459337143087942, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.17507744980400514, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.6653473355395998, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (2, 5), destination = (6, 3), deadline = 30
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.06118635685879076, "(['green', None, None, None, 'possible'], None)": 0.3647061047783168, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.1341928442310494, "(['red', None, None, None, 'possible'], 'left')": -0.6135478416704634, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8313927112558032, "(['green', None, None, None, 'possible'], 'right')": 0.28687062185076634, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.17507744980400514, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.02107577641883495, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (6, 6), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": 0.017505375627878794, "(['green', None, None, None, 'possible'], None)": 0.015403411947051162, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.1341928442310494, "(['red', None, None, None, 'possible'], 'left')": -0.6135478416704634, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9153996428665576, "(['green', None, None, None, 'possible'], 'right')": -0.03484703361192523, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.11869191264699616, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.0005007027847678392, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (4, 6), destination = (2, 4), deadline = 20
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.24121760740659318, "(['green', None, None, None, 'possible'], None)": 0.0008674202652563326, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.1341928442310494, "(['red', None, None, None, 'possible'], 'left')": -0.8067442160557643, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9153996428665576, "(['green', None, None, None, 'possible'], 'right')": -0.03484703361192523, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.11869191264699616, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 8.921496189230108e-06, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (1, 1), destination = (7, 6), deadline = 55
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.24121760740659318, "(['green', None, None, None, 'possible'], None)": 6.51299784890762e-05, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.1341928442310494, "(['red', None, None, None, 'possible'], 'left')": -0.8067442160557643, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9576992921550624, "(['green', None, None, None, 'possible'], 'right')": -0.03484703361192523, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.5299998176964799, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.11869191264699616, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 3.768006051620355e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 51, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
random
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
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (1, 3), destination = (5, 5), deadline = 30
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.24121760740659318, "(['green', None, None, None, 'possible'], None)": 8.713446976423377e-08, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.1341928442310494, "(['red', None, None, None, 'possible'], 'left')": -0.9516860385801096, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.989424795561805, "(['green', None, None, None, 'possible'], 'right')": -0.47092778527937074, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.015001538936240677, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.11869191264699616, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 6.721394499491627e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (5, 3), destination = (1, 4), deadline = 25
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 1.1644180893351347e-09, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.1341928442310494, "(['red', None, None, None, 'possible'], 'left')": -0.9516860385801096, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9947123977682857, "(['green', None, None, None, 'possible'], 'right')": -0.47092778527937074, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.015001538936240677, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.30934595625260836, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 2.8387901101146784e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (5, 4), destination = (8, 3), deadline = 20
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 6.557247520175015e-11, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.025161158253621918, "(['red', None, None, None, 'possible'], 'left')": -0.9879215096428199, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9947123977682857, "(['green', None, None, None, 'possible'], 'right')": -0.47092778527937074, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.015001538936240677, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.30934595625260836, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 2.8419955310764163e-12, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (2, 5), destination = (7, 1), deadline = 45
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 2.0770968075807875e-12, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.025161158253621918, "(['red', None, None, None, 'possible'], 'left')": -0.9879215096428199, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9947123977682857, "(['green', None, None, None, 'possible'], 'right')": -0.47092778527937074, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.015001538936240677, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.30934595625260836, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 2.1339034285803645e-13, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
random
action:  left
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (6, 1), destination = (1, 1), deadline = 25
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 6.572064117736085e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.0515165533396655, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.9879215096428199, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9947123977682857, "(['green', None, None, None, 'possible'], 'right')": 0.23429256962646583, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.015001538936240677, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.30934595625260836, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.4083033018465847, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
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
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
random
action:  forward
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (4, 1), destination = (3, 5), deadline = 25
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 3.6967860662265476e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.060098535958138244, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.48108161648649356, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9399385470619669, "(['green', None, None, None, 'possible'], 'right')": 1.120274852058537, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.30934595625260836, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.09689228744992194, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (5, 4), destination = (1, 4), deadline = 20
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 3.6967860662265476e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 2.933319198832078, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": 0.20219338006478738, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9399385470619669, "(['green', None, None, None, 'possible'], 'right')": 2.6532626925962193, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.30934595625260836, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
state2:  ['red', None, None, 'left', 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (5, 1), destination = (4, 6), deadline = 30
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 3.6967860662265476e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.4418235107987685, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": 0.20219338006478738, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9399385470619669, "(['green', None, None, None, 'possible'], 'right')": 2.25239384813646, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.14924493610230985, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (6, 1), destination = (1, 5), deadline = 45
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 3.6967860662265476e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.4418235107987685, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": 0.20219338006478738, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9399385470619669, "(['green', None, None, None, 'possible'], 'right')": 2.4866528017679217, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.14924493610230985, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (6, 3), destination = (2, 5), deadline = 30
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.3706088035352617, "(['green', None, None, None, 'possible'], None)": 3.6967860662265476e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.6242723434739683, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.01922247041321895, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9399385470619669, "(['green', None, None, None, 'possible'], 'right')": 1.8744127343564327, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.14924493610230985, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (1, 2), destination = (8, 2), deadline = 35
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.25842005931411666, "(['green', None, None, None, 'possible'], None)": 3.6967860662265476e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.689125438908916, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.08314117717432663, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.4057627543430874, "(['green', None, None, None, 'possible'], 'right')": 0.6381104656033227, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.26589273885164955, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (2, 2), destination = (4, 5), deadline = 25
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.25842005931411666, "(['green', None, None, None, 'possible'], None)": 3.6967860662265476e-13, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.7173968675866806, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.08314117717432663, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.4057627543430874, "(['green', None, None, None, 'possible'], 'right')": 0.4913365925288904, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.26589273885164955, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (1, 5), destination = (6, 1), deadline = 45
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.007018519333720469, "(['green', None, None, None, 'possible'], None)": 0.12283414813240744, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 1.6672318367485555, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.08314117717432663, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.4057627543430874, "(['green', None, None, None, 'possible'], 'right')": 2.4085770136714237, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.05058044586126284, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (2, 6), destination = (3, 3), deadline = 20
RoutePlanner.route_to(): destination = (3, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.007018519333720469, "(['green', 'left', None, None, 'possible'], 'left')": 0.4550060848284807, "(['green', None, None, None, 'possible'], None)": 0.12283414813240744, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.06234104591446882, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.08314117717432663, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.4057627543430874, "(['green', None, None, None, 'possible'], 'right')": 1.8650182544854421, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.05058044586126284, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.05450191169058109, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (2, 4), destination = (5, 2), deadline = 25
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.007018519333720469, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 0.12283414813240744, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.06234104591446882, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.5383371988066918, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.4057627543430874, "(['green', None, None, None, 'possible'], 'right')": 0.7841156505372154, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.05058044586126284, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.004092258940909224, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (1, 1), destination = (6, 5), deadline = 45
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.007018519333720469, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 0.12283414813240744, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": 0.9110085381641957, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.5383371988066918, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.4057627543430874, "(['green', None, None, None, 'possible'], 'right')": 0.5720177182123385, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.05058044586126284, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.0003072659787518168, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (6, 3), destination = (8, 5), deadline = 20
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.11050483011377561, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 0.03886549218251954, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.08628752155462681, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.35902663752337693, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.5467869423069334, "(['green', None, None, None, 'possible'], 'right')": -0.06684001256458488, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.15837905949133418, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.17144968050557413, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (6, 2), destination = (3, 4), deadline = 25
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.11050483011377561, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 0.0029182032876149443, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.08628752155462681, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.6554032074405921, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.5467869423069334, "(['green', None, None, None, 'possible'], 'right')": -0.06684001256458488, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.15837905949133418, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 0.00965493410508504, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  left
state2:  ['red', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (4, 4), destination = (7, 1), deadline = 30
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.13820227662952, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 0.0005193774894217027, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.08628752155462681, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.6554032074405921, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.5467869423069334, "(['green', None, None, None, 'possible'], 'right')": -0.06684001256458488, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.32886733521307704, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 9.676750160171194e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
random
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
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (7, 4), destination = (5, 1), deadline = 25
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.13820227662952, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 6.9406808294407054e-06, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.08628752155462681, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.6554032074405921, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.5467869423069334, "(['green', None, None, None, 'possible'], 'right')": -0.06684001256458488, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.32886733521307704, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 9.69861551028664e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (6, 3), destination = (1, 3), deadline = 25
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.13820227662952, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 1.6489158693010202e-07, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.29314358706436583, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.6554032074405921, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.7733933944359026, "(['green', None, None, None, 'possible'], 'right')": -0.2834199085687594, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4144335908889744, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 7.282175029333951e-08, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (8, 4), destination = (2, 2), deadline = 40
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.31910112010932246, "(['green', 'left', None, None, 'possible'], 'left')": 1.7120673863495746, "(['green', None, None, None, 'possible'], None)": 2.938029723791343e-09, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.29314358706436583, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.6554032074405921, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8866966953953519, "(['green', None, None, None, 'possible'], 'right')": -0.2834199085687594, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4144335908889744, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 5.467798275084691e-09, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  forward
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', 'left', None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (7, 3), destination = (3, 4), deadline = 25
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'left')": -0.25, "(['green', None, None, None, 'possible'], 'left')": -0.31910112010932246, "(['green', 'left', None, None, 'possible'], 'left')": 0.6060336931922372, "(['green', None, None, None, 'possible'], None)": 1.6563759888053423e-11, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.5, "(['red', 'left', None, None, 'possible'], 'right')": -0.24993242496532103, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.2499993227227441, "(['red', None, None, None, 'possible'], 'right')": -0.05496442238937263, "(['red', 'left', None, None, 'possible'], 'left')": -0.5, "(['red', None, None, None, 'possible'], 'left')": -0.6554032074405921, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], 'right')": -0.2499999999994886, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['green', None, 'forward', 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9433483472651646, "(['green', None, None, None, 'possible'], 'right')": -0.2834199085687594, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.08744996255281054, "(['red', 'forward', None, 'right', 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.45721679544448723, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, 'right', 'possible'], 'left')": -0.002201477387843487, "(['red', None, None, None, 'possible'], None)": 4.110114884653337e-11, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'left')": -0.5, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.5, "(['green', 'left', None, None, 'possible'], None)": 0.0}
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.