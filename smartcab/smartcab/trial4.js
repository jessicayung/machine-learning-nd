self.epsilon = 0.1
self.alpha = 0.7 # Alpha is the learning rate
self.gamma = 0.4 # gamma is the value of future reward. Learning doesn't work well with high gamma.
self.actions = [None, 'forward', 'left', 'right']
self.q = {}
self.defaultq = 0.0

SUCCESS: 1/100

((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ python smartcab/agent.py 
Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (6, 6), destination = (1, 5), deadline = 30
RoutePlanner.route_to(): destination = (1, 5)
q:  {}
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (6, 2), destination = (1, 4), deadline = 35
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.1904, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.7, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.19600000000000006}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (8, 1), destination = (4, 1), deadline = 20
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.72797088, "(['green', None, None, None, 'possible'], 'right')": -0.35, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.06696014729599992}
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
random
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
random
action:  right
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (2, 4), destination = (6, 5), deadline = 25
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.72797088, "(['green', None, None, None, 'possible'], 'right')": -0.35, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.3799119558111999}
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
self.state:['green', 'left', 'forward', None, 'possible']
action:  None
state2:  ['green', 'left', 'forward', None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'left', 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', 'forward', None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'left', 'right': 'forward', 'left': None}, action = left, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (4, 6), destination = (2, 3), deadline = 25
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.72797088, "(['green', None, None, None, 'possible'], 'right')": -0.45499999999999996, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.586624652372864, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.8448607145804663}
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (3, 1), destination = (5, 6), deadline = 35
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.72797088, "(['green', None, None, None, 'possible'], 'right')": -0.45499999999999996, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.6394263956293286, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (8, 6), destination = (5, 3), deadline = 30
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.918391264, "(['green', None, None, None, 'possible'], 'right')": -0.49595, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'forward')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8918279186887985, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
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
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (7, 3), destination = (2, 5), deadline = 35
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.918391264, "(['green', None, None, None, 'possible'], 'right')": -0.49595, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'forward')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8918279186887985, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
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
random
action:  left
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 8
Environment.reset(): Trial set up with start = (1, 5), destination = (8, 6), deadline = 40
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.918391264, "(['green', None, None, None, 'possible'], 'right')": -0.49595, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], 'forward')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8918279186887985, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
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
random
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
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'right', 'possible']
action:  None
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (1, 6), destination = (4, 4), deadline = 25
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.99265521376, "(['green', None, None, None, 'possible'], 'right')": -0.4996355, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], 'forward')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9675483756066395, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
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
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (7, 6), destination = (8, 2), deadline = 25
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.997796564128, "(['green', None, None, None, 'possible'], 'right')": -0.4996355, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], 'forward')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9675483756066395, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (7, 6), destination = (7, 1), deadline = 25
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.9993389692384, "(['green', None, None, None, 'possible'], 'right')": -0.4996355, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], 'forward')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9902645126819918, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (4, 3), destination = (1, 4), deadline = 20
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.9993389692384, "(['green', None, None, None, 'possible'], 'right')": -0.4996355, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], 'forward')": 2.190158726, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9902645126819918, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, 'forward', 'possible']
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 13
Environment.reset(): Trial set up with start = (1, 1), destination = (2, 4), deadline = 20
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['red', None, None, None, 'possible'], 'forward')": -0.9993389692384, "(['green', None, None, None, 'possible'], 'right')": -0.4996355, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], 'forward')": 1.9901084386197132, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.2890072991016085}
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  left
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
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
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (2, 6), destination = (5, 4), deadline = 25
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.469169108844056, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9993389692384, "(['green', None, None, None, 'possible'], 'right')": -0.4996355, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.20672113168016976, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.45886214734490643, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 2.1743191575512477}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (8, 3), destination = (5, 1), deadline = 25
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.469169108844056, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9993389692384, "(['green', None, None, None, 'possible'], 'right')": -0.4996355, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.20672113168016976, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0019767974346308085, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1704903131859783}
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (7, 3), destination = (4, 2), deadline = 20
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.469169108844056, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9993389692384, "(['green', None, None, None, 'possible'], 'right')": -0.23744464353749484, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.20672113168016976, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 8.516126510269062e-06, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1704903131859783}
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
self.state:['red', 'right', 'right', None, 'possible']
action:  None
state2:  ['red', 'right', 'right', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': 'right', 'right': 'right', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (3, 3), destination = (5, 6), deadline = 25
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.45499999999999996, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.469169108844056, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9993389692384, "(['green', None, None, None, 'possible'], 'right')": -0.23744464353749484, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.20672113168016976, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.0906014052055501e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1704903131859783}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (5, 3), destination = (2, 6), deadline = 30
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 1.469169108844056, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9998016900972715, "(['green', None, None, None, 'possible'], 'right')": -0.33541100504407034, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.034337525790308805, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.3776788137954935, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 1.3488529061205077}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (5, 4), destination = (3, 6), deadline = 20
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9998016900972715, "(['green', None, None, None, 'possible'], 'right')": -0.33541100504407034, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.034337525790308805, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.12705115296080405, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": 0.7168972756697154}
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (1, 3), destination = (6, 2), deadline = 30
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9970793538045976, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9998016900972715, "(['green', None, None, None, 'possible'], 'right')": -0.33541100504407034, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1595700205495723, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0083390884128027, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.07537935678387109}
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
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (3, 5), destination = (6, 1), deadline = 35
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.48007268454953134, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9998016900972715, "(['green', None, None, None, 'possible'], 'right')": -0.33541100504407034, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1595700205495723, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.10132834016159048, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.23044680301078016}
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (6, 3), destination = (3, 1), deadline = 25
RoutePlanner.route_to(): destination = (3, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.48007268454953134, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9998993897013385, "(['green', None, None, None, 'possible'], 'right')": -0.33541100504407034, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1595700205495723, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.8651728821786987e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.23044680301078016}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (5, 1), destination = (2, 4), deadline = 30
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.48007268454953134, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9998993897013385, "(['green', None, None, None, 'possible'], 'right')": -0.33541100504407034, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1595700205495723, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.01418603865401167, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.10529651422466976}
self.state:['green', None, None, None, 'possible']
random
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 24
Environment.reset(): Trial set up with start = (5, 3), destination = (1, 1), deadline = 30
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4865, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8426855940119607, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9998993897013385, "(['green', None, None, None, 'possible'], 'right')": -0.44665121069009783, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1595700205495723, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.00010536905398941063, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1712545935733753}
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (5, 1), destination = (8, 2), deadline = 20
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4987847808592951, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8426855940119607, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999691654814333, "(['green', None, None, None, 'possible'], 'right')": -0.44665121069009783, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1595700205495723, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 8.856803252805897e-08, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1712545935733753}
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
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
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
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (1, 5), destination = (8, 1), deadline = 55
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4987847808592951, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8426855940119607, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999691654814333, "(['green', None, None, None, 'possible'], 'right')": -0.44665121069009783, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3978710061648717, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.2835503811727418e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1712545935733753}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 55, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 54, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 53, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 52, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 51, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, 'left', 'forward', 'possible']
action:  None
state2:  ['red', None, 'left', 'forward', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, 'left', None, 'possible']
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (7, 3), destination = (3, 2), deadline = 25
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.34246718908216933, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.8426855940119607, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.44665121069009783, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49080839055482284, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.5635535469211497e-16, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1712545935733753}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
random
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
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (5, 3), destination = (7, 6), deadline = 25
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4527401567246508, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9528056782035882, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.44665121069009783, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49080839055482284, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 7.622627002217851e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1712545935733753}
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
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (8, 4), destination = (3, 5), deadline = 30
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4527401567246508, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9528056782035882, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.44665121069009783, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49080839055482284, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.9046386725046665e-22, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.1712545935733753}
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (7, 4), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4527401567246508, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9528056782035882, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.48399536320702935, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49080839055482284, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 5.385580249421457e-26, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4013763780720126}
self.state:['red', None, None, 'right', 'possible']
action:  None
state2:  ['red', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
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
random
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
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (4, 5), destination = (1, 2), deadline = 30
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.48582204701739523, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.995752511038323, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 0.15772263585915536, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.48399536320702935, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49724251716644685, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.896940035805932e-28, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4013763780720126}
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['green', None, None, 'forward', 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = 2.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (7, 2), destination = (5, 5), deadline = 25
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.48582204701739523, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.995752511038323, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.49519860896210877, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49975182654498024, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.723313853651719e-30, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4013763780720126}
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (6, 6), destination = (7, 3), deadline = 20
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.34211719526946965, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.995752511038323, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.49519860896210877, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49975182654498024, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 8.401489504474354e-34, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4013763780720126}
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
random
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Environment.reset(): Trial set up with start = (5, 4), destination = (1, 1), deadline = 35
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4526351585808409, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9987257533114968, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', 'left', None, None, 'possible'], 'right')": 0.09075073265321687, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.49855958268863265, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49975182654498024, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.24033969439441e-36, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4013763780720126}
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
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
random
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
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (4, 4), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4526351585808409, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9987257533114968, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.49855958268863265, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49975182654498024, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.442802545389568e-40, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4013763780720126}
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
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
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (3, 2), destination = (8, 4), deadline = 35
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4857905475742523, "(['green', None, None, None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'left')": -0.9987257533114968, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.08520638992548091, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49975182654498024, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 4.40895903709218e-42, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.08435422136675236}
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (7, 6), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4857905475742523, "(['green', None, None, None, 'possible'], None)": 0.5597777594118032, "(['red', None, None, None, 'possible'], 'left')": -0.9996177259934491, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.08520638992548091, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.24992856552522258, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 7.230760233424776e-46, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.08435422136675236}
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (5, 3), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4857905475742523, "(['green', None, None, None, 'possible'], None)": 0.0024115461368332844, "(['red', None, None, None, 'possible'], 'left')": -0.9996177259934491, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.08520638992548091, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1182836577071283, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.1150419276403266e-48, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.08435422136675236}
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
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
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
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (5, 2), destination = (2, 3), deadline = 20
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4956054182271177, "(['green', None, None, None, 'possible'], None)": 0.0002729025221128932, "(['red', None, None, None, 'possible'], 'left')": -0.9996177259934491, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": 2.263158253732896, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.46564552919364155, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.877963257490507e-50, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3753062664100257}
self.state:['green', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
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
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (2, 5), destination = (7, 2), deadline = 40
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4956054182271177, "(['green', None, None, None, 'possible'], None)": 1.7912141739306714e-05, "(['red', None, None, None, 'possible'], 'left')": -0.9996177259934491, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.20087894174654283, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.46564552919364155, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 9.96771872294579e-53, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3753062664100257}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (7, 5), destination = (5, 2), deadline = 25
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4956054182271177, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 5.731646466736148e-10, "(['red', None, None, None, 'possible'], 'left')": -0.9998853177980347, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.20087894174654283, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 9.481382444477726e-57, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3753062664100257}
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
random
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
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (3, 6), destination = (1, 2), deadline = 30
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4956054182271177, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 4.817739473643165e-13, "(['red', None, None, None, 'possible'], 'left')": -0.9998853177980347, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.20087894174654283, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.369079277695844e-59, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.4625918799230077}
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
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (4, 2), destination = (6, 5), deadline = 25
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49960448764044063, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.0755024329908062e-15, "(['red', None, None, None, 'possible'], 'left')": -0.9998853177980347, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.20087894174654283, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.7596712401889244e-61, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.12872477252182102}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (7, 6), destination = (7, 2), deadline = 20
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49960448764044063, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 3.0078707440478873e-18, "(['red', None, None, None, 'possible'], 'left')": -0.9999655953394104, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.20087894174654283, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.4790929000407015e-64, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.12872477252182102}
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
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (1, 5), destination = (7, 6), deadline = 35
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49960448764044063, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 6.641330980900593e-20, "(['red', None, None, None, 'possible'], 'left')": -0.9999655953394104, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.20087894174654283, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.8858877391274137e-65, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.12872477252182102}
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
random
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (1, 5), destination = (8, 1), deadline = 55
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 1.2500355961123601, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.6594457290703341e-22, "(['red', None, None, None, 'possible'], 'left')": -0.9999896786018232, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.41026368252396284, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.7450820099395565e-69, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3886174317565463}
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 55, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 54, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 53, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 52, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 51, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (6, 1), destination = (1, 4), deadline = 40
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.0441929164313975, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 4.692269600782292e-26, "(['red', None, None, None, 'possible'], 'left')": -0.9999969035805469, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.18053314325209546, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 5.765369803604203e-75, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'right')": -0.3886174317565463}
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
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
self.state:['red', 'forward', None, None, 'possible']
random
action:  forward
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (2, 2), destination = (8, 3), deadline = 35
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.0441929164313975, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.287572499901906e-29, "(['red', None, None, None, 'possible'], 'left')": -0.9999997213222492, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.23349259412207177, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 9.455294629905105e-79, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.3886174317565463}
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
random
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
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (4, 4), destination = (2, 1), deadline = 25
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.0441929164313975, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 4.245557608815765e-34, "(['red', None, None, None, 'possible'], 'left')": -0.9999997213222492, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.23349259412207177, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.5506827763662722e-82, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.3886174317565463}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (5, 3), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.0441929164313975, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 3.153455307778645e-36, "(['red', None, None, None, 'possible'], 'left')": -0.9999997213222492, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.4473167907577464, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.23349259412207177, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.42388301911231e-84, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.3886174317565463}
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
self.state:['green', None, None, 'forward', 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = 2.0
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
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (4, 5), destination = (1, 3), deadline = 25
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.0441929164313975, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 4.038412047741681e-38, "(['red', None, None, None, 'possible'], 'left')": -0.9999997213222492, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.23349259412207177, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.543143463043143e-86, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.3886174317565463}
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (6, 2), destination = (2, 4), deadline = 30
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.0441929164313975, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.0090636416290098e-40, "(['red', None, None, None, 'possible'], 'left')": -0.9999997213222492, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.23349259412207177, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.48969365875809245, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 7.191024420395349e-90, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.3886174317565463}
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
random
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (6, 4), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.06602263752117432, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 9.598302844439213e-45, "(['red', None, None, None, 'possible'], 'left')": -0.9999997213222492, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999907496444299, "(['green', None, None, None, 'possible'], 'right')": -0.23349259412207177, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4969080976274277, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.0979235722226804e-92, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4665852295269639}
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
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
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (3, 6), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.06602263752117432, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 9.598302844439213e-45, "(['red', None, None, None, 'possible'], 'left')": -0.9999997213222492, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999991674679987, "(['green', None, None, None, 'possible'], 'right')": 2.370234891367809, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.025278271213531545, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.334598507566367e-94, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4665852295269639}
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (1, 3), destination = (4, 4), deadline = 20
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31170687023771887, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.08619155745885e-45, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999991674679987, "(['green', None, None, None, 'possible'], 'right')": -0.20529508568878985, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.45272495559078213, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 5.08064202542253e-96, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4899755688580892}
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (2, 3), destination = (8, 6), deadline = 45
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31170687023771887, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 8.067860214687769e-48, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.7, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999991674679987, "(['green', None, None, None, 'possible'], 'right')": -0.20529508568878985, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.45272495559078213, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.7737275143136995e-98, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.34222934035916835}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
random
action:  forward
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  None
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
random
action:  left
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
random
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
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (1, 3), destination = (8, 6), deadline = 50
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.31170687023771887, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 0.2286758762338716, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4505631624817261, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999997502403997, "(['green', None, None, None, 'possible'], 'right')": 0.19616755288831722, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.18058272314902246, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.4366087248724165e-99, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.34222934035916835}
self.state:['green', None, 'left', None, 'possible']
random
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'left', 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
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
random
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (8, 1), destination = (4, 2), deadline = 25
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.38858514626258683, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.2616074241509134e-05, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4505631624817261, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999932564908, "(['green', None, None, None, 'possible'], 'right')": -0.2911497341335048, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.43454495206334387, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.5464161069256397e-104, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.34222934035916835}
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
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (8, 3), destination = (3, 5), deadline = 35
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.38858514626258683, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.8283534633630352e-08, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4505631624817261, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999932564908, "(['green', None, None, None, 'possible'], 'right')": -0.2911497341335048, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4803634767924692, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.2411054269126295e-107, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.34222934035916835}
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (4, 4), destination = (8, 5), deadline = 25
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.38858514626258683, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.5368237910933578e-11, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4505631624817261, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999932564908, "(['green', None, None, None, 'possible'], 'right')": -0.43734491727080543, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4803634767924692, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.2364204267905547e-111, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4526688011088962}
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
self.state:['green', None, 'left', 'forward', 'possible']
action:  None
state2:  ['green', None, 'left', 'forward', 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, 'left', 'forward', 'possible']
action:  None
state2:  ['green', None, 'left', 'forward', 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, 'left', 'forward', 'possible']
action:  None
state2:  ['green', None, 'left', 'forward', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, 'left', 'forward', 'possible']
action:  None
state2:  ['green', None, 'left', 'forward', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, 'left', 'forward', 'possible']
action:  None
state2:  ['green', None, 'left', 'forward', 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': 'forward'}, action = None, reward = 0.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (6, 4), destination = (4, 1), deadline = 25
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.38858514626258683, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.1415002663208837e-13, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4505631624817261, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999932564908, "(['green', None, None, None, 'possible'], 'right')": -0.48120347518120965, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4803634767924692, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.0893997038748344e-114, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4526688011088962}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, 'left', None, 'possible']
random
action:  None
state2:  ['red', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (2, 6), destination = (5, 4), deadline = 25
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": 0.17790257149081046, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 6.620701544661126e-14, "(['red', None, None, None, 'possible'], 'left')": -0.9999999749190025, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4505631624817261, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": 1.834195037227324, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999932564908, "(['green', None, None, None, 'possible'], 'right')": 0.9383753677419817, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 0.3784167550381104, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.35397582070685274, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": 2.7349903818370005}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (2, 3), destination = (5, 5), deadline = 25
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.21904133021093333, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 0.07325024306754857, "(['red', None, None, None, 'possible'], 'left')": -0.9008867626777819, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4505631624817261, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6538375599666183, "(['green', None, None, None, 'possible'], 'right')": 0.12968173901643648, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16775687912155604, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.11907746608578526, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.12175239166331248}
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
self.state:['red', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (1, 1), destination = (7, 1), deadline = 30
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.21904133021093333, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 0.0005440778081017927, "(['red', None, None, None, 'possible'], 'left')": -0.9008867626777819, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6538375599666183, "(['green', None, None, None, 'possible'], 'right')": -0.2747845913704668, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16775687912155604, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.367049397665672e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.12175239166331248}
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
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (7, 6), destination = (2, 2), deadline = 45
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4157117427684559, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.3439100861086016e-06, "(['red', None, None, None, 'possible'], 'left')": -0.9008867626777819, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.6538375599666183, "(['green', None, None, None, 'possible'], 'right')": -0.10977104018352868, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16775687912155604, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.641501930457519e-08, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.12175239166331248}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
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
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Environment.reset(): Trial set up with start = (8, 5), destination = (4, 5), deadline = 20
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4747135179558028, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 3.844048379395947e-10, "(['red', None, None, None, 'possible'], 'left')": -0.9702660287018511, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8961512679892317, "(['green', None, None, None, 'possible'], 'right')": -0.3718793726019625, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16775687912155604, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 5.252587254376849e-13, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.12175239166331248}
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
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (4, 4), destination = (7, 5), deadline = 20
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4747135179558028, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 5.570892365772035e-13, "(['red', None, None, None, 'possible'], 'left')": -0.9702660287018511, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8961512679892317, "(['green', None, None, None, 'possible'], 'right')": -0.3718793726019625, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16775687912155604, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.726625107882718e-15, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.12175239166331248}
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
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (5, 5), destination = (6, 2), deadline = 20
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4747135179558028, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.3999638673583775e-15, "(['red', None, None, None, 'possible'], 'left')": -0.991079808610555, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8961512679892317, "(['green', None, None, None, 'possible'], 'right')": -0.3718793726019625, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16775687912155604, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.897858394711047e-17, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.12175239166331248}
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'right', 'possible']
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (7, 5), destination = (1, 4), deadline = 35
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4747135179558028, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.017291318680008e-18, "(['red', None, None, None, 'possible'], 'left')": -0.991079808610555, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.8961512679892317, "(['green', None, None, None, 'possible'], 'right')": -0.3718793726019625, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.16775687912155604, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.3969595519190254, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": 2.0666820072639656}
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (1, 2), destination = (4, 4), deadline = 25
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4747135179558028, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 9.834686702856708e-22, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9646140956791349, "(['green', None, None, None, 'possible'], 'right')": -0.25602208777976115, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4003270637364668, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.008764804057957447, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.24053251837896206}
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
action:  left
state2:  ['red', None, None, None, 'possible']
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
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (4, 6), destination = (8, 2), deadline = 40
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49240348282625057, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.780868373133548e-25, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9646140956791349, "(['green', None, None, None, 'possible'], 'right')": -0.25602208777976115, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4003270637364668, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.775914460817055e-05, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.24053251837896206}
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
random
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
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
action:  None
state2:  ['green', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
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
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (2, 1), destination = (7, 6), deadline = 50
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49240348282625057, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.5342082614537257e-29, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9646140956791349, "(['green', None, None, None, 'possible'], 'right')": -0.25602208777976115, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4003270637364668, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 7.007805160294048e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.24053251837896206}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (5, 6), destination = (2, 2), deadline = 35
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49240348282625057, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 5.555564178359135e-35, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9968152686111194, "(['green', None, None, None, 'possible'], 'right')": -0.42680662633392835, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4003270637364668, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.5376158045557612e-15, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": 1.327840244486312}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', 'forward', None, None, 'possible']
action:  None
state2:  ['green', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (1, 4), destination = (6, 2), deadline = 35
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49925230783611735, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 3.0650111101341365e-39, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9968152686111194, "(['green', None, None, None, 'possible'], 'right')": -0.42680662633392835, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4003270637364668, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 0.0001325830663650686, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.2931483133988695}
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
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
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (5, 2), destination = (8, 5), deadline = 30
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49925230783611735, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.5762972468985423e-42, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9990443048444397, "(['green', None, None, None, 'possible'], 'right')": -0.4780419879001785, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2858193701700782, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.9214274102342905e-07, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4379436743439889}
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['green', None, None, 'forward', 'possible']
action:  None
state2:  ['green', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (5, 3), destination = (3, 5), deadline = 20
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49925230783611735, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.1098796921872502e-44, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9997132879221347, "(['green', None, None, None, 'possible'], 'right')": -0.263406137323823, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.2858193701700782, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.6150571626754586e-10, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4379436743439889}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
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
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (6, 6), destination = (4, 4), deadline = 20
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23746097046239256, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 8.243807595629059e-47, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.835196974125949, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9997132879221347, "(['green', None, None, None, 'possible'], 'right')": -0.4290218411971469, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.43574581104590593, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.5660206448788697e-12, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4379436743439889}
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
self.state:['red', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (1, 6), destination = (4, 4), deadline = 25
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23746097046239256, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 6.123218953562546e-49, "(['red', None, None, None, 'possible'], 'left')": -0.9791119869259927, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9997132879221347, "(['green', None, None, None, 'possible'], 'right')": -0.4290218411971469, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.43574581104590593, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 8.910288835082909e-15, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4379436743439889}
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (2, 1), destination = (6, 2), deadline = 25
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23746097046239256, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 8.873924143408554e-52, "(['red', None, None, None, 'possible'], 'left')": -0.9937335960777978, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999139863766403, "(['green', None, None, None, 'possible'], 'right')": -0.4290218411971469, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.43574581104590593, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.2913016473530256e-17, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4379436743439889}
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['green', 'right', None, None, 'possible']
action:  None
state2:  ['green', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (3, 1), destination = (6, 4), deadline = 30
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23746097046239256, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.286031584043777e-54, "(['red', None, None, None, 'possible'], 'left')": -0.9937335960777978, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999741959129921, "(['green', None, None, None, 'possible'], 'right')": -0.4290218411971469, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.43574581104590593, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.2265294559237394e-20, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4813831023031967}
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
random
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
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (7, 4), destination = (3, 6), deadline = 30
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.23746097046239256, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.8637495750813094e-57, "(['red', None, None, None, 'possible'], 'left')": -0.9937335960777978, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999741959129921, "(['green', None, None, None, 'possible'], 'right')": -0.4290218411971469, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1558424498462287, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.7120616061876517e-23, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4813831023031967}
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (2, 3), destination = (6, 1), deadline = 30
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.42123829113871775, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.7009931340049575e-60, "(['red', None, None, None, 'possible'], 'left')": -0.9937335960777978, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999976776321693, "(['green', None, None, None, 'possible'], 'right')": 1.2712934476408557, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.1558424498462287, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.3221826698364335e-26, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4813831023031967}
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'right', None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = 2.0
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
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (6, 5), destination = (5, 1), deadline = 25
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.42123829113871775, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.006205525751288e-62, "(['red', None, None, None, 'possible'], 'left')": -0.9981200788233393, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999976776321693, "(['green', None, None, None, 'possible'], 'right')": -0.05838458535595059, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4690258204861606, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.9161406451147007e-29, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.494414930690959}
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (3, 4), destination = (6, 6), deadline = 25
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.47637148734161533, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 4.4296700377141824e-64, "(['red', None, None, None, 'possible'], 'left')": -0.9981200788233393, "(['green', None, None, 'left', 'possible'], 'right')": -0.35, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999993032896508, "(['green', None, None, None, 'possible'], 'right')": -0.46025461268203555, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4690258204861606, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 5.4181033717397306e-33, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.494414930690959}
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
self.state:['red', None, None, 'left', 'possible']
action:  None
state2:  ['red', None, None, 'left', 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
self.state:['green', None, None, 'left', 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
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
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (7, 1), destination = (4, 6), deadline = 40
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.47637148734161533, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.1068258827056422e-66, "(['red', None, None, None, 'possible'], 'left')": -0.9981200788233393, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999993032896508, "(['green', None, None, None, 'possible'], 'right')": -0.46025461268203555, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4690258204861606, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 4.5541906043576774e-36, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.494414930690959}
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
random
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
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (8, 6), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.47637148734161533, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.0541832218024435e-71, "(['red', None, None, None, 'possible'], 'left')": -0.9981200788233393, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999997909868952, "(['green', None, None, None, 'possible'], 'right')": -0.46025461268203555, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49070774614584817, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.5125521642605774e-40, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.49832447920728773}
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
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (7, 6), destination = (3, 1), deadline = 45
RoutePlanner.route_to(): destination = (3, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.47637148734161533, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.5257771960252904e-73, "(['red', None, None, None, 'possible'], 'left')": -0.9981200788233393, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999372960686, "(['green', None, None, None, 'possible'], 'right')": -0.46025461268203555, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49070774614584817, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.278024646022451e-43, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.49832447920728773}
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
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'right', None, 'possible']
action:  None
state2:  ['green', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (2, 1), destination = (8, 3), deadline = 40
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.47637148734161533, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.8317244521083083e-78, "(['red', None, None, None, 'possible'], 'left')": -0.9994360236470018, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9505590922377973, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999811888206, "(['green', None, None, None, 'possible'], 'right')": -0.46025461268203555, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49070774614584817, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.1651528117861388e-47, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.49832447920728773}
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
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'left', None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
random
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
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (8, 5), destination = (5, 3), deadline = 25
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4929114462024846, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 8.007019652196491e-82, "(['red', None, None, None, 'possible'], 'left')": -0.9994360236470018, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9851677276713393, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999811888206, "(['green', None, None, None, 'possible'], 'right')": -0.46025461268203555, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.49070774614584817, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.2542114244334698e-52, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.49832447920728773}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, 'right', 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (8, 4), destination = (5, 5), deadline = 20
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4929114462024846, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.0254036120369995e-83, "(['red', None, None, None, 'possible'], 'left')": -0.9998308070941005, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9851677276713393, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999811888206, "(['green', None, None, None, 'possible'], 'right')": -0.34142687454241494, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.33501494434881324, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 3.1338534363259645e-55, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.49832447920728773}
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
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['green', None, 'right', None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (5, 5), destination = (2, 1), deadline = 35
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4929114462024846, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 0.6030380719113257, "(['red', None, None, None, 'possible'], 'left')": -0.9999492421282301, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.9851677276713393, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999943566462, "(['green', None, None, None, 'possible'], 'right')": -0.34142687454241494, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": 1.1865071692534643, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 6.919498770836165e-57, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.49832447920728773}
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  forward
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['red', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
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
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 6), deadline = 40
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.4929114462024846, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 9.889916583333405e-05, "(['red', None, None, None, 'possible'], 'left')": -0.9999492421282301, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4736650954904205, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999983069938, "(['green', None, None, None, 'possible'], 'right')": -0.34142687454241494, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3943982809918794, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 5.816189564299131e-60, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.49832447920728773}
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
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
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
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
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
self.state:['red', None, 'forward', None, 'possible']
action:  None
state2:  ['red', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', None, 'right', None, 'possible']
action:  None
state2:  ['red', None, 'right', None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (7, 6), destination = (4, 2), deadline = 35
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.49786411835051725, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.0645853694071086e-09, "(['red', None, None, None, 'possible'], 'left')": -0.9999492421282301, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4736650954904205, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999983069938, "(['green', None, None, None, 'possible'], 'right')": -0.34142687454241494, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.3943982809918794, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.8355052956226017e-63, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.34245417617596874}
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  left
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
self.state:['green', None, None, None, 'possible']
random
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
self.state:['green', None, None, None, 'possible']
action:  forward
state2:  ['green', None, None, None, 'possible']
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
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
self.state:['green', None, None, None, 'possible']
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (1, 3), destination = (7, 2), deadline = 35
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1404886911084731, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 0.07001994966069766, "(['red', None, None, None, 'possible'], 'left')": -0.9999954317915407, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4736650954904205, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999983069938, "(['green', None, None, None, 'possible'], 'right')": 2.2840295556758856, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.12184267451770042, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 8.017710412838222e-67, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.33682662302952576}
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
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
self.state:['red', None, None, 'forward', 'possible']
action:  None
state2:  ['red', None, None, 'forward', 'possible']
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
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
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (3, 1), destination = (6, 4), deadline = 30
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1404886911084731, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 3.413608443590355e-05, "(['red', None, None, None, 'possible'], 'left')": -0.9999954317915407, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4736650954904205, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999983069938, "(['green', None, None, None, 'possible'], 'right')": -0.20977365719371868, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.38272751727821464, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 2.2670978736444032e-70, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.33682662302952576}
self.state:['red', None, None, None, 'possible']
random
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
random
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
random
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
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
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (1, 3), destination = (6, 2), deadline = 30
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1404886911084731, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.869310981005406e-08, "(['red', None, None, None, 'possible'], 'left')": -0.9999995888612387, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4736650954904205, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999983069938, "(['green', None, None, None, 'possible'], 'right')": -0.20977365719371868, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.46481825518346437, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.1052542141803595e-73, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4510479869088577}
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
random
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
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
self.state:['red', 'left', None, None, 'possible']
action:  right
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
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
random
action:  forward
state2:  ['green', None, None, None, 'possible']
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
action:  forward
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
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
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['green', None, None, None, 'possible']
action:  None
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (8, 6), destination = (1, 5), deadline = 40
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.7, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1404886911084731, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 2.411801365554095e-11, "(['red', None, None, None, 'possible'], 'left')": -0.9999995888612387, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 0.09209952864712623, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999983069938, "(['green', None, None, None, 'possible'], 'right')": -0.41293209249835455, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4968336428536202, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 5.388328806465333e-77, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4510479869088577}
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
action:  left
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
self.state:['red', None, None, None, 'possible']
action:  None
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'right', None, None, 'possible']
action:  None
state2:  ['red', 'right', None, None, 'possible']
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', None, None, None, 'possible']
random
action:  forward
state2:  ['red', None, None, None, 'possible']
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
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
self.state:['red', 'left', None, None, 'possible']
random
action:  forward
state2:  ['red', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
self.state:['green', 'left', None, None, 'possible']
action:  None
state2:  ['green', 'left', None, None, 'possible']
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
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
action:  right
state2:  ['green', None, None, None, 'possible']
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
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
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (4, 2), destination = (3, 6), deadline = 25
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.8842121319788045, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1404886911084731, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 7.717442713739151e-16, "(['red', None, None, None, 'possible'], 'left')": -0.9999998766583716, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4276298585941474, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999994920982, "(['green', None, None, None, 'possible'], 'right')": -0.41293209249835455, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4968336428536202, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 4.529163572550057e-80, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4510479869088577}
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
self.state:['red', 'forward', None, None, 'possible']
action:  None
state2:  ['red', 'forward', None, None, 'possible']
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
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
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (8, 4), destination = (4, 2), deadline = 30
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['red', 'right', 'right', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'forward')": -0.8842121319788045, "(['red', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'left')": -0.1404886911084731, "(['green', 'left', None, None, 'possible'], 'left')": -0.34999999917746677, "(['green', None, None, None, 'possible'], None)": 1.1184313633432563e-18, "(['red', None, None, None, 'possible'], 'left')": -0.9999998766583716, "(['green', None, None, 'left', 'possible'], 'right')": -0.45499999999999996, "(['green', 'left', 'forward', None, 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'right')": 1.4276298585941474, "(['green', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, None, 'forward', 'possible'], 'right')": -0.22352420597262135, "(['green', 'right', None, None, 'possible'], 'forward')": 1.4, "(['green', None, 'left', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], None)": 0.0, "(['green', 'left', None, None, 'possible'], 'right')": -0.32277478020403494, "(['green', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], 'left')": -0.9099999999999999, "(['red', None, 'forward', None, 'possible'], None)": 0.0, "(['green', 'right', None, None, 'possible'], None)": 0.0, "(['red', None, None, 'right', 'possible'], None)": 0.0, "(['red', None, 'right', None, 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], 'forward')": -0.9999999994920982, "(['green', None, None, None, 'possible'], 'right')": -0.41293209249835455, "(['red', 'right', None, None, 'possible'], None)": 0.0, "(['green', 'left', 'forward', None, 'possible'], 'left')": -0.35, "(['green', None, None, 'forward', 'possible'], None)": 0.0, "(['red', None, 'left', 'forward', 'possible'], None)": 0.0, "(['red', 'left', None, None, 'possible'], None)": 0.0, "(['green', None, 'forward', None, 'possible'], None)": 0.0, "(['green', None, 'right', None, 'possible'], 'right')": 0.39176208170856897, "(['green', 'forward', None, None, 'possible'], None)": 0.0, "(['green', None, None, None, 'possible'], 'forward')": -0.4968336428536202, "(['red', None, None, 'forward', 'possible'], None)": 0.0, "(['green', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, None, None, 'possible'], None)": 1.9511827207901082e-82, "(['red', None, None, 'left', 'possible'], None)": 0.0, "(['red', None, 'left', None, 'possible'], None)": 0.0, "(['red', 'forward', None, None, 'possible'], 'forward')": -0.7, "(['red', None, None, None, 'possible'], 'right')": -0.4510479869088577}
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
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'forward', None, 'possible']
action:  None
state2:  ['green', None, 'forward', None, 'possible']
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
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
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
self.state:['green', None, 'left', None, 'possible']
action:  None
state2:  ['green', None, 'left', None, 'possible']
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
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
((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ 
