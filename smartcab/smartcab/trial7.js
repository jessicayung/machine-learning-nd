self.epsilon = 0.1
self.alpha = 0.3 # Alpha is the learning rate
self.gamma = 0.5 # gamma is the value of future reward. Learning doesn't work well with high gamma.
self.defaultq = 0.0

SUCCESS: 94/10 :O oh. my. goodness!

((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ python smartcab/agent.py 
Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (4, 2), destination = (6, 5), deadline = 25
RoutePlanner.route_to(): destination = (6, 5)
q:  {}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.15, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 0.69]
max_q:  0.69
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.15, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.15, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 1.1864999999999999]
max_q:  1.1865
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.6]
max_q:  0.6
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 1.1099999999999999]
max_q:  1.11
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 1.5205499999999998]
max_q:  1.52055
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.6, -0.15, 0.0]
max_q:  0.6
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 1.1099999999999999, -0.15, 0.0]
max_q:  1.11
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (8, 6), destination = (7, 2), deadline = 25
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['green', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'right')": 1.8959099999999998, "(['green', None, None, None, 'forward'], 'forward')": 1.3769999999999998, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 1.5434999999999999, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 1.3769999999999998, -0.15, 0.0]
max_q:  1.377
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 1.5434999999999999]
max_q:  1.5435
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 1.7704499999999999, -0.15, 0.0]
max_q:  1.77045
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 2.3891501249999996, -0.15, 0.0]
max_q:  2.389150125
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (3, 6), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'right')": 1.8959099999999998, "(['green', None, None, None, 'forward'], 'forward')": 2.3891501249999996, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 1.9648364999999999, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 1.9648364999999999]
max_q:  1.9648365
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 1.8959099999999998]
max_q:  1.89591
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 2.3891501249999996, -0.15, 0.0]
max_q:  2.389150125
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 2.6307776062499997, -0.15, 0.0]
max_q:  2.63077760625
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 0.0, -0.15]
max_q:  0.0
count:  2
best:  [0, 2]
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (5, 6), destination = (7, 1), deadline = 35
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'right')": 2.2115234999999998, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'forward')": 2.4415443243749997, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.2597720499999996, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 2.2115234999999998]
max_q:  2.2115235
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 2.4415443243749997, -0.15, 0.0]
max_q:  2.44154432437
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.15, 0.0, -0.15]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 0.0, -0.15]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 2.2597720499999996]
max_q:  2.25977205
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 2.7078257287499996]
max_q:  2.70782572875
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.15, 0.0, -0.15]
max_q:  0.0
count:  2
best:  [0, 2]
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 2.5880142943124995]
max_q:  2.58801429431
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.006778252137187]
max_q:  3.00677825214
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 2.8626267438393276]
max_q:  2.86262674384
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.0772029478350205]
max_q:  3.07720294784
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.155761514316609]
max_q:  3.15576151432
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.215622505659767]
max_q:  3.21562250566
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.343295347037204]
max_q:  3.34329534704
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.4326663360014105]
max_q:  3.432666336
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.2823972871691174]
max_q:  3.28239728717
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 2.6753126757187498, -0.15, 0.42720473230828115]
max_q:  2.67531267572
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.4952260282763548]
max_q:  3.49522602828
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.5599525205824234]
max_q:  3.55995252058
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.421962005259835]
max_q:  3.42196200526
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (2, 2), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5801456787699374, "(['green', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'right')": 3.539267350056143, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'forward')": 2.874015774360937, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.6259596424950598, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 0.6, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, 0.0, -0.3, -0.15]
max_q:  0.0
count:  2
best:  [0, 1]
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 0.6, -0.15]
max_q:  0.6
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 2.874015774360937, -0.15, 0.5801456787699374]
max_q:  2.87401577436
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.45643701123101943, 3.0429134082067963, -0.15, 0.5801456787699374]
max_q:  3.04291340821
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (2, 1), destination = (7, 3), deadline = 35
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5801456787699374, "(['green', None, None, None, 'forward'], None)": 0.45643701123101943, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.7300393857447576, "(['green', None, None, None, 'right'], 'right')": 3.6259596424950598, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 1.02, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'right')": 3.539267350056143, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'forward'], 'forward')": -0.3}
next_waypoint:  forward
q:  [0.45643701123101943, 2.7300393857447576, -0.15, 0.5801456787699374]
max_q:  2.73003938574
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.45643701123101943, 2.51102757002133, -0.15, 0.5801456787699374]
max_q:  2.51102757002
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.45643701123101943, 2.7343734345181305, -0.15, 0.5801456787699374]
max_q:  2.73437343452
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.45643701123101943, 2.924217419340411, -0.15, 0.5801456787699374]
max_q:  2.92421741934
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.6259596424950598]
max_q:  3.6259596425
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.539267350056143]
max_q:  3.53926735006
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.45643701123101943, 2.646952193538288, -0.15, 0.25610197513895616]
max_q:  2.64695219354
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.608377247547721]
max_q:  3.60837724755
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.4528665354768013, -0.15, 0.25610197513895616]
max_q:  2.45286653548
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (3, 1), destination = (5, 5), deadline = 30
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.6874358881832338, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4528665354768013, "(['green', None, None, None, 'right'], 'right')": 3.6690618522549627, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 1.02, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.667120660415563, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'forward'], 'forward')": -0.3}
next_waypoint:  left
q:  [0.0, -0.15, 1.02, -0.102]
max_q:  1.02
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.4528665354768013, -0.15, 0.25610197513895616]
max_q:  2.45286653548
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.667120660415563]
max_q:  3.66712066042
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.3170065748337607, -0.15, 0.25610197513895616]
max_q:  2.31700657483
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.221904602383632, -0.15, 0.25610197513895616]
max_q:  2.22190460238
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.1553332216685424, -0.15, 0.25610197513895616]
max_q:  2.15533322167
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (4, 1), destination = (7, 6), deadline = 40
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.6874358881832338, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.1553332216685424, "(['green', None, None, None, 'right'], 'right')": 3.6690618522549627, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 1.314, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.717343740129138, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'forward'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.717343740129138]
max_q:  3.71734374013
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.6690618522549627]
max_q:  3.66906185225
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.1553332216685424, -0.15, 0.25610197513895616]
max_q:  2.15533322167
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.1087332551679796, -0.15, 0.25610197513895616]
max_q:  2.10873325517
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 8
Environment.reset(): Trial set up with start = (3, 5), destination = (6, 6), deadline = 20
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.6874358881832338, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.1087332551679796, "(['green', None, None, None, 'right'], 'right')": 3.718702574416718, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 1.314, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.752499895928641, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'forward'], 'forward')": -0.3}
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 1.314, -0.102]
max_q:  1.314
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.1087332551679796, -0.15, 0.25610197513895616]
max_q:  2.10873325517
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.0761132786175858, -0.15, 0.25610197513895616]
max_q:  2.07611327862
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.718702574416718]
max_q:  3.71870257442
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (1, 6), destination = (2, 1), deadline = 30
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.6874358881832338, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.05327929503231, "(['green', None, None, None, 'right'], 'right')": 3.718702574416718, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 1.7168999999999999, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.752499895928641, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'forward'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.752499895928641]
max_q:  3.75249989593
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.718702574416718]
max_q:  3.71870257442
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 1.7168999999999999, -0.102]
max_q:  1.7169
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.6874358881832338, 2.05327929503231, -0.15, 0.25610197513895616]
max_q:  2.05327929503
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.3452874007774636, -0.15, 0.25610197513895616]
max_q:  2.34528740078
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5934942906608436, -0.15, 0.25610197513895616]
max_q:  2.59349429066
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (2, 6), destination = (7, 1), deadline = 50
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.5934942906608436, "(['green', None, None, None, 'right'], 'right')": 3.7707750990885858, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.0593649999999997, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.7845553133125565, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'forward'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.7845553133125565]
max_q:  3.78455531331
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5934942906608436, -0.15, 0.25610197513895616]
max_q:  2.59349429066
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.3, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 2.0593649999999997, -0.102]
max_q:  2.059365
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4154460034625904, -0.15, 0.25610197513895616]
max_q:  2.41544600346
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.290812202423813, -0.15, 0.25610197513895616]
max_q:  2.29081220242
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.15, 2.35046025, -0.102]
max_q:  2.35046025
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.547190372060241, -0.15, 0.25610197513895616]
max_q:  2.54719037206
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7651118162512045, -0.15, 0.25610197513895616]
max_q:  2.76511181625
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.107793287241495, -0.15, 0.25610197513895616]
max_q:  3.10779328724
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (6, 2), destination = (6, 6), deadline = 20
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.107793287241495, "(['green', None, None, None, 'right'], 'right')": 3.8051588342252978, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.2453221749999996, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8148049841820773, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 2.2453221749999996, -0.102]
max_q:  2.245322175
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.107793287241495, -0.15, 0.25610197513895616]
max_q:  3.10779328724
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.2416242941552706, -0.15, 0.25610197513895616]
max_q:  3.24162429416
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.3553806500319796, -0.15, 0.25610197513895616]
max_q:  3.35538065003
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (8, 5), destination = (1, 1), deadline = 55
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.3553806500319796, "(['green', None, None, None, 'right'], 'right')": 3.8051588342252978, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.1717255224999996, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8148049841820773, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.8051588342252978]
max_q:  3.80515883423
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 55, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.834385009091503]
max_q:  3.83438500909
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 54, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 53, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.3553806500319796, -0.15, 0.25610197513895616]
max_q:  3.35538065003
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 52, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.4520735525271826, -0.15, 0.25610197513895616]
max_q:  3.45207355253
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 51, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0164514867690277, -0.15, 0.25610197513895616]
max_q:  3.01645148677
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7115160407383194, -0.15, 0.25610197513895616]
max_q:  2.71151604074
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9047886346275713, -0.15, 0.25610197513895616]
max_q:  2.90478863463
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6333520442392997, -0.15, 0.25610197513895616]
max_q:  2.63335204424
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.856290253991363]
max_q:  3.85629025399
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.8383492376034045, -0.15, 0.25610197513895616]
max_q:  2.8383492376
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0125968519628934, -0.15, 0.25610197513895616]
max_q:  3.01259685196
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.708817796374025, -0.15, 0.25610197513895616]
max_q:  2.70881779637
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4961724574618174, -0.15, 0.25610197513895616]
max_q:  2.49617245746
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 13
Environment.reset(): Trial set up with start = (1, 4), destination = (6, 3), deadline = 30
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4961724574618174, "(['green', None, None, None, 'right'], 'right')": 3.8716239254212654, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.1717255224999996, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8148049841820773, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.8148049841820773]
max_q:  3.81480498418
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4961724574618174, -0.15, 0.25610197513895616]
max_q:  2.49617245746
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.347320720223272, -0.15, 0.25610197513895616]
max_q:  2.34732072022
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5952226121897812, -0.15, 0.25610197513895616]
max_q:  2.59522261219
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.8059392203613136, -0.15, 0.25610197513895616]
max_q:  2.80593922036
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 2.1717255224999996, -0.102]
max_q:  2.1717255225
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (1, 5), destination = (6, 5), deadline = 25
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.5641574542529195, "(['green', None, None, None, 'right'], 'right')": 3.8716239254212654, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.1717255224999996, "(['red', None, None, None, 'forward'], 'right')": -0.255, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8425842365547656, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.0, -0.15, 2.1717255224999996, -0.102]
max_q:  2.1717255225
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5641574542529195, -0.15, 0.25610197513895616]
max_q:  2.56415745425
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.3949102179770434, -0.15, 0.25610197513895616]
max_q:  2.39491021798
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6356736852804867, -0.15, 0.25610197513895616]
max_q:  2.63567368528
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.15, 2.1202078657499994, -0.102]
max_q:  2.12020786575
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -1.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.8716239254212654]
max_q:  3.87162392542
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.8425842365547656]
max_q:  3.84258423655
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.289808965588336]
max_q:  3.28980896559
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.396337620750085]
max_q:  3.39633762075
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.0841455060249996, -0.102]
max_q:  2.08414550602
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (8, 2), destination = (8, 6), deadline = 20
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 2.4449715796963405, "(['green', None, None, None, 'right'], 'right')": 3.8908803366080753, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.0841455060249996, "(['red', None, None, None, 'forward'], 'right')": -0.3285, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.561068385016271, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.561068385016271]
max_q:  3.56106838502
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4449715796963405, -0.15, 0.25610197513895616]
max_q:  2.4449715797
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.678225842741889, -0.15, 0.25610197513895616]
max_q:  2.67822584274
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.8764919663306054, -0.15, 0.25610197513895616]
max_q:  2.87649196633
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.613544376431424, -0.15, 0.25610197513895616]
max_q:  2.61354437643
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4294810635019966, -0.15, 0.25610197513895616]
max_q:  2.4294810635
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6650589039766968, -0.15, 0.25610197513895616]
max_q:  2.66505890398
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.8653000683801917, -0.15, 0.25610197513895616]
max_q:  2.86530006838
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.62690812726383]
max_q:  3.62690812726
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.6828719081742554]
max_q:  3.68287190817
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.7616423862131896]
max_q:  3.76164238621
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (2, 2), destination = (1, 5), deadline = 20
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.035505058123163, "(['green', None, None, None, 'right'], 'right')": 3.8908803366080753, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.0841455060249996, "(['red', None, None, None, 'forward'], 'right')": -0.3285, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.816781720840444, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.8908803366080753]
max_q:  3.89088033661
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.816781720840444]
max_q:  3.81678172084
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.0841455060249996, -0.102]
max_q:  2.08414550602
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.035505058123163, -0.15, 0.25610197513895616]
max_q:  3.03550505812
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (5, 1), destination = (4, 4), deadline = 20
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.035505058123163, "(['green', None, None, None, 'right'], 'right')": 3.8961334937517194, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.083295128103062, "(['red', None, None, None, 'forward'], 'right')": -0.3285, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8561672286510684, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.8961334937517194]
max_q:  3.89613349375
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.083295128103062, -0.102]
max_q:  2.0832951281
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.035505058123163, -0.15, 0.25610197513895616]
max_q:  3.03550505812
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.1801792994046885, -0.15, 0.25610197513895616]
max_q:  3.1801792994
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (4, 1), destination = (8, 3), deadline = 30
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.1801792994046885, "(['green', None, None, None, 'right'], 'right')": 3.9057185299238637, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.0583065896721435, "(['red', None, None, None, 'forward'], 'right')": -0.3285, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8561672286510684, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.3285]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.0583065896721435, -0.102]
max_q:  2.05830658967
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.1801792994046885, -0.15, 0.25610197513895616]
max_q:  3.1801792994
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.303152404493985, -0.15, 0.25610197513895616]
max_q:  3.30315240449
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.407679543819887, -0.15, 0.25610197513895616]
max_q:  3.40767954382
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.9057185299238637]
max_q:  3.90571852992
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (5, 1), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.4965276122469033, "(['green', None, None, None, 'right'], 'right')": 3.9057185299238637, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.349560601221322, "(['red', None, None, None, 'forward'], 'right')": 0.09707689491070326, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8561672286510684, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 3.8561672286510684]
max_q:  3.85616722865
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.9057185299238637]
max_q:  3.90571852992
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.4965276122469033, -0.15, 0.25610197513895616]
max_q:  3.49652761225
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, 0.09707689491070326]
max_q:  0.0970768949107
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.349560601221322, -0.102]
max_q:  2.34956060122
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (4, 3), destination = (6, 6), deadline = 25
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.0621308628094375, "(['green', None, None, None, 'right'], 'right')": 3.919860750435284, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.349560601221322, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.885174839544327, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.919860750435284]
max_q:  3.91986075044
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.9318816378699912]
max_q:  3.93188163787
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0621308628094375, -0.15, 0.25610197513895616]
max_q:  3.06213086281
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.9420993921894922]
max_q:  3.94209939219
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.743491603966606, -0.15, 0.25610197513895616]
max_q:  2.74349160397
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9319678633716153, -0.15, 0.25610197513895616]
max_q:  2.93196786337
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.092172683865873, -0.15, 0.25610197513895616]
max_q:  3.09217268387
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 1), deadline = 20
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.092172683865873, "(['green', None, None, None, 'right'], 'right')": 3.9422458004642933, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.349560601221322, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.885174839544327, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.349560601221322, -0.102]
max_q:  2.34956060122
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.092172683865873, -0.15, 0.25610197513895616]
max_q:  3.09217268387
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.2283467812859916, -0.15, 0.25610197513895616]
max_q:  3.22834678129
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.885174839544327]
max_q:  3.88517483954
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (1, 6), destination = (6, 5), deadline = 30
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.344094764093093, "(['green', None, None, None, 'right'], 'right')": 3.9422458004642933, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.2446924208549253, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.885174839544327, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.2446924208549253, -0.102]
max_q:  2.24469242085
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.344094764093093, -0.15, 0.25610197513895616]
max_q:  3.34409476409
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.4424805494791286, -0.15, 0.25610197513895616]
max_q:  3.44248054948
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.00973638463539, -0.15, 0.25610197513895616]
max_q:  3.00973638464
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.1582759269400817, -0.15, 0.25610197513895616]
max_q:  3.15827592694
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.1712846945984476, -0.102]
max_q:  2.1712846946
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (1, 1), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.284534537899069, "(['green', None, None, None, 'right'], 'right')": 3.9422458004642933, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.1712846945984476, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.885174839544327, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.1712846945984476, -0.102]
max_q:  2.1712846946
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.284534537899069, -0.15, 0.25610197513895616]
max_q:  3.2845345379
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.8991741765293484, -0.15, 0.25610197513895616]
max_q:  2.89917417653
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.885174839544327]
max_q:  3.88517483954
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.064298050049946, -0.15, 0.25610197513895616]
max_q:  3.06429805005
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 24
Environment.reset(): Trial set up with start = (8, 1), destination = (8, 6), deadline = 25
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.064298050049946, "(['green', None, None, None, 'right'], 'right')": 3.9422458004642933, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.4455919904086807, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.910959257750673, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.9422458004642933]
max_q:  3.94224580046
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.064298050049946, -0.15, 0.25610197513895616]
max_q:  3.06429805005
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.204653342542454, -0.15, 0.25610197513895616]
max_q:  3.20465334254
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.323955341161086, -0.15, 0.25610197513895616]
max_q:  3.32395534116
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.92676873881276, -0.15, 0.25610197513895616]
max_q:  2.92676873881
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (4, 2), destination = (7, 4), deadline = 25
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 2.92676873881276, "(['green', None, None, None, 'right'], 'right')": 3.9509089303946494, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.4455919904086807, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.910959257750673, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.92676873881276, -0.15, 0.25610197513895616]
max_q:  2.92676873881
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0877534279908456, -0.15, 0.25610197513895616]
max_q:  3.08775342799
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.2245904137922183, -0.15, 0.25610197513895616]
max_q:  3.22459041379
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.9509089303946494]
max_q:  3.95090893039
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (5, 4), destination = (3, 2), deadline = 20
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 3.3409018517233853, "(['green', None, None, None, 'right'], 'right')": 3.3656362512762543, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.4455919904086807, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.910959257750673, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.4455919904086807, -0.102]
max_q:  2.44559199041
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.06748463932590222]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.3409018517233853, -0.15, 0.25610197513895616]
max_q:  3.34090185172
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.3656362512762543]
max_q:  3.36563625128
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9386312962063696, -0.15, 0.25610197513895616]
max_q:  2.93863129621
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (3, 5), destination = (7, 1), deadline = 40
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, None, None, 'forward'], 'forward')": 2.9386312962063696, "(['green', None, None, None, 'right'], 'right')": 3.5425892645559784, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.3119143932860764, "(['red', None, None, None, 'forward'], 'right')": -0.06748463932590222, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.910959257750673, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.36329430078897523, 3.5425892645559784]
max_q:  3.54258926456
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.910959257750673]
max_q:  3.91095925775
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9386312962063696, -0.15, 0.25610197513895616]
max_q:  2.93863129621
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.097836601775414, -0.15, 0.25610197513895616]
max_q:  3.09783660178
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.3119143932860764, -0.102]
max_q:  2.31191439329
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.5499684560777678, 0.0, 0.36329430078897523, 3.6664563738517852]
max_q:  3.66645637385
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.8876399365032386]
max_q:  3.8876399365
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.9044939460277526]
max_q:  3.90449394603
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.895595580045187]
max_q:  3.89559558005
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.911256243038409]
max_q:  3.91125624304
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.565127234293165, -0.102]
max_q:  2.56512723429
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.19723924752813154]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7684856212427897, -0.15, 0.25610197513895616]
max_q:  2.76848562124
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.953212778056371, -0.15, 0.25610197513895616]
max_q:  2.95321277806
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (8, 2), destination = (3, 5), deadline = 40
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.953212778056371, "(['green', None, None, None, 'right'], 'right')": 3.7496654521717354, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.395589064005215, "(['red', None, None, None, 'forward'], 'right')": -0.19723924752813154, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.9245678065826475, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.5499684560777678, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.395589064005215, -0.102]
max_q:  2.39558906401
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.19723924752813154]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.19723924752813154]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.19723924752813154]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.19723924752813154]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.953212778056371, -0.15, 0.25610197513895616]
max_q:  2.95321277806
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.1102308613479153, -0.15, 0.25610197513895616]
max_q:  3.11023086135
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.19723924752813154]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.2769123448036503, -0.102]
max_q:  2.2769123448
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.12850676717183898]
max_q:  0.128506767172
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.5353754930831025, -0.102]
max_q:  2.53537549308
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.5499684560777678, 0.4124498178257603, 0.36329430078897523, 3.7496654521717354]
max_q:  3.74966545217
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.9245678065826475]
max_q:  3.92456780658
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (6, 1), destination = (1, 6), deadline = 50
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.7771616029435404, "(['green', None, None, None, 'right'], 'right')": 3.8134509875076117, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.755069169120637, "(['red', None, None, None, 'forward'], 'right')": 0.35652897746181833, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.9245678065826475, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.5499684560777678, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.35652897746181833]
max_q:  0.356528977462
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.755069169120637, -0.102]
max_q:  2.75506916912
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  forward
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7771616029435404, -0.15, 0.25610197513895616]
max_q:  2.77716160294
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.960587362502009, -0.15, 0.25610197513895616]
max_q:  2.9605873625
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.5161445246648039]
max_q:  0.516144524665
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.552941692270008, -0.102]
max_q:  2.55294169227
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.7700004384295065, -0.102]
max_q:  2.77000043843
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (4, 2), destination = (1, 3), deadline = 20
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.749832832451127, "(['green', None, None, None, 'right'], 'right')": 3.8134509875076117, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.7700004384295065, "(['red', None, None, None, 'forward'], 'right')": 0.6237760921330318, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.9245678065826475, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.33371958408380337, "(['green', None, None, None, 'right'], None)": 0.5499684560777678, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.33371958408380337, 3.9245678065826475]
max_q:  3.92456780658
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.6237760921330318]
max_q:  0.623776092133
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.7700004384295065, -0.102]
max_q:  2.77000043843
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.749832832451127, -0.15, 0.25610197513895616]
max_q:  2.74983283245
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.9545003726650805, -0.102]
max_q:  2.95450037267
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.38020967831307695]
max_q:  0.380209678313
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.17317822656611537]
max_q:  0.173178226566
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.6681502608655565, -0.102]
max_q:  2.66815026087
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.3585119237656933]
max_q:  0.358511923766
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.4677051826058896, -0.102]
max_q:  2.46770518261
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5819144344627505, -0.15, 0.25610197513895616]
max_q:  2.58191443446
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7946272692933376, -0.15, 0.25610197513895616]
max_q:  2.79462726929
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.4882455118053979]
max_q:  0.488245511805
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (7, 5), destination = (6, 2), deadline = 20
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.6294759152761458, "(['green', None, None, None, 'right'], 'right')": 3.8134509875076117, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.3273936278241227, "(['red', None, None, None, 'forward'], 'right')": 0.2650086850345882, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.15, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.93588263559525, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.3273936278241227, -0.102]
max_q:  2.32739362782
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.93588263559525]
max_q:  3.9358826356
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.2650086850345882]
max_q:  0.265008685035
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8134509875076117]
max_q:  3.81345098751
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.9455002402559627]
max_q:  3.94550024026
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8612407272937226]
max_q:  3.86124072729
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6294759152761458, -0.15, 0.25610197513895616]
max_q:  2.62947591528
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.941036277273232]
max_q:  3.94103627727
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.3587253940912625]
max_q:  3.35872539409
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (8, 4), destination = (5, 2), deadline = 25
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.835054527984724, "(['green', None, None, None, 'right'], 'right')": 3.882054618199664, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.229175539476886, "(['red', None, None, None, 'forward'], 'right')": 0.07525738227939995, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.3587253940912625, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.229175539476886, -0.102]
max_q:  2.22917553948
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.835054527984724, -0.24371139265809, 0.25610197513895616]
max_q:  2.83505452798
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.07525738227939995]
max_q:  0.0752573822794
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.494799208555353, -0.102]
max_q:  2.49479920856
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.3587253940912625]
max_q:  3.35872539409
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (6, 6), destination = (2, 6), deadline = 20
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.5958267769312164, "(['green', None, None, None, 'right'], 'right')": 3.882054618199664, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.346359445988747, "(['red', None, None, None, 'forward'], 'right')": 0.2920541841352624, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.3587253940912625, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.346359445988747, -0.102]
max_q:  2.34635944599
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5958267769312164, -0.24371139265809, 0.25610197513895616]
max_q:  2.59582677693
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.2920541841352624]
max_q:  0.292054184135
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.5944055290904346, -0.102]
max_q:  2.59440552909
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, 0.09824605651497305]
max_q:  0.098246056515
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.8052446997268694, -0.102]
max_q:  2.80524469973
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.3]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.9844579947678387, -0.102]
max_q:  2.98445799477
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.2879052702813022]
max_q:  0.287905270281
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.3587253940912625]
max_q:  3.35872539409
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.882054618199664]
max_q:  3.8820546182
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.5334159685938333]
max_q:  3.53341596859
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4608868714721406, -0.24371139265809, 0.25610197513895616]
max_q:  2.46088687147
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 34
Environment.reset(): Trial set up with start = (1, 3), destination = (4, 1), deadline = 25
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4608868714721406, "(['green', None, None, None, 'right'], 'right')": 3.84745062802884, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.689120596337487, "(['red', None, None, None, 'forward'], 'right')": 0.42066671991773263, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.650508772220009, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.84745062802884]
max_q:  3.84745062803
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.42066671991773263]
max_q:  0.420666719918
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.689120596337487, -0.102]
max_q:  2.68912059634
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.5135997346632339]
max_q:  0.513599734663
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.482384417436241, -0.102]
max_q:  2.48238441744
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.7100267548208046, -0.102]
max_q:  2.71002675482
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4608868714721406, -0.24371139265809, 0.25610197513895616]
max_q:  2.46088687147
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6917538407513195, -0.24371139265809, 0.25610197513895616]
max_q:  2.69175384075
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.2865597744637488]
max_q:  0.286559774464
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.840791755453189]
max_q:  3.84079175545
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.650508772220009]
max_q:  3.65050877222
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.836130544650233]
max_q:  3.83613054465
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.4837904568204173]
max_q:  0.48379045682
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.844907739592894]
max_q:  3.84490773959
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.86817157865396]
max_q:  3.86817157865
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.7307757222515416]
max_q:  3.73077572225
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.887990764638621, -0.24371139265809, 0.25610197513895616]
max_q:  2.88799076464
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 6), deadline = 40
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.887990764638621, "(['green', None, None, None, 'right'], 'right')": 3.867336463395503, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.497018728374563, "(['red', None, None, None, 'forward'], 'right')": 0.2612218882973547, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.7916434750854044, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.497018728374563, -0.102]
max_q:  2.49701872837
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.887990764638621, -0.24371139265809, 0.25610197513895616]
max_q:  2.88799076464
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.054792149942828, -0.24371139265809, 0.25610197513895616]
max_q:  3.05479214994
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.7224659191183784, -0.102]
max_q:  2.72246591912
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.2612218882973547]
max_q:  0.261221888297
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.867336463395503]
max_q:  3.8673364634
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.7916434750854044]
max_q:  3.79164347509
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.8355327394057324]
max_q:  3.83553273941
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.4494859900388356]
max_q:  0.449485990039
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.866255224429962]
max_q:  3.86625522443
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.8877609639469224]
max_q:  3.88776096395
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (7, 1), destination = (3, 4), deadline = 35
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.777537788204582, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8758820456396625, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.505726143382865, "(['red', None, None, None, 'forward'], 'right')": 0.5812708612578722, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8877609639469224, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8758820456396625]
max_q:  3.87588204564
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.894499738793713]
max_q:  3.89449973879
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.5812708612578722]
max_q:  0.581270861258
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.777537788204582, -0.24371139265809, 0.25610197513895616]
max_q:  2.7775377882
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.25688960288051055]
max_q:  0.256889602881
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.729867221875435, -0.102]
max_q:  2.72986722188
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.909313961747637]
max_q:  3.90931396175
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9609071199738946, -0.24371139265809, 0.25610197513895616]
max_q:  2.96090711997
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (4, 5), destination = (1, 4), deadline = 20
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.9609071199738946, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9229168674854913, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.920387138594119, "(['red', None, None, None, 'forward'], 'right')": 0.06835616244843397, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8877609639469224, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9229168674854913]
max_q:  3.92291686749
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.934479337362667]
max_q:  3.93447933736
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9609071199738946, -0.24371139265809, 0.25610197513895616]
max_q:  2.96090711997
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, 0.06835616244843397]
max_q:  0.0683561624484
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.944307436758267]
max_q:  3.94430743676
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (3, 1), destination = (8, 1), deadline = 25
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.1167710519778105, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.944307436758267, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.6442709970158833, "(['red', None, None, None, 'forward'], 'right')": -0.09189726191883113, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8877609639469224, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.944307436758267]
max_q:  3.94430743676
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.1167710519778105, -0.24371139265809, 0.25610197513895616]
max_q:  3.11677105198
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.2492553941811386, -0.24371139265809, 0.25610197513895616]
max_q:  3.24925539418
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.6442709970158833, -0.102]
max_q:  2.64427099702
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.874478775926797, -0.24371139265809, 0.25610197513895616]
max_q:  2.87447877593
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.450989697911118, -0.102]
max_q:  2.45098969791
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (6, 5), destination = (1, 6), deadline = 30
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.0433069595377766, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.952661321244527, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.450989697911118, "(['red', None, None, None, 'forward'], 'right')": -0.09189726191883113, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.8877609639469224, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.0, 0.5239861041979499, 3.8877609639469224]
max_q:  3.88776096395
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0433069595377766, -0.24371139265809, 0.25610197513895616]
max_q:  3.04330695954
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.51122041017351, -0.24371139265809, 0.25610197513895616]
max_q:  2.51122041017
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7345373486474833, -0.24371139265809, 0.25610197513895616]
max_q:  2.73453734865
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.450989697911118, -0.102]
max_q:  2.45098969791
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (1, 3), destination = (7, 6), deadline = 45
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.514176144053238, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.952661321244527, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.450989697911118, "(['red', None, None, None, 'forward'], 'right')": -0.09189726191883113, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.914331872949525, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.450989697911118, -0.102]
max_q:  2.45098969791
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.514176144053238, -0.24371139265809, 0.25610197513895616]
max_q:  2.51417614405
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.952661321244527]
max_q:  3.95266132124
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.3599233008372664, -0.24371139265809, 0.25610197513895616]
max_q:  2.35992330084
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.09189726191883113]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.6833412432244503, -0.102]
max_q:  2.68334124322
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6059348057116765, -0.24371139265809, 0.25610197513895616]
max_q:  2.60593480571
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9540127058135974]
max_q:  3.95401270581
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4241543639981735, -0.24371139265809, 0.25610197513895616]
max_q:  2.424154364
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6605312093984477, -0.24371139265809, 0.25610197513895616]
max_q:  2.6605312094
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (1, 5), destination = (1, 1), deadline = 20
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.6605312093984477, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9549586750119468, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.478338870257115, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.914331872949525, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.2871497809424287, 0.5239861041979499, 3.914331872949525]
max_q:  3.91433187295
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.15, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6605312093984477, -0.24371139265809, 0.25610197513895616]
max_q:  2.6605312094
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.86145152798868, -0.24371139265809, 0.25610197513895616]
max_q:  2.86145152799
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.657, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0322337987903776, -0.24371139265809, 0.25610197513895616]
max_q:  3.03223379879
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.722563659153264, -0.24371139265809, 0.25610197513895616]
max_q:  2.72256365915
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9141791102802745, -0.24371139265809, 0.25610197513895616]
max_q:  2.91417911028
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0770522437382333, -0.24371139265809, 0.25610197513895616]
max_q:  3.07705224374
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9549586750119468]
max_q:  3.95495867501
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (8, 1), destination = (8, 6), deadline = 25
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.753936570616763, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.869475919168063, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.478338870257115, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.3400323110646672, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.869475919168063]
max_q:  3.86947591917
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.753936570616763, -0.24371139265809, 0.25610197513895616]
max_q:  2.75393657062
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.527755599431734, -0.24371139265809, 0.25610197513895616]
max_q:  2.52775559943
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.7599, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8319300000000001, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.3694289196022136, -0.24371139265809, 0.25610197513895616]
max_q:  2.3694289196
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8319300000000001, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.2586002437215495, -0.24371139265809, 0.25610197513895616]
max_q:  2.25860024372
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.1810201706050845, -0.24371139265809, 0.25610197513895616]
max_q:  2.18102017061
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8319300000000001, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.126714119423559, -0.24371139265809, 0.25610197513895616]
max_q:  2.12671411942
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.407707001510025, -0.24371139265809, 0.25610197513895616]
max_q:  2.40770700151
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.2871497809424287, 0.5239861041979499, 3.3400323110646672]
max_q:  3.34003231106
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.646550951283521, -0.24371139265809, 0.25610197513895616]
max_q:  2.64655095128
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4525856658984644, -0.24371139265809, 0.25610197513895616]
max_q:  2.4525856659
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6846978160136947, -0.24371139265809, 0.25610197513895616]
max_q:  2.68469781601
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.479288471209586, -0.24371139265809, 0.25610197513895616]
max_q:  2.47928847121
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (2, 6), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.479288471209586, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.889054531292853, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.478338870257115, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.521380797439195, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.479288471209586, -0.24371139265809, 0.25610197513895616]
max_q:  2.47928847121
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.33550192984671, -0.24371139265809, 0.25610197513895616]
max_q:  2.33550192985
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.234851350892697, -0.24371139265809, 0.25610197513895616]
max_q:  2.23485135089
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4996236482587926, -0.24371139265809, 0.25610197513895616]
max_q:  2.49962364826
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (6, 1), destination = (3, 2), deadline = 20
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4996236482587926, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.889054531292853, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.478338870257115, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.521380797439195, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.889054531292853]
max_q:  3.88905453129
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.2871497809424287, 0.5239861041979499, 3.521380797439195]
max_q:  3.52138079744
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4996236482587926, -0.24371139265809, 0.25610197513895616]
max_q:  2.49962364826
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7246801010199735, -0.24371139265809, 0.25610197513895616]
max_q:  2.72468010102
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (8, 1), destination = (3, 2), deadline = 30
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.7246801010199735, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.322338171904997, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.478338870257115, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.563317283993186, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 0.9524340901831982, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.0, 0.0, 0.9524340901831982, 0.0]
max_q:  0.952434090183
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7246801010199735, -0.24371139265809, 0.25610197513895616]
max_q:  2.72468010102
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5072760707139814, -0.24371139265809, 0.25610197513895616]
max_q:  2.50727607071
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.3550932494997867, -0.24371139265809, 0.25610197513895616]
max_q:  2.3550932495
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6018292620748187, -0.24371139265809, 0.25610197513895616]
max_q:  2.60182926207
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.478338870257115, -0.102]
max_q:  2.47833887026
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (6, 1), destination = (3, 5), deadline = 35
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.421280483452373, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.322338171904997, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.478338870257115, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": -0.24371139265809, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.563317283993186, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.478338870257115, -0.102]
max_q:  2.47833887026
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.2871497809424287, 0.5239861041979499, 3.563317283993186]
max_q:  3.56331728399
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.421280483452373, 0.042594097657192964, 0.25610197513895616]
max_q:  2.42128048345
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.706588039718548, -0.102]
max_q:  2.70658803972
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.658088410934517, 0.042594097657192964, 0.25610197513895616]
max_q:  2.65808841093
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4606618876541617, 0.042594097657192964, 0.25610197513895616]
max_q:  2.46066188765
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (7, 5), destination = (3, 6), deadline = 25
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4606618876541617, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.322338171904997, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.900599833760766, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.59267282458098, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.2871497809424287, 0.5239861041979499, 3.59267282458098]
max_q:  3.59267282458
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.322338171904997]
max_q:  3.3223381719
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4606618876541617, 0.042594097657192964, 0.25610197513895616]
max_q:  2.46066188765
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.322463321357913, 0.042594097657192964, 0.25610197513895616]
max_q:  2.32246332136
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.225724324950539, 0.042594097657192964, 0.25610197513895616]
max_q:  2.22572432495
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (3, 6), destination = (5, 2), deadline = 30
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.225724324950539, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.4676199757823634, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.900599833760766, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.613221702992435, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
q:  [0.0, 0.2871497809424287, 0.5239861041979499, 3.613221702992435]
max_q:  3.61322170299
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.225724324950539, 0.042594097657192964, 0.25610197513895616]
max_q:  2.22572432495
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.900599833760766, -0.102]
max_q:  2.90059983376
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.491865676207958, 0.042594097657192964, 0.25610197513895616]
max_q:  2.49186567621
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.376153508423479, 0.042594097657192964, 0.25610197513895616]
max_q:  2.37615350842
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.619730482159957, 0.042594097657192964, 0.25610197513895616]
max_q:  2.61973048216
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (1, 1), destination = (4, 5), deadline = 35
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.619730482159957, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.4676199757823634, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.065509858696651, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.649398188462059, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5239861041979499, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.2871497809424287, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.44841457492900894, 0.6142000012078738, 3.649398188462059]
max_q:  3.64939818846
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.619730482159957, 0.042594097657192964, 0.25610197513895616]
max_q:  2.61973048216
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.43381133751197, 0.042594097657192964, 0.25610197513895616]
max_q:  2.43381133751
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.065509858696651, -0.102]
max_q:  3.0655098587
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (5, 6), destination = (8, 3), deadline = 30
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.6687396368851743, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.4676199757823634, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.065509858696651, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.2192860779503336, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856}
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.657, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.065509858696651, -0.102]
max_q:  3.0655098587
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6687396368851743, 0.042594097657192964, 0.25610197513895616]
max_q:  2.66873963689
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.2056833798921534, -0.102]
max_q:  3.20568337989
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0381643876495383, 0.042594097657192964, 0.25610197513895616]
max_q:  3.03816438765
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.726715071354677, 0.042594097657192964, 0.25610197513895616]
max_q:  2.72671507135
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (2, 1), destination = (8, 2), deadline = 35
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.726715071354677, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.4676199757823634, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.3248308729083305, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.2192860779503336, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.3248308729083305, -0.102]
max_q:  3.32483087291
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.726715071354677, 0.042594097657192964, 0.25610197513895616]
max_q:  2.72671507135
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.917707810651475, 0.042594097657192964, 0.25610197513895616]
max_q:  2.91770781065
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4496768272192226, 0.042594097657192964, 0.25610197513895616]
max_q:  2.44967682722
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.682225303136339, 0.042594097657192964, 0.25610197513895616]
max_q:  2.68222530314
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.44841457492900894, 0.6142000012078738, 3.2192860779503336]
max_q:  3.21928607795
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (6, 2), destination = (1, 6), deadline = 45
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.016574240441531, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4775577121954373, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.4676199757823634, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.4261062419720805, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['red', None, None, None, 'right'], 'right')": 3.2192860779503336, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.48289291169255, 0.44841457492900894, 0.6142000012078738, 3.2192860779503336]
max_q:  3.21928607795
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4775577121954373, 0.042594097657192964, 0.25610197513895616]
max_q:  2.4775577122
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.705924055366122, 0.042594097657192964, 0.25610197513895616]
max_q:  2.70592405537
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.4261062419720805, -0.102]
max_q:  3.42610624197
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.8823509999999999, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 1.016574240441531, 0.0, -0.15]
max_q:  1.01657424044
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9000354470612035, 0.042594097657192964, 0.25610197513895616]
max_q:  2.90003544706
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0650301300020226, 0.042594097657192964, 0.25610197513895616]
max_q:  3.06503013
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (6, 4), destination = (4, 1), deadline = 25
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.3116019683090716, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.0650301300020226, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.4676199757823634, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.512190305676268, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.3363931662577833, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.0650301300020226, 0.042594097657192964, 0.25610197513895616]
max_q:  3.06503013
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.205275610501719, 0.042594097657192964, 0.25610197513895616]
max_q:  3.2052756105
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.4676199757823634]
max_q:  3.46761997578
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.3244842689264607, 0.042594097657192964, 0.25610197513895616]
max_q:  3.32448426893
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.6, -0.15, 0.0]
max_q:  0.6
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (1, 5), destination = (5, 6), deadline = 25
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.3116019683090716, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.9271389882485224, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.527792957986322, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.512190305676268, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.3363931662577833, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.48289291169255, 0.44841457492900894, 0.6142000012078738, 3.3363931662577833]
max_q:  3.33639316626
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9271389882485224, 0.042594097657192964, 0.25610197513895616]
max_q:  2.92713898825
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6489972917739655, 0.042594097657192964, 0.25610197513895616]
max_q:  2.64899729177
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 1.3116019683090716, 0.0, -0.15]
max_q:  1.31160196831
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.527792957986322]
max_q:  3.52779295799
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (2, 5), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.6510383994881366, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.527792957986322, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.512190305676268, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.464644160078396, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.48289291169255, 0.44841457492900894, 0.6142000012078738, 3.464644160078396]
max_q:  3.46464416008
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.44841457492900894, 0.6142000012078738, 3.5449475360666365]
max_q:  3.54494753607
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.6510383994881366, 0.042594097657192964, 0.25610197513895616]
max_q:  2.65103839949
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (6, 3), destination = (1, 2), deadline = 30
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4557268796416953, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.527792957986322, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.512190305676268, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.6132054056566405, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.512190305676268, -0.102]
max_q:  3.51219030568
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.4557268796416953, 0.042594097657192964, 0.25610197513895616]
max_q:  2.45572687964
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.3190088157491866, 0.042594097657192964, 0.25610197513895616]
max_q:  2.31900881575
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.2233061710244306, 0.042594097657192964, 0.25610197513895616]
max_q:  2.22330617102
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.489810245370766, 0.042594097657192964, 0.25610197513895616]
max_q:  2.48981024537
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.44841457492900894, 0.6142000012078738, 3.6132054056566405]
max_q:  3.61320540566
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (4, 4), destination = (1, 3), deadline = 20
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.342867171759536, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.527792957986322, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.0585332139733876, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.657, "(['green', None, None, None, 'forward'], 'left')": 0.042594097657192964, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.6132054056566405, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.6138142094578047, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3, -0.7599, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.7599, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.7599, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.0585332139733876, -0.102]
max_q:  3.05853321397
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.6138142094578047, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.342867171759536, 0.042594097657192964, 0.25610197513895616]
max_q:  2.34286717176
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.48289291169255, 0.44841457492900894, 0.6142000012078738, 3.6132054056566405]
max_q:  3.61320540566
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.527792957986322]
max_q:  3.52779295799
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5914370959956052, -0.12018413163996491, 0.25610197513895616]
max_q:  2.591437096
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (8, 5), destination = (3, 4), deadline = 30
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.5914370959956052, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.618216979739065, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.1997532318773794, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.658412727657596, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.44841457492900894, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.618216979739065]
max_q:  3.61821697974
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.44841457492900894, 0.6142000012078738, 3.658412727657596]
max_q:  3.65841272766
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.5914370959956052, -0.12018413163996491, 0.25610197513895616]
max_q:  2.591437096
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.8027215315962644, -0.12018413163996491, 0.25610197513895616]
max_q:  2.8027215316
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9823133018568244, -0.12018413163996491, 0.25610197513895616]
max_q:  2.98231330186
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.134966306578301, -0.12018413163996491, 0.25610197513895616]
max_q:  3.13496630658
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.713115978605215]
max_q:  3.71311597861
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7944764146048104, -0.12018413163996491, 0.25610197513895616]
max_q:  2.7944764146
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (8, 3), destination = (6, 5), deadline = 20
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.3, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.7944764146048104, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.681513794965985, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.1997532318773794, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.7561485818144327, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.8329982318448831, 2.7944764146048104, -0.12018413163996491, 0.25610197513895616]
max_q:  2.7944764146
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.9753049524140884, -0.12018413163996491, 0.25610197513895616]
max_q:  2.97530495241
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3, -0.7599, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3, -0.7599, -0.255]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.1997532318773794, -0.102]
max_q:  3.19975323188
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.682713466689862, -0.12018413163996491, 0.25610197513895616]
max_q:  2.68271346669
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (7, 6), destination = (2, 2), deadline = 45
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.682713466689862, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.681513794965985, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.8398272623141656, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.0350053170591804, "(['red', None, None, None, 'right'], 'right')": 3.7561485818144327, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.681513794965985]
max_q:  3.68151379497
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.7561485818144327]
max_q:  3.75614858181
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 2.8398272623141656, -0.102]
max_q:  2.83982726231
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.682713466689862, -0.12018413163996491, 0.25610197513895616]
max_q:  2.68271346669
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.880306446686382, -0.12018413163996491, 0.25610197513895616]
max_q:  2.88030644669
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 3.048260479683425, -0.12018413163996491, 0.25610197513895616]
max_q:  3.04826047968
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.7927262945422675]
max_q:  3.79272629454
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.7337823357783972, -0.12018413163996491, 0.25610197513895616]
max_q:  2.73378233578
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9176456999999998, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 1.0350053170591804, 0.0, -0.15]
max_q:  1.03500531706
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.923714985411637, -0.12018413163996491, 0.25610197513895616]
max_q:  2.92371498541
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (8, 4), destination = (1, 5), deadline = 40
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.0152728431864184, "(['green', None, None, None, 'forward'], None)": 0.8329982318448831, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.255, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.923714985411637, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.740481943748354, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.013853172967041, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.823817350360927, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.8329982318448831, 2.923714985411637, -0.12018413163996491, 0.25610197513895616]
max_q:  2.92371498541
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.8329982318448831, 2.646600489788146, -0.12018413163996491, 0.25610197513895616]
max_q:  2.64660048979
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.452620342851702, -0.12018413163996491, 0.25610197513895616]
max_q:  2.45262034285
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.684727291423947, -0.12018413163996491, 0.25610197513895616]
max_q:  2.68472729142
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.8820181977103547, -0.12018413163996491, 0.25610197513895616]
max_q:  2.88201819771
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.740481943748354]
max_q:  3.74048194375
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.7919099631779867]
max_q:  3.79190996318
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 1.0152728431864184, 0.0, 0.0]
max_q:  1.01527284319
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.617412738397248, -0.12018413163996491, 0.25610197513895616]
max_q:  2.6174127384
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, 0.1235779759450561]
max_q:  0.123577975945
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.823817350360927]
max_q:  3.82381735036
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.850858581769458]
max_q:  3.85085858177
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8279095767787297]
max_q:  3.82790957678
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.013853172967041, -0.102]
max_q:  3.01385317297
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (6, 6), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 0.9509918137191734, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4321889168780735, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.85372314026192, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.013853172967041, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.8697874437554294, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.8697874437554294]
max_q:  3.86978744376
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.85372314026192]
max_q:  3.85372314026
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.31262182590374993, -0.15, 3.013853172967041, -0.102]
max_q:  3.01385317297
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.4321889168780735, -0.12018413163996491, 0.25610197513895616]
max_q:  2.43218891688
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (1, 2), destination = (2, 6), deadline = 25
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 0.9509918137191734, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4321889168780735, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8756646692226315, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.1617751970219845, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.8869096816680884, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8756646692226315]
max_q:  3.87566466922
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.8869096816680884]
max_q:  3.88690968167
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.6673605793463624, -0.12018413163996491, 0.25610197513895616]
max_q:  2.66736057935
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.867256492444408, -0.12018413163996491, 0.25610197513895616]
max_q:  2.86725649244
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (4, 1), destination = (6, 4), deadline = 25
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 0.9509918137191734, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.31262182590374993, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.867256492444408, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8960017207060553, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.1617751970219845, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.9052370352735695, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 3.1617751970219845, -0.102]
max_q:  3.16177519702
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.867256492444408, -0.12018413163996491, 0.25610197513895616]
max_q:  2.86725649244
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.9052370352735695]
max_q:  3.90523703527
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.6070795447110857, -0.12018413163996491, 0.25610197513895616]
max_q:  2.60707954471
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.8160176130044228, -0.12018413163996491, 0.25610197513895616]
max_q:  2.816017613
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (1, 2), destination = (3, 5), deadline = 25
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 0.9509918137191734, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.8160176130044228, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8960017207060553, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.813242637915389, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.918066182797406, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.918066182797406]
max_q:  3.9180661828
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.8160176130044228, -0.12018413163996491, 0.25610197513895616]
max_q:  2.816017613
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8960017207060553]
max_q:  3.89600172071
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.993614971053759, -0.12018413163996491, 0.25610197513895616]
max_q:  2.99361497105
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.6955304797376316, -0.12018413163996491, 0.25610197513895616]
max_q:  2.69553047974
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 66
Environment.reset(): Trial set up with start = (2, 6), destination = (7, 5), deadline = 30
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 0.9509918137191734, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.6955304797376316, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.916258192403852, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.813242637915389, "(['red', None, None, None, 'forward'], 'right')": -0.21432808334318176, "(['green', None, 'forward', None, 'right'], 'left')": 0.4356740919041629, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.927046586064092, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 2.813242637915389, -0.102]
max_q:  2.81324263792
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.21432808334318176]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 2.5692698465407724, -0.102]
max_q:  2.56926984654
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.6955304797376316, -0.12018413163996491, 0.25610197513895616]
max_q:  2.69553047974
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.486871335816342, -0.12018413163996491, 0.25610197513895616]
max_q:  2.48687133582
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9509918137191734, 2.3408099350714395, -0.12018413163996491, 0.25610197513895616]
max_q:  2.34080993507
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.4356740919041629, 0.0]
max_q:  0.435674091904
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.3000296583402272]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.48289291169255, 0.5708575992410885, 0.6142000012078738, 3.927046586064092]
max_q:  3.92704658606
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.916258192403852]
max_q:  3.9162581924
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 2.7838793695596564, -0.102]
max_q:  2.78387936956
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.2385669545500075, -0.12018413163996491, 0.25610197513895616]
max_q:  2.23856695455
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9318364355485125]
max_q:  3.93183643555
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (3, 3), destination = (8, 3), deadline = 25
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0014793127859225, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.5027819113675065, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9427412057497753, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.9662974641257076, "(['red', None, None, None, 'forward'], 'right')": -0.024235717655657907, "(['green', None, 'forward', None, 'right'], 'left')": 0.7424105931934918, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.936371339105442, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 2.9662974641257076, -0.102]
max_q:  2.96629746413
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.5027819113675065, -0.12018413163996491, 0.25610197513895616]
max_q:  2.50278191137
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.72736462466238, -0.12018413163996491, 0.25610197513895616]
max_q:  2.72736462466
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.918259930963023, -0.12018413163996491, 0.25610197513895616]
max_q:  2.91825993096
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 3.0805209413185697, -0.12018413163996491, 0.25610197513895616]
max_q:  3.08052094132
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (1, 4), destination = (6, 6), deadline = 35
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0014793127859225, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.0805209413185697, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9427412057497753, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.121352844506851, "(['red', None, None, None, 'forward'], 'right')": -0.024235717655657907, "(['green', None, 'forward', None, 'right'], 'left')": 0.7424105931934918, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.12018413163996491, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.936371339105442, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.6142000012078738, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.7296699466204633, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.5708575992410885, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.48289291169255, 0.6900560203345781, 0.7203957017113278, 3.936371339105442]
max_q:  3.93637133911
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9427412057497753]
max_q:  3.94274120575
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 3.0805209413185697, -0.12018413163996491, 0.25610197513895616]
max_q:  3.08052094132
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.756364658922999, -0.12018413163996491, 0.25610197513895616]
max_q:  2.75636465892
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.942909960084549, -0.12018413163996491, 0.25610197513895616]
max_q:  2.94290996008
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.660036972059184, -0.12018413163996491, 0.25610197513895616]
max_q:  2.66003697206
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9513300248873087]
max_q:  3.95133002489
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7296699466204633, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.8610314262503063, -0.12018413163996491, 0.25610197513895616]
max_q:  2.86103142625
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.48289291169255, 0.6900560203345781, 0.7203957017113278, 3.945915638239625]
max_q:  3.94591563824
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.7424105931934918, 0.0]
max_q:  0.742410593193
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9578183631570596]
max_q:  3.95781836316
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.48289291169255, 0.6900560203345781, 0.7203957017113278, 3.473502535746761]
max_q:  3.47350253575
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.6027219983752143, -0.23412889214797544, 0.25610197513895616]
max_q:  2.60272199838
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 3.121352844506851, -0.102]
max_q:  3.12135284451
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.812313698618932, -0.23412889214797544, 0.25610197513895616]
max_q:  2.81231369862
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.990466643826092, -0.23412889214797544, 0.25610197513895616]
max_q:  2.99046664383
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 3.141896647252178, -0.23412889214797544, 0.25610197513895616]
max_q:  3.14189664725
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 3.270612150164351, -0.23412889214797544, 0.25610197513895616]
max_q:  3.27061215016
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (7, 5), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0014793127859225, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.270612150164351, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.891498234571956, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.2531499178308234, "(['red', None, None, None, 'forward'], 'right')": -0.024235717655657907, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.5524771553847465, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7203957017113278, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.891498234571956]
max_q:  3.89149823457
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9423519899999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 3.270612150164351, -0.23412889214797544, 0.25610197513895616]
max_q:  3.27061215016
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 3.380020327639698, -0.23412889214797544, 0.25610197513895616]
max_q:  3.38002032764
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (7, 6), destination = (4, 1), deadline = 40
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0014793127859225, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.48289291169255, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.9660142293477887, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8569203375080807, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.2531499178308234, "(['red', None, None, None, 'forward'], 'right')": -0.024235717655657907, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.5524771553847465, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7203957017113278, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9423519899999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8569203375080807]
max_q:  3.85692033751
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.5524771553847465]
max_q:  3.55247715538
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.9660142293477887, -0.23412889214797544, 0.25610197513895616]
max_q:  2.96601422935
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.676209960543452, -0.23412889214797544, 0.25610197513895616]
max_q:  2.67620996054
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (3, 6), destination = (7, 3), deadline = 35
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0014793127859225, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.676209960543452, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8327158095633687, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 3.2531499178308234, "(['red', None, None, None, 'forward'], 'right')": -0.024235717655657907, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.102, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.661641380203828, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8327158095633687]
max_q:  3.83271580956
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.661641380203828]
max_q:  3.6616413802
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.676209960543452, -0.23412889214797544, 0.25610197513895616]
max_q:  2.67620996054
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.473346972380416, -0.23412889214797544, 0.25610197513895616]
max_q:  2.47334697238
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.3313428806662913, -0.23412889214797544, 0.25610197513895616]
max_q:  2.33134288067
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.7379710572014186]
max_q:  3.7379710572
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.7914018310997326]
max_q:  3.7914018311
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.832147273724932]
max_q:  3.83214727372
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 3.2531499178308234, -0.22139999999999999]
max_q:  3.25314991783
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.5816414485663475, -0.23412889214797544, 0.25610197513895616]
max_q:  2.58164144857
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (6, 1), destination = (2, 4), deadline = 35
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0014793127859225, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.5816414485663475, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8568235975317355, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.877204942481576, "(['red', None, None, None, 'forward'], 'right')": -0.024235717655657907, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.8288033728285527, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 2.877204942481576, -0.22139999999999999]
max_q:  2.87720494248
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.5816414485663475, -0.23412889214797544, 0.25610197513895616]
max_q:  2.58164144857
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.407149013996443, -0.23412889214797544, 0.25610197513895616]
max_q:  2.407149014
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0014793127859225, 2.6460766618969767, -0.23412889214797544, 0.25610197513895616]
max_q:  2.6460766619
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.6931015576859225, -0.15, 3.0456242011093395, -0.22139999999999999]
max_q:  3.04562420111
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.4522536633278835, -0.23412889214797544, 0.25610197513895616]
max_q:  2.45225366333
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.684415613828701, -0.23412889214797544, 0.25610197513895616]
max_q:  2.68441561383
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (1, 3), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.684415613828701, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.8568235975317355, "(['green', None, None, None, 'left'], 'forward')": -0.15, "(['green', None, None, None, 'left'], 'left')": 2.7319369407765377, "(['red', None, None, None, 'forward'], 'right')": -0.024235717655657907, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.8288033728285527, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.8568235975317355]
max_q:  3.85682359753
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.024235717655657907]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.255, 2.7319369407765377, -0.22139999999999999]
max_q:  2.73193694078
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.23569733971534462]
max_q:  0.235697339715
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.6931015576859225, -0.255, 2.9221463996600567, -0.22139999999999999]
max_q:  2.92214639966
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.4176504798750464]
max_q:  0.417650479875
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.255, 3.0838244397110484, -0.22139999999999999]
max_q:  3.08382443971
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.8288033728285527]
max_q:  3.82880337283
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.684415613828701, -0.23412889214797544, 0.25610197513895616]
max_q:  2.68441561383
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (2, 5), destination = (4, 1), deadline = 30
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.684415613828701, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.874097024196498, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.758677107797734, "(['red', None, None, None, 'forward'], 'right')": 0.2050029078937894, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.8544828669042692, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [1.0688735684493282, 2.684415613828701, -0.23412889214797544, 0.25610197513895616]
max_q:  2.68441561383
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.2050029078937894]
max_q:  0.205002907894
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.255, 2.758677107797734, -0.22139999999999999]
max_q:  2.7586771078
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6931015576859225, -0.255, 2.5310739754584137, -0.22139999999999999]
max_q:  2.53107397546
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.509841365864159, -0.23412889214797544, 0.25610197513895616]
max_q:  2.50984136586
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.02425247170972096]
max_q:  0.0242524717097
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.874097024196498]
max_q:  3.8740970242
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.892982470567023]
max_q:  3.89298247057
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9090350999819696]
max_q:  3.90903509998
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.3605268268613693, -0.23412889214797544, 0.25610197513895616]
max_q:  2.36052682686
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.6064478028321636, -0.23412889214797544, 0.25610197513895616]
max_q:  2.60644780283
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.22105575422601006]
max_q:  0.221055754226
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.922679834984674]
max_q:  3.92267983498
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.8544828669042692]
max_q:  3.8544828669
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.4576718251164156, -0.23412889214797544, 0.25610197513895616]
max_q:  2.45767182512
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (7, 6), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.6931015576859225, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4576718251164156, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.929845608269197, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.7514128791396515, "(['red', None, None, None, 'forward'], 'right')": 0.3733898017256694, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.886745254011725, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.7514128791396515, -0.22139999999999999]
max_q:  2.75141287914
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.3733898017256694]
max_q:  0.373389801726
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.525989015397756, -0.22139999999999999]
max_q:  2.5259890154
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.929845608269197]
max_q:  3.92984560827
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (1, 4), destination = (6, 6), deadline = 35
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4576718251164156, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.929845608269197, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.7470906630880925, "(['red', None, None, None, 'forward'], 'right')": 0.4800236349754309, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['green', None, None, None, 'forward'], 'left')": -0.23412889214797544, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.886745254011725, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.4800236349754309]
max_q:  0.480023634975
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.5546673182502639]
max_q:  0.55466731825
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.5229634641616645, -0.22139999999999999]
max_q:  2.52296346416
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.366074424913165, -0.22139999999999999]
max_q:  2.36607442491
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.606917896542647]
max_q:  0.606917896543
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.929845608269197]
max_q:  3.92984560827
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.940368767028817]
max_q:  3.94036876703
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9493134519744943]
max_q:  3.94931345197
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.4576718251164156, -0.23412889214797544, 0.25610197513895616]
max_q:  2.45767182512
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.689021051348953, -0.23412889214797544, 0.25610197513895616]
max_q:  2.68902105135
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.6434933013473152]
max_q:  0.643493301347
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.886745254011725]
max_q:  3.88674525401
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.9037334659099656]
max_q:  3.90373346591
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.947531204483905]
max_q:  3.94753120448
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.3969693061452179]
max_q:  0.396969306145
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.955401523811319]
max_q:  3.95540152381
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.962091295239621]
max_q:  3.96209129524
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.967777600953677]
max_q:  3.96777760095
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.9181734460234705]
max_q:  3.91817344602
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.9386130563380233]
max_q:  3.93861305634
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (8, 3), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.25610197513895616, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.51, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.578838731146364, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9726109608106253, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.2562520974392153, "(['red', None, None, None, 'forward'], 'right')": 0.5147043239736071, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23668457590754172, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.9386130563380233, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.5147043239736071]
max_q:  0.514704323974
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.2562520974392153, -0.22139999999999999]
max_q:  2.25625209744
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.5971188364534796]
max_q:  0.597118836453
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.1793764682074506, -0.22139999999999999]
max_q:  2.17937646821
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.51, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.452469997976333, -0.22139999999999999]
max_q:  2.45246999798
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9726109608106253]
max_q:  3.97261096081
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.578838731146364, -0.23668457590754172, 0.08290403424508795]
max_q:  2.57883873115
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 2), deadline = 20
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.08290403424508795, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.578838731146364, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9767193166890316, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.3167289985834327, "(['red', None, None, None, 'forward'], 'right')": 0.3575510109854577, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23668457590754172, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.9386130563380233, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.9386130563380233]
max_q:  3.93861305634
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.4124498178257603, 0.36329430078897523, 3.9767193166890316]
max_q:  3.97671931669
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.3167289985834327, -0.22139999999999999]
max_q:  2.31672899858
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.578838731146364, -0.23668457590754172, 0.08290403424508795]
max_q:  2.57883873115
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.569219648795918, -0.22139999999999999]
max_q:  2.5692196488
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (4, 2), destination = (8, 6), deadline = 40
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.08290403424508795, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.4282748657031004, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9767340772233175, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.569219648795918, "(['red', None, None, None, 'forward'], 'right')": 0.15391835933763903, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23668457590754172, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.22139999999999999, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.953537036939971, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.4124498178257603, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [1.0688735684493282, 2.4282748657031004, -0.23668457590754172, 0.08290403424508795]
max_q:  2.4282748657
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, 0.15391835933763903]
max_q:  0.153918359338
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.953537036939971]
max_q:  3.95353703694
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9767340772233175]
max_q:  3.97673407722
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.322880159892816, -0.23668457590754172, 0.08290403424508795]
max_q:  2.32288015989
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.226016111924971, -0.23668457590754172, 0.08290403424508795]
max_q:  2.22601611192
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.98022396563982]
max_q:  3.98022396564
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.4344795865953577, -0.23668457590754172, 0.08290403424508795]
max_q:  2.4344795866
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9596463929999997, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.3041357106167504, -0.23668457590754172, 0.08290403424508795]
max_q:  2.30413571062
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.558515354024238, -0.23668457590754172, 0.08290403424508795]
max_q:  2.55851535402
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.3909607478169663, -0.23668457590754172, 0.08290403424508795]
max_q:  2.39096074782
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (1, 5), destination = (7, 2), deadline = 45
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.08290403424508795, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.3909607478169663, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9831903707938467, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.569219648795918, "(['red', None, None, None, 'forward'], 'right')": -0.019169394563006828, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23668457590754172, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.963986037441477, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.7371485645056415, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9802267325699998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.569219648795918, -0.30498]
max_q:  2.5692196488
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.3909607478169663, -0.23668457590754172, 0.08290403424508795]
max_q:  2.39096074782
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.632316635644421, -0.23668457590754172, 0.08290403424508795]
max_q:  2.63231663564
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.4426216449510947, -0.23668457590754172, 0.08290403424508795]
max_q:  2.44262164495
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.3098351514657662, -0.23668457590754172, 0.08290403424508795]
max_q:  2.30983515147
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.563359878745901, -0.23668457590754172, 0.08290403424508795]
max_q:  2.56335987875
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.78383670147653, -0.30498]
max_q:  2.78383670148
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.7788558969340156, -0.23668457590754172, 0.08290403424508795]
max_q:  2.77885589693
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.7371485645056415, 3.963986037441477]
max_q:  3.96398603744
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9831903707938467]
max_q:  3.98319037079
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9857118151747697]
max_q:  3.98571181517
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9802267325699998, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9878550428985537]
max_q:  3.9878550429
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9722687818281104]
max_q:  3.97226878183
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9764284645538934]
max_q:  3.97642846455
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.987338847303204]
max_q:  3.9873388473
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.979964194870809]
max_q:  3.97996419487
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (2, 1), destination = (6, 6), deadline = 45
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.05286888520474323, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.51812137781635, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.545199127853811, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.988131822342864, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.548685691033571, "(['red', None, None, None, 'forward'], 'right')": -0.019169394563006828, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": 0.06610066604279241, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.7630609697531718, "(['red', None, None, None, 'right'], 'right')": 3.979964194870809, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 1.51812137781635, 0.0, -0.15]
max_q:  1.51812137782
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.545199127853811, 0.06610066604279241, 0.05286888520474323]
max_q:  2.54519912785
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.3816393894976673, 0.06610066604279241, 0.05286888520474323]
max_q:  2.3816393895
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.267147572648367, 0.06610066604279241, 0.05286888520474323]
max_q:  2.26714757265
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.979964194870809]
max_q:  3.97996419487
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 1.7630609697531718, 0.0, -0.15]
max_q:  1.76306096975
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.3953614560606753, 0.06610066604279241, 0.05286888520474323]
max_q:  2.39536145606
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.2767530192424728, 0.06610066604279241, 0.05286888520474323]
max_q:  2.27675301924
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (8, 5), destination = (2, 3), deadline = 40
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.05286888520474323, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.2767530192424728, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.988131822342864, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.548685691033571, "(['red', None, None, None, 'forward'], 'right')": -0.019169394563006828, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": 0.06610066604279241, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.982969565640188, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.982969565640188]
max_q:  3.98296956564
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.988131822342864]
max_q:  3.98813182234
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.2767530192424728, 0.06610066604279241, 0.05286888520474323]
max_q:  2.27675301924
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.535240066356102, 0.06610066604279241, 0.05286888520474323]
max_q:  2.53524006636
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.7549540564026866, 0.06610066604279241, 0.05286888520474323]
max_q:  2.7549540564
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.019169394563006828]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.749197663559598, 0.06610066604279241, 0.05286888520474323]
max_q:  2.74919766356
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9896370460349386]
max_q:  3.98963704603
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.936818014025658, 0.06610066604279241, 0.05286888520474323]
max_q:  2.93681801403
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9862984692995607]
max_q:  3.9862984693
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.990690702619391]
max_q:  3.99069070262
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (7, 3), destination = (3, 6), deadline = 35
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.05286888520474323, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.655772609817961, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.990690702619391, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.548685691033571, "(['red', None, None, None, 'forward'], 'right')": -0.019169394563006828, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9883536989046267, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.548685691033571, -0.30498]
max_q:  2.54868569103
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.8574067183452665, -0.10372953377004532, 0.05286888520474323]
max_q:  2.85740671835
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.7663828373785355, -0.30498]
max_q:  2.76638283738
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.951425411771755, -0.30498]
max_q:  2.95142541177
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.6001847028416867, -0.10372953377004532, 0.05286888520474323]
max_q:  2.60018470284
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.4201292919891806, -0.10372953377004532, 0.05286888520474323]
max_q:  2.42012929199
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9883536989046267]
max_q:  3.9883536989
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9901006440689324]
max_q:  3.99010064407
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.990690702619391]
max_q:  3.99069070262
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.2940905043924262, -0.10372953377004532, -0.11299178035667974]
max_q:  2.29409050439
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (2, 3), destination = (6, 3), deadline = 20
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.2940905043924262, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9922213239523625, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.6659977882402286, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9915855474585924, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9922213239523625]
max_q:  3.99222132395
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.2058633530746983, -0.10372953377004532, -0.11299178035667974]
max_q:  2.20586335307
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.1441043471522887, -0.10372953377004532, -0.11299178035667974]
max_q:  2.14410434715
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 2), deadline = 20
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.1441043471522887, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.993388125359508, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.6659977882402286, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9915855474585924, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.993388125359508]
max_q:  3.99338812536
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9915855474585924]
max_q:  3.99158554746
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.1441043471522887, -0.10372953377004532, -0.11299178035667974]
max_q:  2.14410434715
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.422488695079445, -0.10372953377004532, -0.11299178035667974]
max_q:  2.42248869508
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.422488695079445, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9941095198704444, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.6659977882402286, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9932263112015813, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9941095198704444]
max_q:  3.99410951987
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9932263112015813]
max_q:  3.9932263112
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.422488695079445, -0.10372953377004532, -0.11299178035667974]
max_q:  2.42248869508
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.659115390817528, -0.10372953377004532, -0.11299178035667974]
max_q:  2.65911539082
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (6, 1), destination = (4, 5), deadline = 30
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.659115390817528, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.994860610589548, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.6659977882402286, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.994487509429539, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.994487509429539]
max_q:  3.99448750943
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.995314383015108]
max_q:  3.99531438302
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.659115390817528, -0.10372953377004532, -0.11299178035667974]
max_q:  2.65911539082
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.6659977882402286, -0.30498]
max_q:  2.66599778824
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.8602480821948983, -0.10372953377004532, -0.11299178035667974]
max_q:  2.86024808219
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.0312108698656637, -0.10372953377004532, -0.11299178035667974]
max_q:  3.03121086987
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (3, 3), destination = (5, 1), deadline = 20
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.0312108698656637, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.994860610589548, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.4661984517681597, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9959491596990073, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.994860610589548]
max_q:  3.99486061059
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9956315190011154]
max_q:  3.995631519
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.0312108698656637, -0.10372953377004532, -0.11299178035667974]
max_q:  3.03121086987
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.4661984517681597, -0.30498]
max_q:  2.46619845177
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (3, 1), destination = (3, 6), deadline = 25
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.1765292393858138, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9963344372556318, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.4661984517681597, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9959491596990073, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.4661984517681597, -0.30498]
max_q:  2.46619845177
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.1765292393858138, -0.10372953377004532, -0.11299178035667974]
max_q:  3.17652923939
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.300049853477941, -0.10372953377004532, -0.11299178035667974]
max_q:  3.30004985348
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.40504237545625, -0.10372953377004532, -0.11299178035667974]
max_q:  3.40504237546
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.494286019137812, -0.10372953377004532, -0.11299178035667974]
max_q:  3.49428601914
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (1, 6), destination = (3, 1), deadline = 35
RoutePlanner.route_to(): destination = (3, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.494286019137812, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['green', None, None, None, 'right'], 'right')": 3.9963344372556318, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.6962686840029355, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9959491596990073, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9963344372556318]
max_q:  3.99633443726
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9959491596990073]
max_q:  3.9959491597
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.494286019137812, -0.10372953377004532, -0.11299178035667974]
max_q:  3.49428601914
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.996556785744156]
max_q:  3.99655678574
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.996826480033793]
max_q:  3.99682648003
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.6962686840029355, -0.30498]
max_q:  2.696268684
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.5701431162671398, -0.10372953377004532, -0.11299178035667974]
max_q:  3.57014311627
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.099100181386998, -0.10372953377004532, -0.11299178035667974]
max_q:  3.09910018139
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.16341857619410477]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.234235154178948, -0.10372953377004532, -0.11299178035667974]
max_q:  3.23423515418
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (1, 2), destination = (5, 4), deadline = 30
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.662684964471445, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 0.8978830222510934, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.234235154178948, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9973025080287234, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.8918283814024948, "(['red', None, None, None, 'forward'], 'right')": -0.16341857619410477, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9971137220259774, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.8978830222510934, -0.255, 2.8918283814024948, -0.30498]
max_q:  2.8918283814
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, 0.22074226979096884]
max_q:  0.220742269791
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 2.6242798669817464, -0.30498]
max_q:  2.62427986698
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 1.662684964471445, 0.0, -0.15]
max_q:  1.66268496447
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, 0.48965486198052033]
max_q:  0.489654861981
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 2.8306378869344844, -0.30498]
max_q:  2.83063788693
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 3.0060422038943115, -0.30498]
max_q:  3.00604220389
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (1, 1), destination = (4, 5), deadline = 35
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.8373277044270895, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.234235154178948, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9973025080287234, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 3.0060422038943115, "(['red', None, None, None, 'forward'], 'right')": 0.6778936765132064, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9971137220259774, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9971137220259774]
max_q:  3.99711372203
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.234235154178948, -0.10372953377004532, -0.11299178035667974]
max_q:  3.23423515418
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, 0.6778936765132064]
max_q:  0.677893676513
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 3.0060422038943115, -0.30498]
max_q:  3.00604220389
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9975749816224924]
max_q:  3.99757498162
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 2.965648659402244, -0.10372953377004532, -0.11299178035667974]
max_q:  2.9656486594
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.1208013604919076, -0.10372953377004532, -0.11299178035667974]
max_q:  3.12080136049
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (6, 6), destination = (8, 1), deadline = 35
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.657, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.8373277044270895, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.1208013604919076, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9973025080287234, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 3.155135873310165, "(['red', None, None, None, 'forward'], 'right')": 0.42620962503622545, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9978978633400533, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, 0.42620962503622545]
max_q:  0.426209625036
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.657, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 3.155135873310165, -0.30498]
max_q:  3.15513587331
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, 0.21227818128079162]
max_q:  0.212278181281
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.7599, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.7599, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.7599, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.7599, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 3.2818654923136403, -0.30498]
max_q:  3.28186549231
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.7599, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.7599, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.7599, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
random
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (7, 5), destination = (7, 1), deadline = 20
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.8319300000000001, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.8373277044270895, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 3.1208013604919076, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9973025080287234, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.8973058446195483, "(['red', None, None, None, 'forward'], 'right')": 0.030436454088672876, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9978978633400533, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.8118443124281656, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9973025080287234]
max_q:  3.99730250803
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, 0.030436454088672876]
max_q:  0.0304364540887
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8118443124281656, 3.9978978633400533]
max_q:  3.99789786334
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8680631996391941, 3.998481206263188]
max_q:  3.99848120626
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.12412901402462805]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.12412901402462805]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.9977964351211144]
max_q:  3.99779643512
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.8680631996391941, 3.9986063096523985]
max_q:  3.99860630965
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.9569955673805792, 0.7352249840615298, 0.36329430078897523, 3.998126969852947]
max_q:  3.99812696985
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9861587127989999, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.1208013604919076, -0.10372953377004532, -0.11299178035667974]
max_q:  3.12080136049
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0688735684493282, 3.252681156418121, -0.10372953377004532, -0.11299178035667974]
max_q:  3.25268115642
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (3, 5), destination = (1, 3), deadline = 20
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.0688735684493282, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.8319300000000001, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.8373277044270895, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.8768768094926847, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9985111833777434, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.8973058446195483, "(['red', None, None, None, 'forward'], 'right')": -0.23689030981723963, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9988153632045385, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.9074665442281167, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9903110989592998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.9074665442281167, 3.9988153632045385]
max_q:  3.9988153632
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.8768768094926847, -0.10372953377004532, -0.11299178035667974]
max_q:  2.87687680949
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.9074665442281167, 3.998993058723858]
max_q:  3.99899305872
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.613813766644879, -0.10372953377004532, -0.11299178035667974]
max_q:  2.61381376664
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (7, 3), destination = (4, 2), deadline = 20
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.1797430193384324, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.8319300000000001, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.8373277044270895, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.04495872044670231, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.613813766644879, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9985111833777434, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.8973058446195483, "(['red', None, None, None, 'forward'], 'right')": -0.23689030981723963, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.999071818613362, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.9074665442281167, "(['green', None, None, None, 'right'], None)": 0.9569955673805792, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9903110989592998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.23689030981723963]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.8319300000000001, -0.7599, -0.04495872044670231]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.269673574673067, 0.7352249840615298, 0.36329430078897523, 3.9985111833777434]
max_q:  3.99851118338
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.9074665442281167, 3.999071818613362]
max_q:  3.99907181861
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.613813766644879, -0.10372953377004532, -0.11299178035667974]
max_q:  2.61381376664
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 1.8373277044270895, 0.0, -0.15]
max_q:  1.83732770443
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.429669636651415, -0.10372953377004532, -0.11299178035667974]
max_q:  2.42966963665
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.9074665442281167, 3.9992110458213572]
max_q:  3.99921104582
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (4, 2), destination = (1, 4), deadline = 25
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.1797430193384324, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.8319300000000001, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 2.250579838596675, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 0.2531247723802406, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.3007687456559904, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9987345058710817, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.8973058446195483, "(['red', None, None, None, 'forward'], 'right')": -0.0603277817235557, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9992110458213572, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.9074665442281167, "(['green', None, None, None, 'right'], None)": 1.269673574673067, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9903110989592998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [1.269673574673067, 0.7352249840615298, 0.36329430078897523, 3.9987345058710817]
max_q:  3.99873450587
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.269673574673067, 0.7352249840615298, 0.36329430078897523, 3.998924329990419]
max_q:  3.99892432999
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.3007687456559904, -0.10372953377004532, -0.11299178035667974]
max_q:  2.30076874566
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.210538121959193, -0.10372953377004532, -0.11299178035667974]
max_q:  2.21053812196
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 2.8973058446195483, -0.30498]
max_q:  2.89730584462
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (2, 4), destination = (7, 4), deadline = 25
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.1797430193384324, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.8319300000000001, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 2.250579838596675, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 0.2531247723802406, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.478957403665314, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9990856804918558, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.8973058446195483, "(['red', None, None, None, 'forward'], 'right')": -0.0603277817235557, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.9992110458213572, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.9074665442281167, "(['green', None, None, None, 'right'], None)": 1.269673574673067, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9903110989592998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.9074665442281167, 3.9992110458213572]
max_q:  3.99921104582
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.478957403665314, -0.10372953377004532, -0.11299178035667974]
max_q:  2.47895740367
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.707113793115517, -0.10372953377004532, -0.11299178035667974]
max_q:  2.70711379312
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.9010467241481894, -0.10372953377004532, -0.11299178035667974]
max_q:  2.90104672415
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.6307327069037325, -0.10372953377004532, -0.11299178035667974]
max_q:  2.6307327069
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (2, 3), destination = (6, 5), deadline = 30
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": -0.11299178035667974, "(['green', None, 'left', None, 'forward'], 'forward')": 1.7033029009900802, "(['green', None, None, None, 'forward'], None)": 1.1797430193384324, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'left'], 'forward')": 0.16262182590374993, "(['red', None, None, None, 'left'], 'forward')": -0.8319300000000001, "(['red', 'left', None, None, 'left'], 'right')": -0.15, "(['green', None, None, 'forward', 'forward'], 'forward')": 2.250579838596675, "(['red', None, None, None, 'right'], None)": 0.870896611492497, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, 'forward', 'left'], 'right')": -0.3, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 0.2531247723802406, "(['green', None, None, None, 'right'], 'left')": 0.36329430078897523, "(['red', None, 'left', None, 'left'], 'left')": -0.3, "(['red', None, None, 'left', 'forward'], 'forward')": -0.3, "(['red', None, None, 'right', 'right'], 'forward')": -0.3, "(['red', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'left'], None)": 1.0221600956230272, "(['green', None, 'forward', None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 2.6307327069037325, "(['green', 'forward', None, None, 'right'], 'forward')": 0.43138230684594936, "(['red', None, 'forward', None, 'right'], 'right')": 1.1995670583038966, "(['green', None, None, None, 'right'], 'right')": 3.9990856804918558, "(['red', None, 'left', None, 'left'], 'right')": -0.15, "(['green', None, None, None, 'left'], 'forward')": -0.255, "(['green', None, None, None, 'left'], 'left')": 2.8973058446195483, "(['red', None, None, None, 'forward'], 'right')": -0.0603277817235557, "(['green', None, 'forward', None, 'right'], 'left')": 0.8907127955974584, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": -0.15, "(['red', None, None, 'right', 'forward'], 'forward')": -0.3, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'left'], 'left')": -0.7599, "(['red', None, None, 'left', 'left'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.10372953377004532, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.30498, "(['green', 'left', None, None, 'forward'], 'forward')": 1.8341426788272202, "(['red', None, None, None, 'right'], 'right')": 3.999310584148728, "(['red', None, None, 'forward', 'left'], 'left')": -0.3, "(['red', None, 'forward', None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.9074665442281167, "(['green', None, None, None, 'right'], None)": 1.269673574673067, "(['red', None, 'right', None, 'forward'], 'right')": 0.2524070200034793, "(['green', 'left', None, None, 'left'], 'left')": 1.2667038631282388, "(['green', None, None, 'left', 'forward'], 'left')": -0.15, "(['green', None, None, 'left', 'forward'], 'forward')": 0.6, "(['green', None, 'forward', None, 'left'], 'forward')": -0.15, "(['red', None, None, None, 'forward'], 'left')": -0.9903110989592998, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'right', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], 'right')": 1.1201429963673544, "(['green', 'right', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": 0.7352249840615298, "(['red', None, None, None, 'forward'], 'forward')": -0.8107689626343242, "(['green', 'left', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'left', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], 'forward')": 0.6900560203345781, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": 0.21231690051938856, "(['red', 'right', None, None, 'forward'], 'left')": -0.3}
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, -0.0603277817235557]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 2.8973058446195483, -0.30498]
max_q:  2.89730584462
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8107689626343242, -0.9903110989592998, 0.20238045882907088]
max_q:  0.202380458829
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.8319300000000001, -0.7599, 0.2531247723802406]
max_q:  0.25312477238
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.269673574673067, 0.7352249840615298, 0.36329430078897523, 3.9990856804918558]
max_q:  3.99908568049
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.870896611492497, 0.6900560203345781, 0.9074665442281167, 3.999310584148728]
max_q:  3.99931058415
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.6307327069037325, -0.10372953377004532, -0.11299178035667974]
max_q:  2.6307327069
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8642347653433203, -0.9903110989592998, 0.022023390004710236]
max_q:  0.0220233900047
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [1.0221600956230272, -0.255, 2.66608280709072, -0.30498]
max_q:  2.66608280709
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.1797430193384324, 2.444816403333319, -0.10372953377004532, -0.11299178035667974]
max_q:  2.44481640333
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ 
