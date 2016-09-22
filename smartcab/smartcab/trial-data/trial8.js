Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (1, 1), destination = (5, 1), deadline = 20
RoutePlanner.route_to(): destination = (5, 1)
q:  {}
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, -0.15]
max_q:  0.0
count:  2
best:  [0, 2]
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.3, -0.15]
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
q:  [0.0, -0.3, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': 'right'}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 0.6, 0.0, 0.0]
max_q:  0.6
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0)]
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (7, 1), destination = (4, 6), deadline = 40
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'right')": 0.6, "(['green', None, None, None, 'forward'], 'forward')": 4.11, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'left')": 0.6, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.09, 4.11, 0.0, 0.0]
max_q:  4.11
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.093500000000001, 0.0, 0.0]
max_q:  4.0935
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.6, 0.0]
max_q:  0.6
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.09, 3.46545, 0.0, 0.0]
max_q:  3.46545
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 3.5456325, 0.0, 0.0]
max_q:  3.5456325
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 3.6137876249999996, 0.0, 0.0]
max_q:  3.613787625
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 3.6717194812499994, 0.0, 0.0]
max_q:  3.67171948125
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0)]
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (4, 5), destination = (1, 1), deadline = 35
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'right')": 0.6, "(['green', None, None, None, 'forward'], 'forward')": 6.170203636874999, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 0.6, "(['green', None, None, None, 'left'], 'left')": 1.1099999999999999, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.51, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.6]
max_q:  0.6
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 6.170203636874999, 0.0, 0.0]
max_q:  6.17020363687
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.51, -0.15]
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
q:  [0.09, 4.919142545812498, 0.0, 0.0]
max_q:  4.91914254581
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 1.1099999999999999]
max_q:  1.11
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.781271163940623, 0.0, 0.0]
max_q:  4.78127116394
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 4.664080489349529, 0.0, 0.0]
max_q:  4.66408048935
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 3.8648563425446705, 0.0, 0.0]
max_q:  3.86485634254
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (1, 6), destination = (7, 1), deadline = 55
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'right')": 0.6, "(['green', None, None, None, 'forward'], 'forward')": 6.885127891162969, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 1.4669999999999999, "(['green', None, None, None, 'left'], 'left')": 1.1099999999999999, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  left
q:  [0.0, 0.0, 1.1099999999999999, 0.0]
max_q:  1.11
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 55, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 54, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 53, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 52, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 51, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 6.885127891162969, 0.0, 0.0]
max_q:  6.88512789116
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.452358707488523, 0.0, 0.0]
max_q:  6.45235870749
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 5.1166510952419655, 0.0, 0.0]
max_q:  5.11665109524
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.181655766669375, 0.0, 0.0]
max_q:  4.18165576667
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 4.154407401668969, 0.0, 0.0]
max_q:  4.15440740167
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 1.3769999999999998, 0.0]
max_q:  1.377
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.131246291418623, 0.0, 0.0]
max_q:  4.13124629142
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 3.4918724039930362, 0.0, 0.0]
max_q:  3.49187240399
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 3.044310682795125, 0.0, 0.0]
max_q:  3.0443106828
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 2.7310174779565877, 0.0, 0.0]
max_q:  2.73101747796
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0)]
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (7, 1), destination = (2, 4), deadline = 40
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'right')": 0.6, "(['green', None, None, None, 'forward'], 'forward')": 5.921364856263099, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 1.4669999999999999, "(['green', None, None, None, 'left'], 'left')": 1.7704499999999999, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  left
q:  [0.0, 0.0, 1.7704499999999999, 0.0]
max_q:  1.77045
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 5.921364856263099, 0.0, 0.0]
max_q:  5.92136485626
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 5.633160127823634, 0.0, 0.0]
max_q:  5.63316012782
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 5.388186108650088, 0.0, 0.0]
max_q:  5.38818610865
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 5.179958192352575, 0.0, 0.0]
max_q:  5.17995819235
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.09, 4.225970734646802, 0.0, 0.0]
max_q:  4.22597073465
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 1.4669999999999999]
max_q:  1.467
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 2.1699075]
max_q:  2.1699075
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.192075124449782, 0.0, 0.47881126866746726]
max_q:  4.19207512445
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (4, 3), destination = (7, 5), deadline = 25
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 0.12589724999999993, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'right')": 0.6, "(['green', None, None, None, 'forward'], 'forward')": 6.534452587114847, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.2089352499999997, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 0.6]
max_q:  0.6
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.534452587114847, 0.0, 0.47881126866746726]
max_q:  6.53445258711
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.15428469904762, 0.0, 0.47881126866746726]
max_q:  6.15428469905
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 1.3513402874999998]
max_q:  1.3513402875
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 1.7486392443749996]
max_q:  1.74863924437
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 2.0863433577187496]
max_q:  2.08634335772
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (1, 1), destination = (5, 4), deadline = 35
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 0.12589724999999993, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 5.391780637903125, "(['green', None, None, None, 'forward'], 'forward')": 4.9079992893333335, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.2089352499999997, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 2.2089352499999997]
max_q:  2.20893525
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 5.391780637903125]
max_q:  5.3917806379
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.09, 4.9079992893333335, 0.5861998934, 0.47881126866746726]
max_q:  4.90799928933
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 4.771799395933334, 0.5861998934, 0.47881126866746726]
max_q:  4.77179939593
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 3.9402595771533337, 0.5861998934, 0.47881126866746726]
max_q:  3.94025957715
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.12589724999999993]
max_q:  0.12589725
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.09, 3.3581817040073334, 0.5861998934, 0.47881126866746726]
max_q:  3.35818170401
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 2.9507271928051333, 0.5861998934, 0.47881126866746726]
max_q:  2.95072719281
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 3.1081181138843634, 0.5861998934, 0.47881126866746726]
max_q:  3.10811811388
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (4, 6), destination = (5, 1), deadline = 30
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 0.21402532499999988, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.817499712135007, "(['green', None, None, None, 'forward'], 'forward')": 5.775682679719054, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.9550217706854687, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 5.775682679719054, 0.5861998934, 0.47881126866746726]
max_q:  5.77568267972
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.21402532499999988]
max_q:  0.214025325
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5)]
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 9.5
Simulator.run(): Trial 8
Environment.reset(): Trial set up with start = (4, 1), destination = (8, 1), deadline = 20
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 3.03192152625, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.817499712135007, "(['green', None, None, None, 'forward'], 'forward')": 5.509330277761196, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.9550217706854687, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  forward
q:  [0.09, 5.509330277761196, 0.5861998934, 0.47881126866746726]
max_q:  5.50933027776
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 5.282930736097017, 0.5861998934, 0.47881126866746726]
max_q:  5.2829307361
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 5.090491125682464, 0.5861998934, 0.47881126866746726]
max_q:  5.09049112568
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.163343787977724, 0.5861998934, 0.47881126866746726]
max_q:  4.16334378798
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (7, 6), destination = (2, 5), deadline = 30
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 3.03192152625, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.817499712135007, "(['green', None, None, None, 'forward'], 'forward')": 6.514340651584407, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.9550217706854687, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 2.9550217706854687]
max_q:  2.95502177069
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 4.817499712135007]
max_q:  4.81749971214
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 6.514340651584407, 0.5861998934, 0.47881126866746726]
max_q:  6.51434065158
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.137189553846746, 0.5861998934, 0.47881126866746726]
max_q:  6.13718955385
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.896032687692721, 0.5861998934, 0.47881126866746726]
max_q:  4.89603268769
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 4.761627784538812, 0.5861998934, 0.47881126866746726]
max_q:  4.76162778454
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 3.03192152625]
max_q:  3.03192152625
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.09, 3.9331394491771685, 0.5861998934, 0.47881126866746726]
max_q:  3.93313944918
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (1, 5), destination = (5, 5), deadline = 20
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 2.248242318375, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.694874755314755, "(['green', None, None, None, 'forward'], 'forward')": 6.353197614424017, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.3911401963000793, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 2.248242318375]
max_q:  2.24824231837
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.09, 6.353197614424017, 0.5861998934, 0.47881126866746726]
max_q:  6.35319761442
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.0002179722604145, 0.5861998934, 0.47881126866746726]
max_q:  6.00021797226
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 5.700185276421352, 0.5861998934, 0.47881126866746726]
max_q:  5.70018527642
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (3, 3), destination = (1, 1), deadline = 20
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": 1.6996668728625, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.694874755314755, "(['green', None, None, None, 'forward'], 'forward')": 7.590129693494946, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.3911401963000793, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['red', None, None, None, 'right'], 'forward')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.3911401963000793]
max_q:  3.3911401963
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 7.590129693494946, 0.5861998934, 0.47881126866746726]
max_q:  7.59012969349
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.678029350707268]
max_q:  3.67802935071
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = 12.0
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (4, 2), destination = (2, 5), deadline = 25
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 7.051610239470703, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', None, None, None, 'left'], 'right')": 1.6996668728625, "(['green', None, None, None, 'right'], 'right')": 3.1746205454950878, "(['green', None, None, None, 'left'], 'left')": 1.8393149999999996, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.694874755314755, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.1746205454950878]
max_q:  3.1746205455
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 4.694874755314755]
max_q:  4.69487475531
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.09, 7.051610239470703, 0.5861998934, 0.47881126866746726]
max_q:  7.05161023947
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 1.8393149999999996, 0.0]
max_q:  1.839315
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 6.593868703550097, 0.5861998934, 0.47881126866746726]
max_q:  6.59386870355
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 13
Environment.reset(): Trial set up with start = (8, 2), destination = (6, 4), deadline = 20
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 8.215708092485066, "(['red', None, None, None, 'forward'], 'forward')": -0.51, "(['red', None, None, None, 'left'], 'right')": 1.6996668728625, "(['green', None, None, None, 'right'], 'right')": 3.5264655951437742, "(['green', None, None, None, 'left'], 'left')": 2.1424705309293746, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.415382167991895, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', None, None, None, 'forward'], 'left')": -0.657, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.5264655951437742]
max_q:  3.52646559514
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.51, -0.657, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.09, 8.215708092485066, 0.5861998934, 0.47881126866746726]
max_q:  8.21570809249
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 1.6996668728625]
max_q:  1.69966687286
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.730833241799426]
max_q:  3.7308332418
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.8738905944583824]
max_q:  3.87389059446
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 4.415382167991895]
max_q:  4.41538216799
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 2.1424705309293746, 0.0]
max_q:  2.14247053093
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.09, 7.583351878612305, 0.5861998934, 0.47881126866746726]
max_q:  7.58335187861
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (1, 2), destination = (2, 6), deadline = 25
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 10.045849096820458, "(['red', None, None, None, 'forward'], 'forward')": -0.657, "(['red', None, None, None, 'left'], 'right')": 1.361137390643156, "(['green', None, None, None, 'right'], 'right')": 3.974030741319652, "(['green', None, None, None, 'left'], 'left')": 2.4210999512899685, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 4.286872128792274, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.974030741319652]
max_q:  3.97403074132
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 4.286872128792274]
max_q:  4.28687212879
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = 9.5
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (7, 3), destination = (1, 5), deadline = 40
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 10.045849096820458, "(['red', None, None, None, 'forward'], 'forward')": -0.657, "(['red', None, None, None, 'left'], 'right')": 1.361137390643156, "(['green', None, None, None, 'right'], 'right')": 4.024852338242598, "(['green', None, None, None, 'left'], 'left')": 2.4210999512899685, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 3.600810490154592, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 3.600810490154592]
max_q:  3.60081049015
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 10.045849096820458, 0.5861998934, 0.47881126866746726]
max_q:  10.0458490968
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 7.63209436777432, 0.5861998934, 0.47881126866746726]
max_q:  7.63209436777
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 7.087280212608172, 0.5861998934, 0.47881126866746726]
max_q:  7.08728021261
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.624188180716946, 0.5861998934, 0.47881126866746726]
max_q:  6.62418818072
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.230559953609403, 0.5861998934, 0.47881126866746726]
max_q:  6.23055995361
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.09, 5.895975960567992, 0.5861998934, 0.47881126866746726]
max_q:  5.89597596057
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (5, 1), destination = (8, 3), deadline = 25
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 8.611579566482792, "(['red', None, None, None, 'forward'], 'forward')": -0.657, "(['red', None, None, None, 'left'], 'right')": 1.361137390643156, "(['green', None, None, None, 'right'], 'right')": 4.024852338242598, "(['green', None, None, None, 'left'], 'left')": 2.4989405744994513, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 3.660688916631403, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 1.361137390643156]
max_q:  1.36113739064
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.024852338242598]
max_q:  4.02485233824
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 3.660688916631403]
max_q:  3.66068891663
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 8.611579566482792, 0.5861998934, 0.47881126866746726]
max_q:  8.61157956648
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 7.919842631510373, 0.5861998934, 0.47881126866746726]
max_q:  7.91984263151
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 7.331866236783816, 0.5861998934, 0.47881126866746726]
max_q:  7.33186623678
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 2.4989405744994513, 0.0]
max_q:  2.4989405745
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.832086301266243, 0.5861998934, 0.47881126866746726]
max_q:  6.83208630127
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.09, 5.382460410886369, 0.5861998934, 0.47881126866746726]
max_q:  5.38246041089
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (2, 1), destination = (6, 1), deadline = 20
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.09, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 8.175091349253414, "(['red', None, None, None, 'forward'], 'forward')": -0.657, "(['red', None, None, None, 'left'], 'right')": 1.1776372596251268, "(['green', None, None, None, 'right'], 'right')": 3.9664999742645284, "(['green', None, None, None, 'left'], 'left')": 2.5259039910933847, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 3.7115855791366927, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 1.1776372596251268]
max_q:  1.17763725963
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.9664999742645284]
max_q:  3.96649997426
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.971524978124849]
max_q:  3.97152497812
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.09, 8.175091349253414, 0.5861998934, 0.47881126866746726]
max_q:  8.17509134925
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.09, 6.322563944477389, 0.5861998934, 0.47881126866746726]
max_q:  6.32256394448
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9147078674827369, 5.678052449884913, 0.5861998934, 0.47881126866746726]
max_q:  5.67805244988
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 1.0532316804015964]
max_q:  1.0532316804
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 9.5
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (5, 1), destination = (4, 5), deadline = 25
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.9147078674827369, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 5.426344582402176, "(['red', None, None, None, 'forward'], 'forward')": -0.657, "(['red', None, None, None, 'left'], 'right')": 3.9661477749451253, "(['green', None, None, None, 'right'], 'right')": 3.9757962314061217, "(['green', None, None, None, 'left'], 'left')": 2.5259039910933847, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', None, None, None, 'right'], 'right')": 3.7115855791366927, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  left
q:  [0.0, 0.0, 2.5259039910933847, 0.0]
max_q:  2.52590399109
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (8, 3), destination = (1, 3), deadline = 35
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 0.9147078674827369, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'forward'], 'forward')": 7.398441207681522, "(['red', None, None, None, 'forward'], 'forward')": -0.657, "(['red', None, None, None, 'left'], 'right')": 3.9661477749451253, "(['green', None, None, None, 'right'], 'right')": 3.9757962314061217, "(['green', None, None, None, 'left'], 'left')": 2.368132793765369, "(['red', None, None, None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.7115855791366927, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.9147078674827369, 7.398441207681522, 0.5861998934, 0.47881126866746726]
max_q:  7.39844120768
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 6.8886750265292935, 0.5861998934, 0.47881126866746726]
max_q:  6.88867502653
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.15]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 2.368132793765369, 0.0]
max_q:  2.36813279377
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, 0.7133060658824849]
max_q:  0.713306065882
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 3.9661477749451253]
max_q:  3.96614777495
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.9757962314061217]
max_q:  3.97579623141
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, 0.3493142461177394]
max_q:  0.349314246118
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 2.6129128747005637, 0.0]
max_q:  2.6129128747
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.455373772549899, 0.5861998934, 0.47881126866746726]
max_q:  6.45537377255
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, 0.1469171092000785]
max_q:  0.1469171092
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 3.018240373666672]
max_q:  3.01824037367
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.383057361984285]
max_q:  3.38305736198
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.475598757686642]
max_q:  3.47559875769
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.1407992071649415, 0.5861998934, 0.47881126866746726]
max_q:  5.14079920716
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.657, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.198559445015459, 0.5861998934, 0.47881126866746726]
max_q:  4.19855944502
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.554258944033646]
max_q:  3.55425894403
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (8, 5), destination = (3, 6), deadline = 30
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 3.538991611510821, "(['red', None, None, None, 'forward'], 'forward')": -0.7599, "(['red', None, None, None, 'left'], 'right')": 2.415504317616671, "(['green', None, None, None, 'right'], 'right')": 3.6447190976940558, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 2.881775068340395, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.7115855791366927, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 2.415504317616671]
max_q:  2.41550431762
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [1.67359676121731, 3.538991611510821, 0.5861998934, 0.47881126866746726]
max_q:  3.53899161151
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, -0.3, 0.0, 3.7115855791366927]
max_q:  3.71158557914
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (2, 2), destination = (6, 5), deadline = 35
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 3.125700008848938, "(['red', None, None, None, 'forward'], 'forward')": -0.7599, "(['red', None, None, None, 'left'], 'right')": 1.9731192825827288, "(['green', None, None, None, 'right'], 'right')": 3.6447190976940558, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 2.881775068340395, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.754847742266188, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  forward
q:  [1.67359676121731, 3.125700008848938, 0.5861998934, 0.47881126866746726]
max_q:  3.12570000885
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.2568450075215973, 0.5861998934, 0.47881126866746726]
max_q:  3.25684500752
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 2.879791505265118, 0.5861998934, 0.47881126866746726]
max_q:  2.87979150527
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.04782277947535, 0.5861998934, 0.47881126866746726]
max_q:  3.04782277948
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.6447190976940558]
max_q:  3.64471909769
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 2.733475945632745, 0.5861998934, 0.47881126866746726]
max_q:  2.73347594563
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 2.923454553787833, 0.5861998934, 0.47881126866746726]
max_q:  2.92345455379
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (4, 5), destination = (6, 1), deadline = 30
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.6464181876514825, "(['red', None, None, None, 'forward'], 'forward')": -0.7599, "(['red', None, None, None, 'left'], 'right')": 1.9731192825827288, "(['green', None, None, None, 'right'], 'right')": 4.164530529725767, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 2.881775068340395, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.754847742266188, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": -0.3}
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.5567378368705039, 0.5032271613399282, 0.0, 6.754847742266188]
max_q:  6.75484774227
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.164530529725767]
max_q:  4.16453052973
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.6464181876514825, 0.5861998934, 0.47881126866746726]
max_q:  5.64641818765
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 2.881775068340395, 0.0]
max_q:  2.88177506834
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.552492731356037, 0.5861998934, 0.47881126866746726]
max_q:  4.55249273136
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.469618821652631, 0.5861998934, 0.47881126866746726]
max_q:  4.46961882165
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (6, 2), destination = (7, 5), deadline = 20
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.399175998404736, "(['red', None, None, None, 'forward'], 'forward')": -0.7599, "(['red', None, None, None, 'left'], 'right')": 1.9731192825827288, "(['green', None, None, None, 'right'], 'right')": 4.1398509502669025, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 2.913210440225686, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.9530729990451965, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.5032271613399282}
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.399175998404736, 0.5861998934, 0.47881126866746726]
max_q:  7.3991759984
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.5032271613399282, 0.0, 5.9530729990451965]
max_q:  5.95307299905
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.779423198883315, 0.5861998934, 0.47881126866746726]
max_q:  5.77942319888
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.64559623921832, 0.5861998934, 0.47881126866746726]
max_q:  4.64559623922
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 24
Environment.reset(): Trial set up with start = (3, 3), destination = (7, 1), deadline = 30
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.548756803335571, "(['red', None, None, None, 'forward'], 'forward')": -0.7599, "(['red', None, None, None, 'left'], 'right')": 1.9731192825827288, "(['green', None, None, None, 'right'], 'right')": 4.1398509502669025, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 2.913210440225686, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.3881287418716735, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.7599, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.5032271613399282}
next_waypoint:  left
q:  [0.29596789238740934, 0.0, 0.0, 1.9731192825827288]
max_q:  1.97311928258
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.1398509502669025]
max_q:  4.13985095027
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.5032271613399282, 0.0, 5.3881287418716735]
max_q:  5.38812874187
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.884129762334899, 0.5861998934, 0.47881126866746726]
max_q:  5.88412976233
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.7599, -0.7599, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.361283753286964, 0.5861998934, 0.47881126866746726]
max_q:  5.36128375329
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 2.913210440225686, 0.0]
max_q:  2.91321044023
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (7, 6), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.157091190293919, "(['red', None, None, None, 'forward'], 'forward')": -0.8319300000000001, "(['red', None, None, None, 'left'], 'right')": 1.6681650638417629, "(['green', None, None, None, 'right'], 'right')": 4.306114976467582, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 6.076228874191832, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.017607365780308, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.8319300000000001, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.5032271613399282}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.306114976467582]
max_q:  4.30611497647
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.157091190293919, 0.5861998934, 0.47881126866746726]
max_q:  5.15709119029
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.366921588394353]
max_q:  4.36692158839
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.9835275117498306, 0.5861998934, 0.47881126866746726]
max_q:  4.98352751175
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (4, 5), destination = (1, 1), deadline = 35
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.088469258224881, "(['red', None, None, None, 'forward'], 'forward')": -0.8319300000000001, "(['red', None, None, None, 'left'], 'right')": 1.6681650638417629, "(['green', None, None, None, 'right'], 'right')": 4.409486216743093, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 6.076228874191832, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.017607365780308, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.8319300000000001, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.5032271613399282}
next_waypoint:  right
q:  [0.5567378368705039, 0.5032271613399282, 0.0, 5.017607365780308]
max_q:  5.01760736578
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 7.088469258224881, 0.5861998934, 0.47881126866746726]
max_q:  7.08846925822
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.561928480757416, 0.5861998934, 0.47881126866746726]
max_q:  5.56192848076
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.409486216743093]
max_q:  4.40948621674
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.327639208643803, 0.5861998934, 0.47881126866746726]
max_q:  5.32763920864
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.128493327347233, 0.5861998934, 0.47881126866746726]
max_q:  5.12849332735
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8319300000000001, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8319300000000001, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.9592193282451476, 0.5861998934, 0.47881126866746726]
max_q:  4.95921932825
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (2, 4), destination = (6, 4), deadline = 20
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.815336429008375, "(['red', None, None, None, 'forward'], 'forward')": -0.8319300000000001, "(['red', None, None, None, 'left'], 'right')": 1.6681650638417629, "(['green', None, None, None, 'right'], 'right')": 4.402702565003817, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 6.076228874191832, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.77374808855768, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.5032271613399282}
next_waypoint:  right
q:  [0.5567378368705039, 0.5032271613399282, 0.0, 4.77374808855768]
max_q:  4.77374808856
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.815336429008375, 0.5861998934, 0.47881126866746726]
max_q:  7.81533642901
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 7.2430359646571185, 0.5861998934, 0.47881126866746726]
max_q:  7.24303596466
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.75658056995855, 0.5861998934, 0.47881126866746726]
max_q:  6.75658056996
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (1, 4), destination = (5, 1), deadline = 35
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 8.329606398970984, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', None, None, None, 'left'], 'right')": 1.6681650638417629, "(['green', None, None, None, 'right'], 'right')": 4.402702565003817, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 6.076228874191832, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.5861998934, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.657685875274027, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.5032271613399282}
next_waypoint:  right
q:  [0.5567378368705039, 0.5032271613399282, 0.0, 4.657685875274027]
max_q:  4.65768587527
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.402702565003817]
max_q:  4.402702565
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 8.329606398970984, 0.5861998934, 0.47881126866746726]
max_q:  8.32960639897
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.5032271613399282, 0.0, 4.520785497442391]
max_q:  4.52078549744
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 7.680165439125337, 0.26033992537999995, 0.47881126866746726]
max_q:  7.68016543913
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 6.076228874191832, 0.0]
max_q:  6.07622887419
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0)]
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (8, 3), destination = (4, 2), deadline = 25
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.128140623256536, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', None, None, None, 'left'], 'right')": 1.6681650638417629, "(['green', None, None, None, 'right'], 'right')": 4.36000962011903, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 8.764794543063058, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.442667672826032, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.5032271613399282}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.36000962011903]
max_q:  4.36000962012
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.128140623256536, 0.26033992537999995, 0.47881126866746726]
max_q:  7.12814062326
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, 0.0, 0.0, 1.6681650638417629]
max_q:  1.66816506384
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.318406885007226]
max_q:  4.31840688501
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.442667672826032]
max_q:  4.44266767283
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.658919529768055, 0.26033992537999995, 0.47881126866746726]
max_q:  6.65891952977
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.261243670837638, 0.26033992537999995, 0.47881126866746726]
max_q:  5.26124367084
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.270645852256142]
max_q:  4.27064585226
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (2, 1), destination = (6, 1), deadline = 20
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 4.282870569586346, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', None, None, None, 'left'], 'right')": 2.3324347261486924, "(['green', None, None, None, 'right'], 'right')": 7.242021733901796, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 8.764794543063058, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.350464248816643, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 4.657741535920605, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  forward
q:  [0.0, 4.657741535920605, 0.0, 0.0]
max_q:  4.65774153592
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.282870569586346, 0.26033992537999995, 0.47881126866746726]
max_q:  4.28287056959
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.5980093987104422, 0.26033992537999995, 0.47881126866746726]
max_q:  3.59800939871
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.1186065790973094, 0.26033992537999995, 0.47881126866746726]
max_q:  3.1186065791
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (6, 5), destination = (1, 3), deadline = 35
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.783024605368116, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', None, None, None, 'left'], 'right')": 2.3324347261486924, "(['green', None, None, None, 'right'], 'right')": 7.242021733901796, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 8.764794543063058, "(['red', None, None, None, 'forward'], 'right')": -0.025120457179933275, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.350464248816643, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.8823509999999999, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.350464248816643]
max_q:  4.35046424882
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 7.242021733901796]
max_q:  7.2420217339
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.783024605368116, 0.26033992537999995, 0.47881126866746726]
max_q:  5.78302460537
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.648117223757681, 0.26033992537999995, 0.47881126866746726]
max_q:  4.64811722376
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.550899640194029, 0.26033992537999995, 0.47881126866746726]
max_q:  4.55089964019
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.78562974813582, 0.26033992537999995, 0.47881126866746726]
max_q:  3.78562974814
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.731628234256919]
max_q:  4.73162823426
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.8823509999999999, -0.025120457179933275]
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
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.869013681310313]
max_q:  4.86901368131
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 6.379159448869795]
max_q:  6.37915944887
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.965183494247688]
max_q:  4.96518349425
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.249940823695074, 0.26033992537999995, 0.47881126866746726]
max_q:  3.2499408237
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9176456999999998, 0.3199068035283078]
max_q:  0.319906803528
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.947156816725283]
max_q:  4.94715681673
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.80508329421649]
max_q:  4.80508329422
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 5.81018913834601]
max_q:  5.81018913835
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.3624497001408127, 0.26033992537999995, 0.47881126866746726]
max_q:  3.36244970014
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (3, 1), destination = (8, 5), deadline = 45
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 6.458082245119691, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', None, None, None, 'left'], 'right')": 2.3324347261486924, "(['green', None, None, None, 'right'], 'right')": 5.392395398347722, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 8.764794543063058, "(['red', None, None, None, 'forward'], 'right')": 0.12192078299906162, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.835086676703444, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9176456999999998, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 5.392395398347722]
max_q:  5.39239539835
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9176456999999998, 0.12192078299906162]
max_q:  0.121920782999
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, 0.0, 0.0, 2.3324347261486924]
max_q:  2.33243472615
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.835086676703444]
max_q:  4.8350866767
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 5.0999397803489215]
max_q:  5.09993978035
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.458082245119691, 0.26033992537999995, 0.47881126866746726]
max_q:  6.45808224512
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9176456999999998, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9176456999999998, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9176456999999998, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9176456999999998, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.1206575715837825, 0.26033992537999995, 0.47881126866746726]
max_q:  5.12065757158
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.9525589358462145, 0.26033992537999995, 0.47881126866746726]
max_q:  4.95255893585
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.06679125509235, 0.26033992537999995, 0.47881126866746726]
max_q:  4.06679125509
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.0, 4.749551640744749]
max_q:  4.74955164074
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.446753878564645, 0.26033992537999995, 0.47881126866746726]
max_q:  3.44675387856
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9423519899999997, -0.04636733445079762]
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
q:  [1.67359676121731, 3.529740796779948, 0.26033992537999995, 0.47881126866746726]
max_q:  3.52974079678
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9596463929999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.0708185577459637, 0.26033992537999995, 0.47881126866746726]
max_q:  3.07081855775
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0)]
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (7, 6), destination = (7, 1), deadline = 25
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.749572990422174, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', None, None, None, 'left'], 'right')": 1.8325695172263885, "(['green', None, None, None, 'right'], 'right')": 4.934948813296583, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 8.764794543063058, "(['red', None, None, None, 'forward'], 'right')": -0.04636733445079762, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.664928470515812, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9596463929999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9596463929999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9596463929999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9596463929999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.749572990422174, 0.26033992537999995, 0.47881126866746726]
max_q:  5.74957299042
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9596463929999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.6247010932955215, 0.26033992537999995, 0.47881126866746726]
max_q:  4.6247010933
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9596463929999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.837290765306865, 0.26033992537999995, 0.47881126866746726]
max_q:  3.83729076531
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.8616971505108344, 0.26033992537999995, 0.47881126866746726]
max_q:  3.86169715051
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 34
Environment.reset(): Trial set up with start = (5, 3), destination = (1, 5), deadline = 30
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 6.88244257793421, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.8325695172263885, "(['green', None, None, None, 'right'], 'right')": 4.934948813296583, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 8.764794543063058, "(['red', None, None, None, 'forward'], 'right')": -0.04636733445079762, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.664928470515812, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9596463929999997, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.934948813296583]
max_q:  4.9349488133
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.88244257793421, 0.26033992537999995, 0.47881126866746726]
max_q:  6.88244257793
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.4177098045539465, 0.26033992537999995, 0.47881126866746726]
max_q:  5.41770980455
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.205053333870854, 0.26033992537999995, 0.47881126866746726]
max_q:  5.20505333387
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.024295333790226, 0.26033992537999995, 0.47881126866746726]
max_q:  5.02429533379
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 3), deadline = 20
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.870651033721692, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.8325695172263885, "(['green', None, None, None, 'right'], 'right')": 4.794706491302096, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 8.764794543063058, "(['red', None, None, None, 'forward'], 'right')": -0.04636733445079762, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.664928470515812, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9717524750999997, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  forward
q:  [1.67359676121731, 7.870651033721692, 0.26033992537999995, 0.47881126866746726]
max_q:  7.87065103372
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 7.290053378663438, 0.26033992537999995, 0.47881126866746726]
max_q:  7.29005337866
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.7030373650644055, 0.26033992537999995, 0.47881126866746726]
max_q:  5.70303736506
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 8.764794543063058, 0.0]
max_q:  8.76479454306
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (8, 6), destination = (6, 2), deadline = 30
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.447581760304745, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.8325695172263885, "(['green', None, None, None, 'right'], 'right')": 4.794706491302096, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 10.010241607728098, "(['red', None, None, None, 'forward'], 'right')": -0.04636733445079762, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.664928470515812, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9717524750999997, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.447581760304745, 0.26033992537999995, 0.47881126866746726]
max_q:  5.4475817603
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.230444496259032, 0.26033992537999995, 0.47881126866746726]
max_q:  5.23044449626
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.351311147381322, 0.26033992537999995, 0.47881126866746726]
max_q:  4.35131114738
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.6459178031669253, 0.26033992537999995, 0.47881126866746726]
max_q:  3.64591780317
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (7, 2), destination = (1, 6), deadline = 50
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 6.18932109288432, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.8325695172263885, "(['green', None, None, None, 'right'], 'right')": 4.794706491302096, "(['green', None, None, None, 'left'], 'forward')": 0.20521991906480536, "(['green', None, None, None, 'left'], 'left')": 10.010241607728098, "(['red', None, None, None, 'forward'], 'right')": -0.04636733445079762, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.664928470515812, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9717524750999997, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.664928470515812]
max_q:  4.66492847052
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.794706491302096]
max_q:  4.7947064913
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 6.18932109288432, 0.26033992537999995, 0.47881126866746726]
max_q:  6.18932109288
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.932524765019023, 0.26033992537999995, 0.47881126866746726]
max_q:  4.93252476502
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.052767335513316, 0.26033992537999995, 0.47881126866746726]
max_q:  4.05276733551
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.044852235186318, 0.26033992537999995, 0.47881126866746726]
max_q:  4.04485223519
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9717524750999997, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.04636733445079762]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 10.010241607728098, 0.0]
max_q:  10.0102416077
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, 0.0, 0.0, 1.8325695172263885]
max_q:  1.83256951723
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.643992929369924]
max_q:  4.64399292937
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.584655903056382]
max_q:  4.58465590306
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.490033147542078]
max_q:  4.49003314754
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.20521991906480536, 7.882054552993626, 0.0]
max_q:  7.88205455299
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.18245713411555833]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [1.67359676121731, 4.03812439990837, 0.26033992537999995, 0.47881126866746726]
max_q:  4.03812439991
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.426687079935859, 0.26033992537999995, 0.47881126866746726]
max_q:  3.42668707994
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.51268401794548, 0.26033992537999995, 0.47881126866746726]
max_q:  3.51268401795
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.058878812561836, 0.26033992537999995, 0.47881126866746726]
max_q:  3.05887881256
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 2.741215168793285, 0.26033992537999995, 0.47881126866746726]
max_q:  2.74121516879
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 2.5188506181552994, 0.26033992537999995, 0.47881126866746726]
max_q:  2.51885061816
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 2.7410230254320043, 0.26033992537999995, 0.47881126866746726]
max_q:  2.74102302543
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  forward
q:  [1.67359676121731, 2.9298695716172034, 0.26033992537999995, 0.47881126866746726]
max_q:  2.92986957162
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.0903891358746227, 0.26033992537999995, 0.47881126866746726]
max_q:  3.09038913587
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9802267325699998, -0.27771999388089086]
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
q:  [1.67359676121731, 3.226830765493429, 0.26033992537999995, 0.47881126866746726]
max_q:  3.22683076549
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 2.8587815358454005, 0.26033992537999995, 0.47881126866746726]
max_q:  2.85878153585
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.0299643054685905, 0.26033992537999995, 0.47881126866746726]
max_q:  3.02996430547
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (3, 1), destination = (2, 6), deadline = 30
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 3.175469659648302, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.3151068450075156, "(['green', None, None, None, 'right'], 'right')": 4.538493436017404, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 6.464704213846665, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.423797218682065, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 6.464704213846665, 0.0]
max_q:  6.46470421385
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.2991492107010565, 0.26033992537999995, 0.47881126866746726]
max_q:  3.2991492107
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.404276829095898, 0.26033992537999995, 0.47881126866746726]
max_q:  3.4042768291
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 2.9829937803671287, 0.26033992537999995, 0.47881126866746726]
max_q:  2.98299378037
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (8, 5), destination = (7, 1), deadline = 25
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 6.1355447133120595, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.3151068450075156, "(['green', None, None, None, 'right'], 'right')": 4.538493436017404, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 5.780748794504214, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.423797218682065, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.423797218682065]
max_q:  4.42379721868
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.360227635879755]
max_q:  4.36022763588
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.306193490497792]
max_q:  4.3061934905
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.1355447133120595, 0.26033992537999995, 0.47881126866746726]
max_q:  6.13554471331
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.894881299318441, 0.26033992537999995, 0.47881126866746726]
max_q:  4.89488129932
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.026416909522909, 0.26033992537999995, 0.47881126866746726]
max_q:  4.02641690952
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.022454373094472, 0.26033992537999995, 0.47881126866746726]
max_q:  4.02245437309
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (5, 1), destination = (8, 4), deadline = 30
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.019086217130301, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.3151068450075156, "(['green', None, None, None, 'right'], 'right')": 4.538493436017404, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 5.780748794504214, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26033992537999995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.2602644669231235, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  forward
q:  [0.0, 0.0, -0.15, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.019086217130301, 0.26033992537999995, 0.47881126866746726]
max_q:  7.01908621713
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.2602644669231235]
max_q:  4.26026446692
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 5.780748794504214, 0.0]
max_q:  5.7807487945
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.51336035199121, 0.03223794776599995, 0.47881126866746726]
max_q:  5.51336035199
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (7, 2), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.459352246393847, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.3151068450075156, "(['green', None, None, None, 'right'], 'right')": 4.538493436017404, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 4.993790182904077, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.03223794776599995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.262959142248797, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.262959142248797]
max_q:  4.26295914225
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.459352246393847, 0.03223794776599995, 0.47881126866746726]
max_q:  7.45935224639
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.94044940943477, 0.03223794776599995, 0.47881126866746726]
max_q:  6.94044940943
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, 0.0, 0.0, 2.3151068450075156]
max_q:  2.31510684501
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.538493436017404]
max_q:  4.53849343602
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.457719420614794]
max_q:  4.45771942061
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.389061507522574]
max_q:  4.38906150752
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 4.993790182904077, 0.0]
max_q:  4.9937901829
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (4, 4), destination = (8, 4), deadline = 20
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.47881126866746726, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.458314586604338, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.817840818256388, "(['green', None, None, None, 'right'], 'right')": 4.330702281394188, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 7.368329250771312, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.03223794776599995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.223515270911477, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.223515270911477]
max_q:  4.22351527091
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 7.368329250771312, 0.0]
max_q:  7.36832925077
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.458314586604338, 0.03223794776599995, 1.0039150760578779]
max_q:  5.4583145866
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.239567398613687, 0.03223794776599995, 1.0039150760578779]
max_q:  5.23956739861
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, 0.0, 0.0, 1.817840818256388]
max_q:  1.81784081826
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.206066031847162]
max_q:  4.20606603185
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.175156127070087]
max_q:  4.17515612707
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.330702281394188]
max_q:  4.33070228139
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
random
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0)]
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (7, 5), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.0039150760578779, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.053632288821634, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.8823509999999999, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.39516469551793, "(['green', None, None, None, 'right'], 'right')": 4.257323791649659, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.404155904208931, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.03223794776599995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.172214631158189, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.5567378368705039, 0.7186591638618545, 0.39973927057737174, 4.172214631158189]
max_q:  4.17221463116
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.053632288821634, 0.03223794776599995, 1.0039150760578779]
max_q:  5.05363228882
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.895587445498388, 0.03223794776599995, 1.0039150760578779]
max_q:  4.8955874455
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.257323791649659]
max_q:  4.25732379165
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.8823509999999999, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.76124932867363, 0.03223794776599995, 1.0039150760578779]
max_q:  4.76124932867
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (4, 1), destination = (8, 5), deadline = 40
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.0039150760578779, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 7.647061929372585, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9176456999999998, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.39516469551793, "(['green', None, None, None, 'right'], 'right')": 4.203998975738489, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.404155904208931, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.03223794776599995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.159148810558181, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.7186591638618545}
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 1.39516469551793]
max_q:  1.39516469552
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.203998975738489]
max_q:  4.20399897574
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.166671604600669]
max_q:  4.1666716046
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.647061929372585, 0.03223794776599995, 1.0039150760578779]
max_q:  7.64706192937
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.952943350560809, 0.03223794776599995, 1.0039150760578779]
max_q:  5.95294335056
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.660001847976687, 0.03223794776599995, 1.0039150760578779]
max_q:  5.66000184798
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.411001570780184, 0.03223794776599995, 1.0039150760578779]
max_q:  5.41100157078
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 8.404155904208931, 0.0]
max_q:  8.40415590421
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (4, 3), destination = (8, 2), deadline = 25
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.0039150760578779, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 5.199351335163156, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9176456999999998, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.0872386724938905, "(['green', None, None, None, 'right'], 'right')": 4.140542444804195, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 9.795994933820335, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.03223794776599995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.159148810558181, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.8269337362870253}
next_waypoint:  right
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 4.159148810558181]
max_q:  4.15914881056
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.140542444804195]
max_q:  4.1405424448
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.199351335163156, 0.03223794776599995, 1.0039150760578779]
max_q:  5.19935133516
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.239545934614209, 0.03223794776599995, 1.0039150760578779]
max_q:  4.23954593461
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.567682154229946, 0.03223794776599995, 1.0039150760578779]
max_q:  3.56768215423
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (2, 1), destination = (3, 5), deadline = 25
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.0039150760578779, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 6.097377507960962, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9176456999999998, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.0872386724938905, "(['green', None, None, None, 'right'], 'right')": 4.119461078083566, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 9.795994933820335, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.03223794776599995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.132485534111355, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.8269337362870253}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': 'left', 'right': 'right', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 9.795994933820335, 0.0]
max_q:  9.79599493382
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.119461078083566]
max_q:  4.11946107808
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 6.097377507960962, 0.03223794776599995, 1.0039150760578779]
max_q:  6.09737750796
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.782770881766817, 0.03223794776599995, 1.0039150760578779]
max_q:  5.78277088177
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
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
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 4.132485534111355]
max_q:  4.13248553411
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 3.4927398738779485]
max_q:  3.49273987388
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.103495584775199]
max_q:  4.10349558478
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9176456999999998, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 3.6604422494308437]
max_q:  3.66044224943
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 4.087971247058919]
max_q:  4.08797124706
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 3.1623095746015903]
max_q:  3.1623095746
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0)]
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (2, 5), destination = (8, 4), deadline = 35
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 4.647939617236771, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9423519899999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.0872386724938905, "(['green', None, None, None, 'right'], 'right')": 3.935926309131481, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.926595693747284, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": 0.03223794776599995, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 2.9871273777516887, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.860419075144424, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.8269337362870253}
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 3.935926309131481]
max_q:  3.93592630913
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 2.9871273777516887]
max_q:  2.98712737775
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 3.139058271088935]
max_q:  3.13905827109
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 3.860419075144424, 0.0, 0.0]
max_q:  3.86041907514
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 0.8269337362870253, 0.39973927057737174, 3.3058590257907325]
max_q:  3.30585902579
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.647939617236771, -0.23920340559466, 0.5527405532405144]
max_q:  4.64793961724
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.8535577320657395, -0.23920340559466, 0.5527405532405144]
max_q:  3.85355773207
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 8.926595693747284, 0.0]
max_q:  8.92659569375
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
random
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (1, 1), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 3.875524072255878, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9423519899999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.650056424807816, "(['green', None, None, None, 'right'], 'right')": 3.8032175230547898, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.18760633968519, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.5574687488037045, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 0.8269337362870253}
next_waypoint:  forward
q:  [1.67359676121731, 3.875524072255878, -0.23920340559466, 0.5527405532405144]
max_q:  3.87552407226
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.894195461417496, -0.23920340559466, 0.5527405532405144]
max_q:  3.89419546142
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.3259368229922472, -0.23920340559466, 0.5527405532405144]
max_q:  3.32593682299
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 6.5574687488037045]
max_q:  6.5574687488
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.42704629954341, -0.23920340559466, 0.5527405532405144]
max_q:  3.42704629954
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (4, 2), destination = (7, 6), deadline = 35
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['green', None, None, None, 'forward'], 'forward')": 6.512989354611898, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9423519899999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.650056424807816, "(['green', None, None, None, 'right'], 'right')": 3.8032175230547898, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.18760633968519, "(['red', None, None, None, 'forward'], 'right')": -0.27771999388089086, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.7607107526208114, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 5.7607107526208114]
max_q:  5.76071075262
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.8032175230547898]
max_q:  3.80321752305
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.512989354611898, -0.23920340559466, 0.5527405532405144]
max_q:  6.51298935461
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.136040951420113, -0.23920340559466, 0.5527405532405144]
max_q:  6.13604095142
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 5.202980155292787]
max_q:  5.20298015529
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.670944366094966, -0.23920340559466, 0.5527405532405144]
max_q:  4.67094436609
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.27771999388089086]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.869661056266476, -0.23920340559466, 0.5527405532405144]
max_q:  3.86966105627
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.262252266138353]
max_q:  3.26225226614
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 5.022533131998868]
max_q:  5.022533132
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.636956556096677]
max_q:  3.6369565561
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.308762739386533, -0.23920340559466, 0.5527405532405144]
max_q:  3.30876273939
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.412448328478553, -0.23920340559466, 0.5527405532405144]
max_q:  3.41244832848
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (1, 4), destination = (3, 6), deadline = 20
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 5.988713829934987, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9423519899999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.650056424807816, "(['green', None, None, None, 'right'], 'right')": 3.691413072682175, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.18760633968519, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.661316675813709, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 4.661316675813709]
max_q:  4.66131667581
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 4.416633633971923]
max_q:  4.41663363397
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.7920996809544905, -0.23920340559466, 0.5527405532405144]
max_q:  4.79209968095
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (3, 3), destination = (8, 2), deadline = 30
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.954469776668143, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9423519899999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.650056424807816, "(['green', None, None, None, 'right'], 'right')": 3.691413072682175, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.18760633968519, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.2453555046826725, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.691413072682175]
max_q:  3.69141307268
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 4.2453555046826725]
max_q:  4.24535550468
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 6.954469776668143, -0.23920340559466, 0.5527405532405144]
max_q:  6.95446977667
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 6.511299310167921, -0.23920340559466, 0.5527405532405144]
max_q:  6.51129931017
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.1579095171175435, -0.23920340559466, 0.5527405532405144]
max_q:  5.15790951712
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.984223089549912, -0.23920340559466, 0.5527405532405144]
max_q:  4.98422308955
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (1, 3), destination = (4, 1), deadline = 25
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.836589626117425, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9423519899999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.650056424807816, "(['green', None, None, None, 'right'], 'right')": 3.820792476579923, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 8.18760633968519, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.208552178980272, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, None, None, 'right'], 'left')": 0.39973927057737174, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.820792476579923]
max_q:  3.82079247658
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 2.650056424807816]
max_q:  2.65005642481
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.39973927057737174, 4.208552178980272]
max_q:  4.20855217898
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 4.0371697353270815]
max_q:  4.03716973533
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.836589626117425, -0.23920340559466, 0.5527405532405144]
max_q:  7.83658962612
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 7.261101182199811, -0.23920340559466, 0.5527405532405144]
max_q:  7.2611011822
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 2.102547961086643]
max_q:  2.10254796109
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.274554733605946]
max_q:  3.27455473361
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 4.031594275028019]
max_q:  4.03159427503
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.496927454778365]
max_q:  3.49692745478
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 8.18760633968519, 0.0]
max_q:  8.18760633969
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9423519899999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.9596463929999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 6.771936004869838, -0.23920340559466, 0.5527405532405144]
max_q:  6.77193600487
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (6, 2), destination = (6, 6), deadline = 20
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 8.340355203408887, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9596463929999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.549924523713429, "(['green', None, None, None, 'right'], 'right')": 3.6518774884109275, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 6.713813116336647, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.026855133773816, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 4.026855133773816]
max_q:  4.02685513377
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.6518774884109275]
max_q:  3.65187748841
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 3.96658021690331]
max_q:  3.9665802169
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 6.713813116336647, 0.0]
max_q:  6.71381311634
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9596463929999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 8.340355203408887, -0.23920340559466, 0.5527405532405144]
max_q:  8.34035520341
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9596463929999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.689301922897553, -0.23920340559466, 0.5527405532405144]
max_q:  7.6893019229
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (3, 5), destination = (1, 2), deadline = 25
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 8.982511346028286, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.549924523713429, "(['green', None, None, None, 'right'], 'right')": 3.7513012744231453, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 5.6821578599926665, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9393013429957886, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [0.0, 0.0, 0.7141066128931217, 3.7513012744231453]
max_q:  3.75130127442
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 8.982511346028286, -0.23920340559466, 0.5527405532405144]
max_q:  8.98251134603
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 3.9393013429957886]
max_q:  3.939301343
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 8.235134644124043, -0.23920340559466, 0.5527405532405144]
max_q:  8.23513464412
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 7.599864447505436, -0.23920340559466, 0.5527405532405144]
max_q:  7.59986444751
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (6, 3), destination = (1, 4), deadline = 30
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 3.390121573523189, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 10.059884780379619, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.549924523713429, "(['green', None, None, None, 'right'], 'right')": 3.7886060832596735, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 5.6821578599926665, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9258018525860026, "(['green', None, 'forward', None, 'forward'], 'forward')": 4.297190942585516, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  forward
q:  [1.67359676121731, 10.059884780379619, -0.23920340559466, 0.5527405532405144]
max_q:  10.0598847804
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.641919346265732, -0.23920340559466, 0.5527405532405144]
max_q:  7.64191934627
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 7.095631444325871, -0.23920340559466, 0.5527405532405144]
max_q:  7.09563144433
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 5.566942011028109, -0.23920340559466, 0.5527405532405144]
max_q:  5.56694201103
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.331900709373892, -0.23920340559466, 0.5527405532405144]
max_q:  5.33190070937
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 0.7141066128931217, 3.7886060832596735]
max_q:  3.78860608326
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 0.7141066128931217, 3.8203151707707224]
max_q:  3.82031517077
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 0.7141066128931217, 3.863090897427406]
max_q:  3.86309089743
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 2.549924523713429]
max_q:  2.54992452371
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 3.9258018525860026]
max_q:  3.92580185259
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 3.936931574698102]
max_q:  3.9369315747
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 3.390121573523189, 0.0]
max_q:  3.39012157352
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 0.7141066128931217, 3.883627262813295]
max_q:  3.88362726281
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 0.7141066128931217, 3.9010831733913007]
max_q:  3.90108317339
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 4.297190942585516, 0.0, 0.0]
max_q:  4.29719094259
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0)]
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (3, 4), destination = (7, 5), deadline = 25
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 4.332330496561724, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.0174358451564145, "(['green', None, None, None, 'right'], 'right')": 3.5042688969044864, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 5.6821578599926665, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.8643703383171495, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 5.6821578599926665, 0.7023236789988999]
max_q:  5.68215785999
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 4.332330496561724, -0.23920340559466, 0.5527405532405144]
max_q:  4.33233049656
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.6326313475932066, -0.23920340559466, 0.5527405532405144]
max_q:  3.63263134759
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.67359676121731, 3.1428419433152444, -0.23920340559466, 0.5527405532405144]
max_q:  3.14284194332
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 3.8643703383171495]
max_q:  3.86437033832
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (4, 4), destination = (6, 1), deadline = 25
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 2.799989360320671, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.0174358451564145, "(['green', None, None, None, 'right'], 'right')": 3.5042688969044864, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 4.880125878768329, "(['red', None, None, None, 'forward'], 'right')": -0.3444039957166236, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.830699571357677, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, -0.3444039957166236]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 4.880125878768329, 0.7023236789988999]
max_q:  4.88012587877
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.028915607046464148]
max_q:  0.0289156070465
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 2.0174358451564145]
max_q:  2.01743584516
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 9.5
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (7, 2), destination = (2, 4), deadline = 35
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 0.5567378368705039, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 2.799989360320671, "(['green', None, None, None, 'right'], 'left')": 0.7141066128931217, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 4.851061264776195, "(['green', None, None, None, 'right'], 'right')": 3.5042688969044864, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.9257078211113665, "(['red', None, None, None, 'forward'], 'right')": 0.29023932898062554, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.830699571357677, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 6.830699571357677]
max_q:  6.83069957136
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5567378368705039, 1.2624739277214734, 0.5853929497032224, 5.9071300344860465]
max_q:  5.90713003449
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.5042688969044864]
max_q:  3.5042688969
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.29023932898062554]
max_q:  0.290239328981
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 4.851061264776195]
max_q:  4.85106126478
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 5.260631358675905]
max_q:  5.26063135868
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 5.071536654874519]
max_q:  5.07153665487
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 2.799989360320671, -0.23920340559466, 0.5527405532405144]
max_q:  2.79998936032
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.09670342963353169]
max_q:  0.0967034296335
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.9257078211113665, 0.7023236789988999]
max_q:  3.92570782111
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.30386711074389705]
max_q:  0.303867110744
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.9231853335544624, 0.7023236789988999]
max_q:  3.92318533355
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.4488816875211528]
max_q:  0.448881687521
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 3.8345990585100416]
max_q:  3.83459905851
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.686869942767485]
max_q:  4.68686994277
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.583839451352362]
max_q:  4.58383945135
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 2.5744980666694994, -0.23920340559466, 0.5527405532405144]
max_q:  2.57449806667
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.23154943439297987]
max_q:  0.231549434393
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.9214195922646296, 0.7023236789988999]
max_q:  3.92141959226
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.933206653424935, 0.7023236789988999]
max_q:  3.93320665342
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.43033310757544707]
max_q:  0.430333107575
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.578628562368813]
max_q:  3.57862856237
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.7568622787034656]
max_q:  3.7568622787
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.345481900301975]
max_q:  4.3454819003
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 2.7883233566690744, -0.23920340559466, 0.5527405532405144]
max_q:  2.78832335667
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.569481678803174]
max_q:  0.569481678803
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.8816258801377224]
max_q:  3.88162588014
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.22408121223204]
max_q:  4.22408121223
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.8993819981170637]
max_q:  3.89938199812
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 2.637248601488828, -0.23920340559466, 0.5527405532405144]
max_q:  2.63724860149
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0)]
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (1, 5), destination = (7, 6), deadline = 35
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 5.841661311265503, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 3.1094091997335354, "(['green', None, None, None, 'right'], 'right')": 3.914474698399504, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.8196560373574844, "(['red', None, None, None, 'forward'], 'right')": 0.644224465385546, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.141764148279988, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.141764148279988]
max_q:  4.14176414828
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.914474698399504]
max_q:  3.9144746984
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.644224465385546]
max_q:  0.644224465386
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.8196560373574844, 0.7023236789988999]
max_q:  3.81965603736
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 1.1772063224597076]
max_q:  1.17720632246
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 3.1094091997335354]
max_q:  3.10940919973
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.0864061085559165]
max_q:  4.08640610856
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.073445192272529]
max_q:  4.07344519227
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.841661311265503, -0.23920340559466, 0.5527405532405144]
max_q:  5.84166131127
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.8506253740907515]
max_q:  0.850625374091
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 2.4929978197735045]
max_q:  2.49299781977
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.0624284134316495]
max_q:  4.06242841343
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.9530932051630403]
max_q:  3.95309320516
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.565412114575677, -0.23920340559466, 0.5527405532405144]
max_q:  5.56541211458
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.330600297389325, -0.23920340559466, 0.5527405532405144]
max_q:  5.33060029739
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.417374943369098, -0.23920340559466, 0.5527405532405144]
max_q:  4.41737494337
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.960129224388584]
max_q:  3.96012922439
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (5, 6), destination = (2, 5), deadline = 20
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 4.354768701863733, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.9690481468074787, "(['green', None, None, None, 'right'], 'right')": 6.9661098407302955, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.8467076317538615, "(['red', None, None, None, 'forward'], 'right')": 0.5730315679771386, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.053064151416902, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734}
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.053064151416902]
max_q:  4.05306415142
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 6.9661098407302955]
max_q:  6.96610984073
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.354768701863733, -0.23920340559466, 0.5527405532405144]
max_q:  4.35476870186
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 4.301553396584173, -0.23920340559466, 0.5527405532405144]
max_q:  4.30155339658
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 1.9690481468074787]
max_q:  1.96904814681
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.5730315679771386]
max_q:  0.573031567977
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 6.521193364620751]
max_q:  6.52119336462
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 6.143014359927637]
max_q:  6.14301435993
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.8467076317538615, 0.7023236789988999]
max_q:  3.84670763175
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.6970421128054918, -0.23920340559466, 0.5527405532405144]
max_q:  3.69704211281
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 5.821562205938491]
max_q:  5.82156220594
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 5.5483278750477165]
max_q:  5.54832787505
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 5.316078693790558]
max_q:  5.31607869379
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.187929478963844, -0.23920340559466, 0.5527405532405144]
max_q:  3.18792947896
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 3.309740057119267, -0.23920340559466, 0.5527405532405144]
max_q:  3.30974005712
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0)]
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (3, 3), destination = (7, 3), deadline = 20
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.5527405532405144, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.413279048551377, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.2283337027652352, "(['green', None, None, None, 'right'], 'right')": 4.321255085653391, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.8697014869907824, "(['red', None, None, None, 'forward'], 'right')": 0.8056784145048208, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.482061382101375, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.20521991906480536, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.2624739277214734, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 6.413279048551377, -0.23920340559466, 0.5527405532405144]
max_q:  6.41327904855
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.8056784145048208]
max_q:  0.805678414505
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 1.2283337027652352]
max_q:  1.22833370277
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.482061382101375]
max_q:  4.4820613821
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 4.273066822805382]
max_q:  4.27306682281
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 0.5348266523290977]
max_q:  0.534826652329
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 1.290288814984282]
max_q:  1.29028881498
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.37840299089177]
max_q:  4.37840299089
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.3216425422580045]
max_q:  4.32164254226
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 1.0059007210546214]
max_q:  1.00590072105
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.889246263942165, 0.7023236789988999]
max_q:  3.88924626394
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 0.9467454927366397]
max_q:  0.946745492737
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.2624739277214734, 0.5853929497032224, 4.273396160919304]
max_q:  4.27339616092
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [1.6142625365289027, 1.217660749287711, 0.5853929497032224, 4.2261933325511984]
max_q:  4.22619333255
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 4.2321067993845745]
max_q:  4.23210679938
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, -0.3, 0.20521991906480536]
max_q:  0.205219919065
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.217660749287711, 0.5853929497032224, 4.192264332668518]
max_q:  4.19226433267
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (7, 6), destination = (3, 5), deadline = 25
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.67359676121731, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 5.210147096161687, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 0.6547336688261436, "(['green', None, None, None, 'right'], 'right')": 3.562474759569202, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.464484208670011, "(['red', None, None, None, 'forward'], 'right')": 1.3356525691624879, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.068956246803343, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.217660749287711, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.6142625365289027, 1.217660749287711, 0.5853929497032224, 4.068956246803343]
max_q:  4.0689562468
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.67359676121731, 5.210147096161687, -0.23920340559466, 1.018440451692613]
max_q:  5.21014709616
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, -0.029148237824276876]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, -0.029148237824276876]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'forward', 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, -0.029148237824276876]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.925811487612732, 5.028625031737434, -0.23920340559466, 1.018440451692613]
max_q:  5.02862503174
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.320385407590576, -0.23920340559466, 1.018440451692613]
max_q:  4.32038540759
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 3.562474759569202]
max_q:  3.56247475957
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (3, 5), destination = (6, 1), deadline = 35
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 4.27232759645199, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 0.6547336688261436, "(['green', None, None, None, 'right'], 'right')": 6.628103545633822, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.464484208670011, "(['red', None, None, None, 'forward'], 'right')": 1.3356525691624879, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.98264058669772, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.217660749287711, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.9717524750999997, -0.9861587127989999, 1.3356525691624879]
max_q:  1.33565256916
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 0.6547336688261436]
max_q:  0.654733668826
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 6.628103545633822]
max_q:  6.62810354563
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.217660749287711, 0.5853929497032224, 3.98264058669772]
max_q:  3.9826405867
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.27232759645199, -0.23920340559466, 1.018440451692613]
max_q:  4.27232759645
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 0.9853046837881146]
max_q:  0.985304683788
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 0.7768159176372398]
max_q:  0.776815917637
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.217660749287711, 0.5853929497032224, 4.322931612756716]
max_q:  4.32293161276
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.2744918708432085]
max_q:  4.27449187084
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 1.078307676279139]
max_q:  1.07830767628
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.123348996392929, 0.7023236789988999]
max_q:  3.12334899639
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 0.8622734918050072]
max_q:  0.862273491805
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 9.5
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (6, 5), destination = (4, 2), deadline = 25
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.1477957025682172, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 3.5906293175163926, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 3.582932468034256, "(['green', None, None, None, 'right'], 'right')": 6.233888013788748, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.915685321245801, "(['red', None, None, None, 'forward'], 'right')": 1.1434097710228561, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.527227511658558, "(['green', None, 'forward', None, 'forward'], 'forward')": 7.25788323429412, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.527227511658558]
max_q:  4.52722751166
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 1.1434097710228561]
max_q:  1.14340977102
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 3.582932468034256]
max_q:  3.58293246803
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.448143384909774]
max_q:  4.44814338491
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 6.233888013788748]
max_q:  6.23388801379
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 7.25788323429412, 0.0, 0.0]
max_q:  7.25788323429
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.648783571505154]
max_q:  4.64878357151
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.5906293175163926, -0.23920340559466, 1.018440451692613]
max_q:  3.59062931752
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 0.8218983053694277]
max_q:  0.821898305369
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.738969221811673]
max_q:  4.73896922181
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.8020991770262365]
max_q:  4.80209917703
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 5.898804811720436]
max_q:  5.89880481172
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 6.219112661633343, 0.0, 0.0]
max_q:  6.21911266163
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (8, 2), destination = (3, 5), deadline = 40
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.1477957025682172, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 3.6520349198889335, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 2.8954925978291173, "(['green', None, None, None, 'right'], 'right')": 5.456106890055769, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.915685321245801, "(['red', None, None, None, 'forward'], 'right')": 1.0252514580365912, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.846290145676431, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 5.456106890055769]
max_q:  5.45610689006
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 1.0252514580365912]
max_q:  1.02525145804
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 2.8954925978291173]
max_q:  2.89549259783
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 5.146218344890502]
max_q:  5.14621834489
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.846290145676431]
max_q:  4.84629014568
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.6520349198889335, -0.23920340559466, 1.018440451692613]
max_q:  3.65203491989
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.704229681905593, -0.23920340559466, 1.018440451692613]
max_q:  3.70422968191
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.748595229619754, -0.23920340559466, 1.018440451692613]
max_q:  3.74859522962
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 0.7214637393311025]
max_q:  0.721463739331
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.915685321245801, 0.7023236789988999]
max_q:  2.91568532125
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 1.9538438046772617]
max_q:  1.95384380468
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [1.925811487612732, 3.3322362216334933, -0.23920340559466, 1.018440451692613]
max_q:  3.33223622163
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 66
Environment.reset(): Trial set up with start = (1, 3), destination = (7, 2), deadline = 35
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.1477957025682172, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.060794362759964, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.6138376220048922, "(['green', None, None, None, 'right'], 'right')": 4.9292963632748155, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.640979724872061, "(['red', None, None, None, 'forward'], 'right')": 0.8548600507767957, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.7023236789988999, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.731797556464723, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.5853929497032224, "(['green', None, None, None, 'right'], None)": 0.9660945512312167, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 3.999484295186612, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.731797556464723]
max_q:  4.73179755646
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.622027922995015]
max_q:  4.622027923
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 0.8548600507767957]
max_q:  0.854860050777
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.640979724872061, 0.7023236789988999]
max_q:  2.64097972487
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 1.3575211899577515]
max_q:  1.35752118996
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 1.7093839873844205]
max_q:  1.70938398738
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 4.9292963632748155]
max_q:  4.92929636327
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.528723734545762]
max_q:  4.52872373455
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 3.999484295186612, 0.0, 0.0]
max_q:  3.99948429519
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 6.060794362759964, -0.23920340559466, 1.018440451692613]
max_q:  6.06079436276
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 1.955687945583089]
max_q:  1.95568794558
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29596789238740934, -0.0907252956723105, 0.0, 1.6138376220048922]
max_q:  1.613837622
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 4.729816014474235]
max_q:  4.72981601447
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 4.582808062584939]
max_q:  4.58280806258
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 5.1359092457694375, -0.23920340559466, 1.018440451692613]
max_q:  5.13590924577
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 4.495386853197198]
max_q:  4.4953868532
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.9660945512312167, 0.0, 1.2359441341980921, 4.421078825217618]
max_q:  4.42107882522
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.5853929497032224, 4.479579016353169]
max_q:  4.47957901635
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.965522858904022, -0.23920340559466, 1.018440451692613]
max_q:  4.9655228589
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.1477957025682172, -0.9717524750999997, -0.9861587127989999, 1.5123347537456255]
max_q:  1.51233475375
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.357917001434975]
max_q:  4.35791700143
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 4.389392861662464]
max_q:  4.38939286166
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.3042294512197286]
max_q:  4.30422945122
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.1354845406837817]
max_q:  1.13548454068
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.2585950335367695]
max_q:  4.25859503354
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.219805778506254]
max_q:  4.21980577851
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.20159545808138]
max_q:  4.20159545808
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.302716214294659, -0.23920340559466, 1.018440451692613]
max_q:  4.30271621429
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0)]
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (7, 3), destination = (5, 5), deadline = 20
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.25730878215046, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.383300553010101, "(['green', None, None, None, 'right'], 'right')": 4.171356139369173, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.690761450711176, "(['red', None, None, None, 'forward'], 'right')": 0.8151618595812145, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.29596789238740934, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.318209420846684, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.7681839940416253, "(['green', None, None, None, 'right'], None)": 1.3299537360770979, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.690761450711176, 0.5837022185999637]
max_q:  2.69076145071
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 0.8151618595812145]
max_q:  0.815161859581
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.691028098449338, 0.5837022185999637]
max_q:  2.69102809845
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.41467260762270164, -0.0907252956723105, 0.0, 1.383300553010101]
max_q:  1.38330055301
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.171356139369173]
max_q:  4.17135613937
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 4.318209420846684]
max_q:  4.31820942085
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.145652718463797]
max_q:  4.14565271846
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.6912147518660516, 0.5837022185999637]
max_q:  2.69121475187
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.509209619029419]
max_q:  1.50920961903
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.3299537360770979, 0.0, 1.2359441341980921, 4.123804810694227]
max_q:  4.12380481069
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 4.244594502362248]
max_q:  4.24459450236
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 7.25730878215046, -0.23920340559466, 1.018440451692613]
max_q:  7.25730878215
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 5.979372605101796, -0.23920340559466, 1.018440451692613]
max_q:  5.9793726051
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (8, 4), destination = (5, 5), deadline = 20
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 8.08481728116773, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.0258054700585857, "(['green', None, None, None, 'right'], 'right')": 4.123352542840296, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.887532539086144, "(['red', None, None, None, 'forward'], 'right')": 1.9950430506431625, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.5712161516535734, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.7681839940416253, "(['green', None, None, None, 'right'], None)": 1.3299537360770979, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [1.925811487612732, 8.08481728116773, -0.23920340559466, 1.018440451692613]
max_q:  8.08481728117
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.9950430506431625]
max_q:  1.99504305064
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.41467260762270164, -0.0907252956723105, 0.0, 1.0258054700585857]
max_q:  1.02580547006
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.5712161516535734]
max_q:  3.57121615165
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.6355337289055374]
max_q:  3.63553372891
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 6.558628554413884, -0.23920340559466, 1.018440451692613]
max_q:  6.55862855441
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.5457865930466879]
max_q:  1.54578659305
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.887532539086144, 0.5837022185999637]
max_q:  2.88753253909
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.054402658223222, 0.5837022185999637]
max_q:  3.05440265822
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.7454868116896898]
max_q:  1.74548681169
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.76337649165992]
max_q:  3.76337649166
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.8528664255879885]
max_q:  3.85286642559
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.3299537360770979, 0.46850288142604435, 1.2359441341980921, 4.123352542840296]
max_q:  4.12335254284
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.3336637899362362]
max_q:  1.33366378994
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.3299537360770979, 0.46850288142604435, 1.2359441341980921, 4.038897637722842]
max_q:  4.03889763772
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.915509379337636]
max_q:  3.91550937934
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.5970008495123735]
max_q:  1.59700084951
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.9430397785323406]
max_q:  3.94303977853
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.962311057968633]
max_q:  3.96231105797
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (2, 1), destination = (5, 3), deadline = 25
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 5.422907977046722, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.0011937099039314, "(['green', None, None, None, 'right'], 'right')": 4.014554753306634, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.888260917241845, "(['red', None, None, None, 'forward'], 'right')": 1.2074507220855173, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.975800953574038, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.7681839940416253, "(['green', None, None, None, 'right'], None)": 1.3299537360770979, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.888260917241845, 0.5837022185999637]
max_q:  2.88826091724
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 5.422907977046722, -0.23920340559466, 1.018440451692613]
max_q:  5.42290797705
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 5.2094717804897135, -0.23920340559466, 1.018440451692613]
max_q:  5.20947178049
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.975800953574038]
max_q:  3.97580095357
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.2074507220855173]
max_q:  1.20745072209
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.979430810537932]
max_q:  3.97943081054
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.9877847803725475]
max_q:  3.98778478037
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.3299537360770979, 0.46850288142604435, 1.2359441341980921, 4.014554753306634]
max_q:  4.01455475331
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.427747854655626, -0.23920340559466, 1.018440451692613]
max_q:  4.42774785466
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (3, 3), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.363585676457282, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.0011937099039314, "(['green', None, None, None, 'right'], 'right')": 4.012371540310639, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.055021779655568, "(['red', None, None, None, 'forward'], 'right')": 0.8763331137726896, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9936325592567785, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.7681839940416253, "(['green', None, None, None, 'right'], None)": 1.3299537360770979, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.012371540310639]
max_q:  4.01237154031
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.010515809264042]
max_q:  4.01051580926
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 0.8763331137726896]
max_q:  0.876333113773
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.9936325592567785]
max_q:  3.99363255926
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.7681839940416253, 3.9965036840357464]
max_q:  3.99650368404
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = left, reward = -1.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.006405950373346]
max_q:  4.00640595037
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.567971031109475]
max_q:  1.56797103111
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.0040383849759]
max_q:  4.00403838498
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.003432627229515]
max_q:  4.00343262723
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.997028131430384]
max_q:  3.99702813143
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 7.363585676457282, -0.23920340559466, 1.018440451692613]
max_q:  7.36358567646
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 2.0521175732452246]
max_q:  2.05211757325
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9983573519730315]
max_q:  3.99835735197
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9992878063528847]
max_q:  3.99928780635
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.002917733145087]
max_q:  4.00291773315
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.9861587127989999, 1.594299937258441]
max_q:  1.59429993726
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.002480073173324]
max_q:  4.00248007317
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.001726919884144]
max_q:  4.00172691988
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 4), deadline = 30
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.06232760950688, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.0011937099039314, "(['green', None, None, None, 'right'], 'right')": 3.4012088439189005, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.055021779655568, "(['red', None, None, None, 'forward'], 'right')": 1.8753590975069407, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9999391244187823, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.9861587127989999, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.4012088439189005]
max_q:  3.40120884392
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 6.06232760950688, -0.23920340559466, 1.018440451692613]
max_q:  6.06232760951
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.925811487612732, 5.1249331912808564, -0.23920340559466, 1.018440451692613]
max_q:  5.12493319128
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.055021779655568, 0.5837022185999637]
max_q:  3.05502177966
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.8753590975069407]
max_q:  1.87535909751
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.491027517331065]
max_q:  3.49102751733
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.5673733897314053]
max_q:  3.56737338973
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9999391244187823]
max_q:  3.99993912442
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.9061803501431676]
max_q:  1.90618035014
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9999482557559647]
max_q:  3.99994825576
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9999560173925697]
max_q:  3.99995601739
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.697152241474801]
max_q:  3.69715224147
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.956193212588728, -0.23920340559466, 1.018440451692613]
max_q:  4.95619321259
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.812764230700418, -0.23920340559466, 1.018440451692613]
max_q:  4.8127642307
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (3, 2), destination = (3, 6), deadline = 20
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.018440451692613, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.968934961490293, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.0011937099039314, "(['green', None, None, None, 'right'], 'right')": 3.7425794052535806, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.1967685127072327, "(['red', None, None, None, 'forward'], 'right')": 1.4702532976216922, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9545420483960187, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9545420483960187]
max_q:  3.9545420484
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 6.968934961490293, -0.23920340559466, 1.018440451692613]
max_q:  6.96893496149
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, -0.029148237824276876]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.3, 0.0, -0.029148237824276876]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.925811487612732, 5.478254473043204, -0.23920340559466, 1.018440451692613]
max_q:  5.47825447304
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.7425794052535806]
max_q:  3.74257940525
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9295663446652496]
max_q:  3.92956634467
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.4702532976216922]
max_q:  1.47025329762
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.940131392965462]
max_q:  3.94013139297
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.8574880837089243]
max_q:  3.85748808371
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9367151876321618]
max_q:  3.93671518763
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 5.256516302086723, -0.23920340559466, 1.3513857614978375]
max_q:  5.25651630209
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0)]
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (4, 6), destination = (7, 5), deadline = 20
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.279561411460706, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.0011937099039314, "(['green', None, None, None, 'right'], 'right')": 3.8788648711525857, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.1967685127072327, "(['red', None, None, None, 'forward'], 'right')": 1.0997153029784383, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9375303620154005, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.0997153029784383]
max_q:  1.09971530298
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.1967685127072327, 0.5837022185999637]
max_q:  3.19676851271
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 7.279561411460706, -0.23920340559466, 1.3513857614978375]
max_q:  7.27956141146
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9375303620154005]
max_q:  3.93753036202
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.7117349238040127]
max_q:  1.7117349238
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9381009840836683]
max_q:  3.93810098408
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.8788648711525857]
max_q:  3.87886487115
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.905980472736528]
max_q:  3.90598047274
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.8971522330534285]
max_q:  1.89715223305
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.9249613938452876]
max_q:  3.92496139385
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.9385004195314552]
max_q:  3.93850041953
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.777361391504089]
max_q:  3.7773613915
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 5.659585242604131, -0.23920340559466, 1.3513857614978375]
max_q:  5.6595852426
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 5.410647456213511, -0.23920340559466, 1.3513857614978375]
max_q:  5.41064745621
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.15]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  left
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.9382480386214196]
max_q:  3.93824803862
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 3.8348901798460755]
max_q:  3.83489017985
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0)]
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (7, 6), destination = (8, 3), deadline = 20
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 4.69149487177866, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 1.0011937099039314, "(['green', None, None, None, 'right'], 'right')": 3.932007154011905, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.3172532358011475, "(['red', None, None, None, 'forward'], 'right')": 2.0269443495280193, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.859656652869164, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [1.925811487612732, 4.69149487177866, -0.23920340559466, 1.3513857614978375]
max_q:  4.69149487178
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.3172532358011475, 0.5837022185999637]
max_q:  3.3172532358
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 2.0269443495280193]
max_q:  2.02694434953
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [1.925811487612732, 4.587770641011861, -0.23920340559466, 1.3513857614978375]
max_q:  4.58777064101
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.9570266408213928]
max_q:  1.95702664082
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.41467260762270164, -0.0907252956723105, 0.0, 1.0011937099039314]
max_q:  1.0011937099
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 6.859656652869164]
max_q:  6.85965665287
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.932007154011905]
max_q:  3.93200715401
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.499605044860082, -0.23920340559466, 1.3513857614978375]
max_q:  4.49960504486
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.894859405303987]
max_q:  1.8948594053
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.41467260762270164, -0.0907252956723105, 0.0, 0.7010146534183417]
max_q:  0.701014653418
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 5.9915607301102]
max_q:  5.99156073011
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.251139117324863]
max_q:  4.25113911732
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.033952442197655, -0.23920340559466, 1.3513857614978375]
max_q:  4.0339524422
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 4.028859575868006, -0.23920340559466, 1.3513857614978375]
max_q:  4.02885957587
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.460630494508389]
max_q:  1.46063049451
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.41467260762270164, -0.0907252956723105, 0.0, 0.4458624554055904]
max_q:  0.445862455406
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.213468249726134]
max_q:  4.21346824973
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 5.692826620593669]
max_q:  5.69282662059
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.6392962772838624, -0.23920340559466, 1.3513857614978375]
max_q:  3.63929627728
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.4183357877484517]
max_q:  1.41833578775
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (8, 5), destination = (6, 1), deadline = 30
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 3.360257762260971, "(['green', None, None, None, 'right'], 'left')": 1.2359441341980921, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 0.6229421670158721, "(['green', None, None, None, 'right'], 'right')": 4.1814480122672135, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.072256321546393, "(['red', None, None, None, 'forward'], 'right')": 1.3468737157630617, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.41467260762270164, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.21219583625565, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.3468737157630617]
max_q:  1.34687371576
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.41467260762270164, -0.0907252956723105, 0.0, 0.6229421670158721]
max_q:  0.622942167016
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.9948426583986023]
max_q:  0.994842658399
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.072256321546393, 0.5837022185999637]
max_q:  3.07225632155
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.360257762260971, -0.23920340559466, 1.3513857614978375]
max_q:  3.36025776226
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 1.0504285252181673]
max_q:  1.05042852522
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.41467260762270164, -0.0907252956723105, 0.0, 0.37950084196349126]
max_q:  0.414672607623
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.3524717164792963, -0.0907252956723105, 0.0, 0.37950084196349126]
max_q:  0.379500841963
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.1814480122672135]
max_q:  4.18144801227
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.109744712365405, -0.23920340559466, 1.3513857614978375]
max_q:  3.10974471237
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.7428642464354422]
max_q:  0.742864246435
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.81278031622588, 0.5837022185999637]
max_q:  2.81278031623
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.8882509356210995, -0.23920340559466, 1.3513857614978375]
max_q:  2.88825093562
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.9908632687919976, 0.5837022185999637]
max_q:  2.99086326879
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.48143460947012595]
max_q:  0.48143460947
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.5270136085870494]
max_q:  3.52701360859
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.5979615672989915]
max_q:  3.5979615673
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 5.21219583625565]
max_q:  5.21219583626
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 3.0550132952779343, -0.23920340559466, 1.3513857614978375]
max_q:  3.05501329528
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.6452562209207783]
max_q:  0.645256220921
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.833597456261101]
max_q:  4.83359745626
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.708557837821935]
max_q:  4.70855783782
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 3.900402472547641]
max_q:  3.90040247255
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.3984677877826615]
max_q:  0.398467787783
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 1.2359441341980921, 4.002439359386973]
max_q:  4.00243935939
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.4810508573575]
max_q:  4.48105085736
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.0736090474388735]
max_q:  4.07360904744
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.347776957266081]
max_q:  4.34777695727
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Environment.step(): Primary agent ran out of time! Trial aborted.
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (2, 5), destination = (8, 2), deadline = 45
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 3.196761300986244, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], 'right')": 0.5375676368083259, "(['green', None, None, None, 'right'], 'right')": 4.1036928767971235, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.6936042881543982, "(['red', None, None, None, 'forward'], 'right')": 0.6084416465957996, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.3524717164792963, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 1.1290520412880574, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.295610413676169, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [1.925811487612732, 3.196761300986244, -0.23920340559466, 1.3513857614978375]
max_q:  3.19676130099
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.6084416465957996]
max_q:  0.608441646596
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.3524717164792963, -0.0907252956723105, 0.0, 0.5375676368083259]
max_q:  0.537567636808
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.295610413676169]
max_q:  4.29561041368
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.1036928767971235]
max_q:  4.1036928768
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.9289991576797405, -0.23920340559466, 1.3513857614978375]
max_q:  2.92899915768
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.7053757203167823, -0.23920340559466, 1.3513857614978375]
max_q:  2.70537572032
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.36717539960642964]
max_q:  0.367175399606
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.3524717164792963, -0.0907252956723105, 0.0, 0.30693249128707695]
max_q:  0.352471716479
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.29960095900740186, -0.0907252956723105, 0.0, 0.30693249128707695]
max_q:  0.306932491287
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.088138945277555]
max_q:  4.08813894528
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.074918103485921]
max_q:  4.07491810349
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.4893486768489075]
max_q:  0.489348676849
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.6936042881543982, 0.5837022185999637]
max_q:  2.69360428815
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.548839314162712, -0.23920340559466, 1.3513857614978375]
max_q:  2.54883931416
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.4252544708489463, -0.23920340559466, 1.3513857614978375]
max_q:  2.42525447085
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.251268851624744]
max_q:  4.25126885162
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0)]
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (8, 4), destination = (1, 6), deadline = 45
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.27377967290031924, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 2.33874508052931, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9717524750999997, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.2540406432231597, "(['red', None, None, None, 'left'], 'right')": 0.46889338712411355, "(['green', None, None, None, 'right'], 'right')": 4.063680387963033, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.5558570097766955, "(['red', None, None, None, 'forward'], 'right')": 0.19254407379423524, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.29960095900740186, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 1.1290520412880574, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 7.185440254331775, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.063680387963033]
max_q:  4.06368038796
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27377967290031924, -0.9717524750999997, -0.7090072343332587, 0.19254407379423524]
max_q:  0.2737796729
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.23271272196527135, -0.9717524750999997, -0.7090072343332587, 0.19254407379423524]
max_q:  0.232712721965
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.19780581367048064, -0.9717524750999997, -0.7090072343332587, 0.19254407379423524]
max_q:  0.19780581367
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.925811487612732, 2.33874508052931, -0.23920340559466, 1.3513857614978375]
max_q:  2.33874508053
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.2660031674396524, -0.23920340559466, 1.3513857614978375]
max_q:  2.26600316744
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.16813494161990852, -0.9717524750999997, -0.7090072343332587, 0.19254407379423524]
max_q:  0.192544073794
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29960095900740186, -0.0907252956723105, 0.0, 0.46889338712411355]
max_q:  0.468893387124
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.522392309723889]
max_q:  4.52239230972
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 7.185440254331775]
max_q:  7.18544025433
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.215083828276892, -0.23920340559466, 1.3513857614978375]
max_q:  2.21508382828
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.16813494161990852, -0.9717524750999997, -0.7090072343332587, 0.013662462725099939]
max_q:  0.16813494162
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.925811487612732, 2.449412082881289, -0.23920340559466, 1.3513857614978375]
max_q:  2.44941208288
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.14291470037692225, -0.9717524750999997, -0.7090072343332587, 0.013662462725099939]
max_q:  0.142914700377
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.925811487612732, 2.3360256630734404, -0.23920340559466, 1.3513857614978375]
max_q:  2.33602566307
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.5558570097766955, 0.5837022185999637]
max_q:  2.55585700978
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.1214774953203839, -0.9620051082719422, -0.7090072343332587, 0.013662462725099939]
max_q:  0.12147749532
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.1032558710223263, -0.9620051082719422, -0.7090072343332587, 0.013662462725099939]
max_q:  0.103255871022
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.925811487612732, 2.253439588449466, -0.23920340559466, 1.3513857614978375]
max_q:  2.25343958845
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0)]
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (1, 3), destination = (7, 6), deadline = 45
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 1.925811487612732, "(['red', None, None, None, 'forward'], None)": 0.08776749036897735, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 5.177407711914626, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9620051082719422, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.2540406432231597, "(['red', None, None, None, 'left'], 'right')": 0.5616039224533838, "(['green', None, None, None, 'right'], 'right')": 4.843490654956488, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.473340495211694, "(['red', None, None, None, 'forward'], 'right')": 0.013662462725099939, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.29960095900740186, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 1.1290520412880574, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.707624216182008, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.843490654956488]
max_q:  4.84349065496
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.08776749036897735, -0.9620051082719422, -0.7090072343332587, 0.013662462725099939]
max_q:  0.087767490369
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07460236681363075, -0.9620051082719422, -0.7090072343332587, 0.013662462725099939]
max_q:  0.0746023668136
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.06341201179158613, -0.9620051082719422, -0.7090072343332587, 0.013662462725099939]
max_q:  0.0634120117916
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.05390021002284821, -0.9620051082719422, -0.7090072343332587, 0.013662462725099939]
max_q:  0.0539002100228
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.925811487612732, 5.177407711914626, -0.23920340559466, 1.3513857614978375]
max_q:  5.17740771191
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.098187524598027, 5.000796555127431, -0.23920340559466, 1.3513857614978375]
max_q:  5.00079655513
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.6, 0.0, 0.0]
max_q:  0.6
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.29960095900740186, -0.0907252956723105, 0.0, 0.5616039224533838]
max_q:  0.561603922453
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.473340495211694, 0.5837022185999637]
max_q:  2.47334049521
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.100557588589202, -0.23920340559466, 1.3513857614978375]
max_q:  4.10055758859
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.085473950300821, -0.23920340559466, 1.3513857614978375]
max_q:  4.0854739503
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 6.707624216182008]
max_q:  6.70762421618
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0)]
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (4, 1), destination = (7, 2), deadline = 20
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.045815178519420977, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 4.072652857755697, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9620051082719422, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.2540406432231597, "(['red', None, None, None, 'left'], 'right')": 0.2431227457173686, "(['green', None, None, None, 'right'], 'right')": 4.996587090896843, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.70233942092994, "(['red', None, None, None, 'forward'], 'right')": 0.47464736219595016, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.29960095900740186, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 1.1290520412880574, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 9.301480583754707, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.996587090896843]
max_q:  4.9965870909
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 0.47464736219595016]
max_q:  0.474647362196
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.29960095900740186, -0.0907252956723105, -0.2550598561488897, 0.2431227457173686]
max_q:  0.299600959007
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.2546608151562916, -0.0907252956723105, -0.2550598561488897, 0.2431227457173686]
max_q:  0.254660815156
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.70233942092994, 0.5837022185999637]
max_q:  2.70233942093
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 0.2534502578665576]
max_q:  0.253450257867
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.8969885077904487, 0.5837022185999637]
max_q:  2.89698850779
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.6643603673109193, 0.5837022185999637]
max_q:  2.66436036731
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (7, 3), destination = (2, 5), deadline = 35
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.045815178519420977, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 4.072652857755697, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9620051082719422, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.2540406432231597, "(['red', None, None, None, 'left'], 'right')": 0.2431227457173686, "(['green', None, None, None, 'right'], 'right')": 5.4928330511909955, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 5.864706312214281, "(['red', None, None, None, 'forward'], 'right')": 0.6383131091699449, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 1.1290520412880574, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 9.301480583754707, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 0.6383131091699449]
max_q:  0.63831310917
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 5.864706312214281, 0.5837022185999637]
max_q:  5.86470631221
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 0.907717105082316]
max_q:  0.907717105082
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 0.2431227457173686]
max_q:  0.243122745717
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 5.4928330511909955]
max_q:  5.49283305119
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 5.840205223396903]
max_q:  5.8402052234
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.072652857755697, -0.23920340559466, 1.3513857614978375]
max_q:  4.07265285776
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 0.6215595393199685]
max_q:  0.62155953932
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 0.7314503465632982]
max_q:  0.731450346563
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 5.564174439887367]
max_q:  5.56417443989
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 5.329548273904262]
max_q:  5.3295482739
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.061754929092342, -0.23920340559466, 1.3513857614978375]
max_q:  4.06175492909
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 0.8943549168878293]
max_q:  0.894354916888
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 4.741762830407602, 0.5837022185999637]
max_q:  4.74176283041
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [2.098187524598027, 3.5773816878978137, -0.23920340559466, 1.3513857614978375]
max_q:  3.5773816879
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (1, 3), destination = (6, 1), deadline = 35
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.045815178519420977, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.256065535779392, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.9620051082719422, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.2540406432231597, "(['red', None, None, None, 'left'], 'right')": 0.8747877170821317, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 5.725905879296189, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 4.6304984058464616, "(['red', None, None, None, 'forward'], 'right')": 1.0126556950061525, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 1.1290520412880574, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 9.301480583754707, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 9.301480583754707]
max_q:  9.30148058375
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.256065535779392, -0.23920340559466, 1.3513857614978375]
max_q:  6.25606553578
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.917655705412482, -0.23920340559466, 1.3513857614978375]
max_q:  5.91765570541
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 1.0126556950061525]
max_q:  1.01265569501
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 0.8747877170821317]
max_q:  0.874787717082
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 1.1290520412880574]
max_q:  1.12905204129
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 5.725905879296189]
max_q:  5.7259058793
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.742358993788737, -0.23920340559466, 1.3513857614978375]
max_q:  4.74235899379
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.631005144720426, -0.23920340559466, 1.3513857614978375]
max_q:  4.63100514472
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 0.46235140195749214]
max_q:  0.462351401957
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 7.969922290522723]
max_q:  7.96992229052
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 7.374433946944314]
max_q:  7.37443394694
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 6.582156762471284]
max_q:  6.58215676247
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 4.6304984058464616, 0.5837022185999637]
max_q:  4.63049840585
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.045815178519420977, -0.9620051082719422, -0.7090072343332587, 1.2702128355726172]
max_q:  1.27021283557
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 6.0275627333401625]
max_q:  6.02756273334
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 5.639346912948377]
max_q:  5.63934691295
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 5.46701999740176]
max_q:  5.4670199974
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 5.246966997791496]
max_q:  5.24696699779
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.272876898454047]
max_q:  4.27287689845
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.032235526640191, -0.23920340559466, 1.3513857614978375]
max_q:  4.03223552664
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (2, 1), destination = (8, 2), deadline = 35
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.045815178519420977, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.0274001976441625, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.2540406432231597, "(['red', None, None, None, 'left'], 'right')": 0.8682207422472137, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.23194536368594, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.971581995429605, "(['red', None, None, None, 'forward'], 'right')": 0.9923866668123315, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.5837022185999637, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.195464412814548, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.971581995429605, 0.5837022185999637]
max_q:  3.97158199543
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.0274001976441625, -0.23920340559466, 1.3513857614978375]
max_q:  7.02740019764
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.098187524598027, 5.668038138372763, -0.23920340559466, 1.3513857614978375]
max_q:  5.66803813837
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.7090072343332587, 0.9923866668123315]
max_q:  0.992386666812
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.975844696115164, 0.5837022185999637]
max_q:  3.97584469612
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.7090072343332587, 0.6935286667904818]
max_q:  0.69352866679
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 5.195464412814548]
max_q:  5.19546441281
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.5328233463005643, 0.46850288142604435, 0.7151608939386644, 4.23194536368594]
max_q:  4.23194536369
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.716484696882784, -0.23920340559466, 1.3513857614978375]
max_q:  4.71648469688
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.609011992350366, -0.23920340559466, 1.3513857614978375]
max_q:  4.60901199235
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (2, 1), destination = (7, 1), deadline = 25
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.517660193497811, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.2540406432231597, "(['red', None, None, None, 'left'], 'right')": 0.8682207422472137, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.197153559133048, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.9794679916978892, "(['red', None, None, None, 'forward'], 'right')": 1.0429427712857549, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.871616893523075, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.5328233463005643, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.7090072343332587, 1.0429427712857549]
max_q:  1.04294277129
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.9794679916978892, 0.38882466435705665]
max_q:  3.9794679917
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.517660193497811, -0.23920340559466, 1.3513857614978375]
max_q:  7.5176601935
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.990011164473138, -0.23920340559466, 1.3513857614978375]
max_q:  6.99001116447
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.541509489802166, -0.23920340559466, 1.3513857614978375]
max_q:  6.5415094898
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.3, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.15, -0.15]
max_q:  0.0
count:  2
best:  [0, 1]
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.15, -0.15]
max_q:  0.0
count:  2
best:  [0, 1]
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 0.8682207422472137]
max_q:  0.868220742247
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.197153559133048]
max_q:  4.19715355913
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.167580525263091]
max_q:  4.16758052526
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.871616893523075]
max_q:  4.87161689352
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.2540406432231597, 0.0, 0.0]
max_q:  0.254040643223
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.6314983424371965]
max_q:  4.63149834244
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.142443446473627]
max_q:  4.14244344647
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.536773591071617]
max_q:  4.53677359107
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.435212988200221, -0.23920340559466, 1.3513857614978375]
max_q:  5.4352129882
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0)]
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (6, 6), destination = (1, 3), deadline = 40
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 8.219931039970188, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 1.0551366885145304, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.499710412531539, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.9825477929432056, "(['red', None, None, None, 'forward'], 'right')": 1.7077089689246998, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.300698075629862, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.702549376280352, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 0.856156345338705, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.7090072343332587, 1.7077089689246998]
max_q:  1.70770896892
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.9825477929432056, 0.38882466435705665]
max_q:  3.98254779294
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 1.0551366885145304]
max_q:  1.05513668851
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.300698075629862]
max_q:  4.30069807563
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.2555933642853825]
max_q:  4.25559336429
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 8.219931039970188, -0.23920340559466, 1.3513857614978375]
max_q:  8.21993103997
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.58694138397466, -0.23920340559466, 1.3513857614978375]
max_q:  7.58694138397
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.1788531753982205, -0.23920340559466, 1.3513857614978375]
max_q:  6.1788531754
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.7090072343332587, 1.786628044106395]
max_q:  1.78662804411
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.5460539583374233, 0.38882466435705665]
max_q:  3.54605395834
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.103871916879498]
max_q:  4.10387191688
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (5, 3), destination = (2, 1), deadline = 25
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 5.193191429394713, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.7468661852373508, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.499710412531539, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.1942676986217986, "(['red', None, None, None, 'forward'], 'right')": 1.3686338374904357, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.997666903695379, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.702549376280352, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 0.856156345338705, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = forward, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 6.997666903695379]
max_q:  6.9976669037
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 3.499710412531539]
max_q:  3.49971041253
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.193191429394713, -0.23920340559466, 1.3513857614978375]
max_q:  5.19319142939
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.7090072343332587, 1.3686338374904357]
max_q:  1.36863383749
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.1942676986217986, 0.38882466435705665]
max_q:  3.19426769862
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.235234000576299, -0.23920340559466, 1.3513857614978375]
max_q:  4.23523400058
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 3.574753850651808]
max_q:  3.57475385065
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.199948900489854, -0.23920340559466, 1.3513857614978375]
max_q:  4.19994890049
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (3, 3), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.169956565416376, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.7468661852373508, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.6385407730540367, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.3151275438285284, "(['red', None, None, None, 'forward'], 'right')": 1.44332878632975, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.023323394466496, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.702549376280352, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.7090072343332587, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 0.856156345338705, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 3.6385407730540367]
max_q:  3.63854077305
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 6.023323394466496]
max_q:  6.02332339447
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.0504770503078]
max_q:  4.05047705031
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [2.098187524598027, 7.169956565416376, -0.23920340559466, 1.3513857614978375]
max_q:  7.16995656542
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.856156345338705, -0.15, -0.15]
max_q:  0.856156345339
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.44332878632975]
max_q:  1.44332878633
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 5.423897933672717]
max_q:  5.42389793367
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 5.034066347360857]
max_q:  5.03406634736
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.248918625266367]
max_q:  4.24891862527
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.7473930475922685, -0.23920340559466, 1.3513857614978375]
max_q:  5.74739304759
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (5, 1), destination = (1, 4), deadline = 35
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.784699553571631, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.7468661852373508, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.211580831476412, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.3151275438285284, "(['red', None, None, None, 'forward'], 'right')": 1.0768294683802873, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.7611842369425545, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.702549376280352, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.211580831476412]
max_q:  4.21158083148
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.784699553571631, -0.23920340559466, 1.3513857614978375]
max_q:  7.78469955357
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.216994620535886, -0.23920340559466, 1.3513857614978375]
max_q:  7.21699462054
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.0768294683802873]
max_q:  1.07682946838
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.3151275438285284, 0.38882466435705665]
max_q:  3.31512754383
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.17984370675495]
max_q:  4.17984370675
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.4757937260610254]
max_q:  1.47579372606
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.240068230269848]
max_q:  4.24006823027
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.7611842369425545]
max_q:  4.76118423694
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.647006601401171]
max_q:  4.6470066014
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.813420654632163, -0.23920340559466, 1.3513857614978375]
max_q:  5.81342065463
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0)]
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (2, 1), destination = (7, 6), deadline = 50
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.8027406522138048, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.6142625365289027, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 8.541407556437338, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.7468661852373508, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.282225396730277, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.417858412254249, "(['red', None, None, None, 'forward'], 'right')": 1.7550687064375423, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.49523843049036, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.702549376280352, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876}
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.7550687064375423]
max_q:  1.75506870644
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.417858412254249, 0.38882466435705665]
max_q:  3.41785841225
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 8.541407556437338, -0.23920340559466, 1.3513857614978375]
max_q:  8.54140755644
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.860196422971737, -0.23920340559466, 1.3513857614978375]
max_q:  7.86019642297
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 47, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.281166959525976, -0.23920340559466, 1.3513857614978375]
max_q:  7.28116695953
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.788991915597078, -0.23920340559466, 1.3513857614978375]
max_q:  6.7889919156
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.6142625365289027, 1.193536305127879, 0.8372830155436952, 4.49523843049036]
max_q:  4.49523843049
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 2.35975922797188]
max_q:  2.35975922797
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.7931266754577526, 1.193536305127879, 0.8372830155436952, 4.420952665916806]
max_q:  4.42095266592
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.193536305127879, 0.8372830155436952, 4.357809766029285]
max_q:  4.35780976603
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.282225396730277]
max_q:  4.28222539673
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.855795343776098]
max_q:  1.85579534378
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.4204110978320707, 0.0, 2.8027406522138048, 0.0]
max_q:  2.80274065221
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.5051796504161112, 0.38882466435705665]
max_q:  3.50517965042
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.239891587220734]
max_q:  4.23989158722
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.7953704647999618]
max_q:  1.7953704648
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.193536305127879, 0.8372830155436952, 4.292800645730041]
max_q:  4.29280064573
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.2118442079140195]
max_q:  4.21184420791
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.193536305127879, 0.8372830155436952, 4.236737083198131]
max_q:  4.2367370832
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.9626980591270335]
max_q:  1.96269805913
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.180067576726916]
max_q:  4.18006757673
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.193536305127879, 0.8372830155436952, 4.192726094747728]
max_q:  4.19272609475
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.154956217921001]
max_q:  4.15495621792
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.706258225113737, -0.23920340559466, 1.3513857614978375]
max_q:  5.70625822511
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0)]
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (7, 1), destination = (1, 2), deadline = 35
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.455838553409169, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 8.450319491346676, "(['green', None, None, None, 'right'], 'left')": 0.7151608939386644, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.7468661852373508, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.131712785232851, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.1656556830768805, "(['red', None, None, None, 'forward'], 'right')": 2.079827375155984, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.23920340559466, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.163817180535569, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.702549376280352, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.193536305127879, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.163817180535569]
max_q:  4.16381718054
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': 'left'}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 8.450319491346676, -0.23920340559466, 1.3513857614978375]
max_q:  8.45031949135
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 2.079827375155984]
max_q:  2.07982737516
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.1656556830768805, 0.38882466435705665]
max_q:  3.16565568308
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.6178532688825862]
max_q:  1.61785326888
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.2908073306153485, 0.38882466435705665]
max_q:  3.29080733062
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 2.0065769507502207]
max_q:  2.00657695075
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 0.7468661852373508]
max_q:  0.746866185237
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 3.514672026374898]
max_q:  3.51467202637
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 3.587471222418663]
max_q:  3.58747122242
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.827197750216071, -0.23920340559466, 1.3513857614978375]
max_q:  6.82719775022
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.4031180876836595, -0.23920340559466, 1.3513857614978375]
max_q:  6.40311808768
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.7151608939386644, 4.131712785232851]
max_q:  4.13171278523
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.5555904081376877]
max_q:  1.55559040814
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 3.649350539055863]
max_q:  3.64935053906
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 3.7604856069173103]
max_q:  3.76048560692
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 3.7964127658797135]
max_q:  3.79641276588
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 3.8269508509977563]
max_q:  3.826950851
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (8, 1), destination = (3, 4), deadline = 40
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3513857614978375, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.455838553409169, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.04265037453111, "(['green', None, None, None, 'right'], 'left')": 0.9146854667946616, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.2185028814260443, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.48483625745174824, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.039601530521375, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.397186231023046, "(['red', None, None, None, 'forward'], 'right')": 1.8453108418760478, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.21646169288284783, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 6.8848058252766355, "(['green', None, 'forward', None, 'forward'], 'forward')": 8.501184101126679, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.702549376280352, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 0.9146854667946616, 4.039601530521375]
max_q:  4.03960153052
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.04265037453111, -0.04064575763485481, 1.3513857614978375]
max_q:  6.04265037453
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.736252818351443, -0.04064575763485481, 1.3513857614978375]
max_q:  5.73625281835
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.475814895598726, -0.04064575763485481, 1.3513857614978375]
max_q:  5.4758148956
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.8453108418760478]
max_q:  1.84531084188
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.397186231023046, 0.38882466435705665]
max_q:  3.39718623102
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 6.8848058252766355]
max_q:  6.88480582528
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.8481976472933106]
max_q:  1.84819764729
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.3, 0.0, 1.2185028814260443]
max_q:  1.21850288143
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = -0.5
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.21646169288284783, -0.0907252956723105, -0.2550598561488897, 0.48483625745174824]
max_q:  0.484836257452
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.420968000199314]
max_q:  1.4209680002
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 6.45208495148514]
max_q:  6.45208495149
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.702549376280352, 0.46850288142604435, 1.4029206580706184, 4.391375653382989]
max_q:  4.39137565338
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.4029206580706184, 4.33266930537554]
max_q:  4.33266930538
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 3.0507558003338944, 0.38882466435705665]
max_q:  3.05075580033
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 6.084272208762369]
max_q:  6.08427220876
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.0578228001694168]
max_q:  1.05782280017
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 5.7716313774480135]
max_q:  5.77163137745
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 5.505886670830812]
max_q:  5.50588667083
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.4029206580706184, 4.282768909569208]
max_q:  4.28276890957
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.709867053200515, -0.04064575763485481, 0.9546434530738986]
max_q:  4.7098670532
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (4, 6), destination = (5, 1), deadline = 30
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.9546434530738986, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.18092862498544438, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.455838553409169, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.603386995220438, "(['green', None, None, None, 'right'], 'left')": 1.4029206580706184, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.262110818833986, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.240353573133827, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.7748456830588237, "(['red', None, None, None, 'forward'], 'right')": 1.296956018098669, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.19083980784309137, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 5.096536006016949, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.8416849592025772, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.4029206580706184, 4.240353573133827]
max_q:  4.24035357313
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.7748456830588237, 0.38882466435705665]
max_q:  2.77484568306
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.18092862498544438, -0.7718059287058304, -0.5798057460838186, 1.296956018098669]
max_q:  1.2969560181
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.4029206580706184, 4.204300537163753]
max_q:  4.20430053716
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 5.096536006016949]
max_q:  5.09653600602
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.4204110978320707, 0.0, 2.455838553409169, 0.0]
max_q:  2.45583855341
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.53595098722324]
max_q:  4.53595098722
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 4.307490776917169]
max_q:  4.30749077692
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.098187524598027, 7.603386995220438, -0.04064575763485481, 0.9546434530738986]
max_q:  7.60338699522
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.062878945937372, -0.04064575763485481, 0.9546434530738986]
max_q:  7.06287894594
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 3.6152435438420185]
max_q:  3.61524354384
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (5, 2), destination = (8, 6), deadline = 35
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.9546434530738986, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.603447104046766, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.262110818833986, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 6.672957012265716, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.5817086009662744, "(['red', None, None, None, 'forward'], 'right')": 0.9524126153838687, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.19083980784309137, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.4555583391397535, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.8416849592025772, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  forward
q:  [2.098187524598027, 6.603447104046766, -0.04064575763485481, 0.9546434530738986]
max_q:  6.60344710405
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.9524126153838687]
max_q:  0.952412615384
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.19083980784309137, -0.0907252956723105, -0.2550598561488897, 0.262110818833986]
max_q:  0.262110818834
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 6.672957012265716]
max_q:  6.67295701227
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.4555583391397535]
max_q:  4.45555833914
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.365274865140316, -0.04064575763485481, 0.9546434530738986]
max_q:  5.36527486514
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.6595507230762883]
max_q:  0.659550723076
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.19083980784309137, -0.0907252956723105, -0.2550598561488897, 0.07279419600888812]
max_q:  0.190839807843
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.9633595754223635, 2.5817086009662744, 0.38882466435705665]
max_q:  2.58170860097
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 5.939403659456963]
max_q:  5.93940365946
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.410618114614845]
max_q:  0.410618114615
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 5.648493110538419]
max_q:  5.64849311054
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.609801386316372]
max_q:  4.60980138632
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.518331178368916]
max_q:  4.51833117837
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.8056264323393412]
max_q:  0.805626432339
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.440581501613578]
max_q:  4.44058150161
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 5.401219143957656]
max_q:  5.40121914396
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 5.191036272364007]
max_q:  5.19103627236
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.454625014059665, -0.04064575763485481, 0.9546434530738986]
max_q:  4.45462501406
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 3.718237509841765, -0.04064575763485481, 0.9546434530738986]
max_q:  3.71823750984
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (3, 2), destination = (7, 5), deadline = 35
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.9546434530738986, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.7605018833654995, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.07279419600888812, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 5.012380831509406, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.431528096176386, "(['red', None, None, None, 'forward'], 'right')": 0.5347824674884399, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.16221383666662767, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.374494276371541, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.8416849592025772, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 5.012380831509406]
max_q:  5.01238083151
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.5347824674884399]
max_q:  0.534782467488
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.16221383666662767, -0.0907252956723105, -0.2550598561488897, 0.07279419600888812]
max_q:  0.162213836667
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.1378817611666335, -0.0907252956723105, -0.2550598561488897, 0.07279419600888812]
max_q:  0.137881761167
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.11719949699163847, -0.0907252956723105, -0.2550598561488897, 0.07279419600888812]
max_q:  0.117199496992
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 2.431528096176386, 0.38882466435705665]
max_q:  2.43152809618
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.412568688479116, -0.04064575763485481, 0.9546434530738986]
max_q:  5.41256868848
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.374494276371541]
max_q:  4.37449427637
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.0362330305137752]
max_q:  1.03623303051
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.31832013491581]
max_q:  4.31832013492
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 4.8605237067829945]
max_q:  4.86052370678
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 4.731445150765545]
max_q:  4.73144515077
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.544233036512447, -0.04064575763485481, 0.9546434530738986]
max_q:  4.54423303651
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (8, 3), destination = (5, 5), deadline = 25
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.9546434530738986, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.46259808103558, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['green', None, None, None, 'left'], None)": 0.3647292144264579, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": 0.07279419600888812, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 4.621728378150713, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.666798881749928, "(['red', None, None, None, 'forward'], 'right')": 0.730798075936709, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.09961957244289268, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.351902650458516, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.8416849592025772, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 2.666798881749928, 0.38882466435705665]
max_q:  2.66679888175
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.46259808103558, -0.04064575763485481, 0.9546434530738986]
max_q:  7.46259808104
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.730798075936709]
max_q:  0.730798075937
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.09961957244289268, -0.0907252956723105, -0.2550598561488897, 0.07279419600888812]
max_q:  0.0996195724429
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.08467663657645877, -0.0907252956723105, -0.2550598561488897, 0.07279419600888812]
max_q:  0.0846766365765
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.07197514108998995, -0.0907252956723105, -0.2550598561488897, 0.07279419600888812]
max_q:  0.0727941960089
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 4.621728378150713]
max_q:  4.62172837815
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 4.528469121428105]
max_q:  4.52846912143
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.933438368115412, -0.04064575763485481, 0.9546434530738986]
max_q:  5.93343836812
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 2.866779049487439, 0.38882466435705665]
max_q:  2.86677904949
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.251574408373008]
max_q:  1.25157440837
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.351902650458516]
max_q:  4.35190265046
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.3137116683030445]
max_q:  4.3137116683
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.266654918057588]
max_q:  4.26665491806
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.9138382471170569]
max_q:  0.913838247117
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8416849592025772, 0.46850288142604435, 1.5965248615519751, 4.4491987532138895]
max_q:  4.44919875321
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.8463453405292622, 0.46850288142604435, 1.5965248615519751, 3.7144391272497224]
max_q:  3.71443912725
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.8372830155436952, 4.22665668034895]
max_q:  4.22665668035
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.94114301893674, -0.04064575763485481, 0.9546434530738986]
max_q:  4.94114301894
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0), (6, 12.0)]
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (1, 3), destination = (7, 3), deadline = 30
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.9546434530738986, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 7.243428847129085, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['green', None, None, None, 'left'], None)": 0.3647292144264579, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": -0.06100193015277685, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.7572732581622637, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.036762192064323, "(['red', None, None, None, 'forward'], 'right')": 1.2308582258224505, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.07197514108998995, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.122250664968604, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.8463453405292622, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  left
q:  [0.07197514108998995, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.07197514109
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.06117886992649145, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0611788699265
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.05200203943751773, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0520020394375
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.044201733521890066, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0442017335219
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 3.036762192064323, 0.38882466435705665]
max_q:  3.03676219206
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.2308582258224505]
max_q:  1.23085822582
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 3.1812478632546743, 0.38882466435705665]
max_q:  3.18124786325
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 7.243428847129085, -0.04064575763485481, 0.9546434530738986]
max_q:  7.24342884713
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.798115085145078]
max_q:  1.79811508515
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 3.304060683766473, 0.38882466435705665]
max_q:  3.30406068377
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.756914520059722, -0.04064575763485481, 0.9546434530738986]
max_q:  6.75691452006
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.343377342050763, -0.04064575763485481, 0.9546434530738986]
max_q:  6.34337734205
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.03757147349360655, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0375714734936
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.031935752469565565, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0319357524696
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02714538959913073, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0271453895991
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 3.408451581201502, 0.38882466435705665]
max_q:  3.4084515812
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.991870740743148, -0.04064575763485481, 0.9546434530738986]
max_q:  5.99187074074
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0), (6, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (5, 3), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.9546434530738986, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.0907252956723105, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 8.001069191876201, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['green', None, None, None, 'left'], None)": 0.3647292144264579, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": -0.06100193015277685, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.7572732581622637, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 2.98937714401494, "(['red', None, None, None, 'forward'], 'right')": 1.3783978223733162, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.023073581159261117, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.122250664968604, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.8463453405292622, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 0.8420756433007338, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  forward
q:  [2.098187524598027, 8.001069191876201, -0.04064575763485481, 0.9546434530738986]
max_q:  8.00106919188
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.3783978223733162]
max_q:  1.37839782237
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 2.98937714401494, 0.38882466435705665]
max_q:  2.98937714401
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.7760046918117218]
max_q:  1.77600469181
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.8420756433007338, 0.0]
max_q:  0.842075643301
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.023073581159261117, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0230735811593
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.019612543985371947, -0.0907252956723105, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0196125439854
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.016670662387566156, -0.36100710761248245, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0166706623876
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.014170063029431232, -0.36100710761248245, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0141700630294
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 2.696025037984347, 0.38882466435705665]
max_q:  2.69602503798
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0), (6, 12.0), (14, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (1, 4), destination = (5, 2), deadline = 30
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 0.9546434530738986, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.36100710761248245, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.407508107669337, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['green', None, None, None, 'left'], None)": 0.3647292144264579, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": -0.06100193015277685, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.7572732581622637, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 5.4890242096252955, "(['red', None, None, None, 'forward'], 'right')": 1.4024160440995954, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.012044553575016546, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 4.122250664968604, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.8372830155436952, "(['green', None, None, None, 'right'], None)": 1.8463453405292622, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 1.5938567060081654, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 4.122250664968604]
max_q:  4.12225066497
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.4024160440995954]
max_q:  1.4024160441
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.012044553575016546, -0.36100710761248245, -0.2550598561488897, -0.06100193015277685]
max_q:  0.012044553575
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 5.4890242096252955, 0.38882466435705665]
max_q:  5.48902420963
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.407508107669337, -0.04064575763485481, 0.9546434530738986]
max_q:  6.40750810767
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 5.265670578181501, 0.38882466435705665]
max_q:  5.26567057818
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 4.287505085307865, 0.38882466435705665]
max_q:  4.28750508531
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.042053637484656]
max_q:  1.04205363748
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8463453405292622, 0.46850288142604435, 1.5965248615519751, 3.7572732581622637]
max_q:  3.75727325816
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 4.103913065223313]
max_q:  4.10391306522
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 4.049590881730881]
max_q:  4.04959088173
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 5.241563720991234, -0.04064575763485481, 1.3044849753004142]
max_q:  5.24156372099
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.3656721043879443]
max_q:  1.36567210439
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8463453405292622, 0.46850288142604435, 1.5965248615519751, 3.8456782404970813]
max_q:  3.8456782405
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 4.011565353286179]
max_q:  4.01156535329
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8463453405292622, 0.46850288142604435, 1.5965248615519751, 3.893709571340884]
max_q:  3.89370957134
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.473945420352055, -0.04064575763485481, 1.3044849753004142]
max_q:  4.47394542035
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 4.402853607299247, -0.04064575763485481, 1.3044849753004142]
max_q:  4.4028536073
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0), (6, 12.0), (14, 12.0), (10, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (6, 3), destination = (4, 5), deadline = 20
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3044849753004142, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.36100710761248245, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 6.833620718418935, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['green', None, None, None, 'left'], None)": 0.3647292144264579, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": -0.06100193015277685, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.909653135639751, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.6027892402963198, "(['red', None, None, None, 'forward'], 'right')": 1.0108212887297525, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.010237870538764064, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9921521830014575, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.9044357106258771, "(['green', None, None, None, 'right'], None)": 1.8463453405292622, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 1.5938567060081654, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 3.9921521830014575]
max_q:  3.992152183
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.0108212887297525]
max_q:  1.01082128873
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.010237870538764064, -0.36100710761248245, -0.2550598561488897, -0.06100193015277685]
max_q:  0.0102378705388
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.008702189957949455, -0.36100710761248245, -0.2550598561488897, -0.06100193015277685]
max_q:  0.00870218995795
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.007396861464257037, -0.36100710761248245, -0.2550598561488897, -0.06100193015277685]
max_q:  0.00739686146426
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 3.6623708542518716, 0.38882466435705665]
max_q:  3.66237085425
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.7091980954202897]
max_q:  0.70919809542
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 3.9933293555512384]
max_q:  3.99332935555
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8463453405292622, 0.46850288142604435, 1.5965248615519751, 3.909653135639751]
max_q:  3.90965313564
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 3.9817785192318293]
max_q:  3.98177851923
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.833620718418935, -0.04064575763485481, 1.3044849753004142]
max_q:  6.83362071842
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.4528183811072462]
max_q:  0.452818381107
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.8463453405292622, 0.46850288142604435, 1.5965248615519751, 3.9340239728326]
max_q:  3.93402397283
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 3.9773485593871705]
max_q:  3.97734855939
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.8463453405292622, 0.46850288142604435, 1.5965248615519751, 3.9504190648908954]
max_q:  3.95041906489
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 6.408577610656094, -0.04064575763485481, 1.3044849753004142]
max_q:  6.40857761066
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0), (6, 12.0), (14, 12.0), (10, 12.0), (11, 12.0), (4, 12.0)]
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (6, 3), destination = (3, 2), deadline = 20
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['green', None, None, None, 'forward'], 'right')": 1.3044849753004142, "(['green', 'left', None, None, 'forward'], 'forward')": 1.63508363828838, "(['red', None, None, 'right', 'left'], 'left')": -0.3, "(['green', None, None, None, 'forward'], None)": 2.098187524598027, "(['red', None, None, None, 'forward'], None)": 0.26951192979739136, "(['green', None, 'right', None, 'left'], 'forward')": 0.2536142176066764, "(['red', None, None, 'left', 'right'], 'left')": -0.3, "(['green', None, None, 'right', 'right'], 'forward')": 0.8996500355543068, "(['green', None, None, 'left', 'right'], 'left')": 2.2494796354699043, "(['red', None, None, None, 'left'], 'forward')": -0.36100710761248245, "(['red', None, None, None, 'right'], None)": 1.7931266754577526, "(['red', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.4550491951414751, "(['green', None, 'left', 'left', 'right'], 'right')": 1.1272008039562347, "(['red', 'right', None, None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, None, 'forward'], 'forward')": 9.04729096905768, "(['green', None, None, None, 'right'], 'left')": 1.5965248615519751, "(['green', None, None, None, 'right'], 'forward')": 0.46850288142604435, "(['red', None, 'right', None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, 'right', None, 'forward'], 'forward')": 0.6, "(['red', 'left', None, None, 'right'], 'right')": 1.452952016998231, "(['red', None, None, None, 'forward'], 'forward')": -0.7718059287058304, "(['green', None, None, None, 'left'], None)": 0.3647292144264579, "(['red', 'left', None, None, 'forward'], 'left')": -0.3, "(['green', None, None, 'forward', 'left'], 'forward')": 0.18609895353339134, "(['red', None, None, None, 'left'], 'right')": -0.06100193015277685, "(['red', None, 'forward', None, 'right'], 'right')": 1.9952220875632058, "(['green', None, None, None, 'right'], 'right')": 3.961799373119325, "(['red', 'left', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, None, 'left'], 'forward')": 0.9633595754223635, "(['green', None, None, None, 'left'], 'left')": 3.164602697813003, "(['red', None, None, None, 'forward'], 'right')": 1.1282595083734863, "(['green', None, 'forward', None, 'right'], 'left')": 0.8561436324273012, "(['green', 'left', 'right', None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'left'], None)": 0.0062873322446184805, "(['green', 'forward', None, None, 'left'], None)": 0.0, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2550598561488897, "(['red', None, 'forward', None, 'forward'], 'right')": -0.15, "(['green', None, None, None, 'forward'], 'left')": -0.04064575763485481, "(['red', 'forward', None, None, 'left'], 'left')": -0.3, "(['green', None, 'left', None, 'right'], 'right')": 2.2492223107960685, "(['green', None, None, None, 'left'], 'right')": 0.38882466435705665, "(['red', None, None, 'right', 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'right')": 3.9767068513046535, "(['green', None, 'forward', None, 'forward'], 'forward')": 6.763974070818572, "(['red', None, 'left', None, 'right'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'left')": 0.9044357106258771, "(['green', None, None, None, 'right'], None)": 1.8463453405292622, "(['red', None, 'right', None, 'right'], 'left')": -0.3, "(['red', 'forward', None, None, 'right'], 'forward')": -0.3, "(['red', 'right', None, None, 'right'], 'forward')": -0.3, "(['green', None, None, 'left', 'forward'], 'forward')": 4.308758161044622, "(['red', 'forward', None, None, 'left'], 'right')": 0.5133265746458654, "(['red', None, None, None, 'forward'], 'left')": -0.5798057460838186, "(['red', None, 'left', None, 'forward'], 'forward')": -0.3, "(['green', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, None, 'right', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.3, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'left')": -0.15, "(['green', None, 'right', None, 'forward'], None)": 0.0, "(['green', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'right'], 'right')": 1.156737836870504, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['red', None, 'right', 'right', 'forward'], 'forward')": -0.3, "(['green', None, None, 'right', 'left'], 'left')": 0.8748854275839583, "(['green', None, 'right', None, 'forward'], 'left')": -0.15, "(['green', None, 'left', None, 'forward'], 'forward')": 2.061418398875934, "(['green', None, 'left', None, 'forward'], 'right')": -0.15, "(['green', 'left', None, None, 'right'], 'right')": 1.3192059736953143, "(['green', 'forward', None, None, 'forward'], 'right')": -0.15, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', 'right', None, None, 'forward'], 'left')": -0.3, "(['red', None, None, None, 'right'], 'forward')": 1.1600479906698504, "(['green', None, 'left', None, 'left'], 'left')": 1.5938567060081654, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.029148237824276876, "(['green', None, None, 'left', 'right'], None)": 0.4204110978320707}
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 1.1282595083734863]
max_q:  1.12825950837
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, -0.3, 0.5133265746458654]
max_q:  0.513326574646
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 3.9767068513046535]
max_q:  3.9767068513
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.7931266754577526, 1.1600479906698504, 0.9044357106258771, 3.980200823608955]
max_q:  3.98020082361
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.26951192979739136, -0.7718059287058304, -0.5798057460838186, 0.6397816558614403]
max_q:  0.639781655861
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.3647292144264579, 0.9633595754223635, 3.164602697813003, 0.38882466435705665]
max_q:  3.16460269781
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 9.04729096905768, -0.04064575763485481, 1.3044849753004142]
max_q:  9.04729096906
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.098187524598027, 8.290197323699028, -0.04064575763485481, 1.3044849753004142]
max_q:  8.2901973237
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0), (6, 12.0), (14, 12.0), (10, 12.0), (11, 12.0), (4, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
epsilon:  0.1 gamma:  0.5 alpha:  0.3 defaultq:  0.0
Results:  [(4, 12.0), (26, 12.0), (20, 12.0), (30, 12.0), (24, 12.0), (19, 12.0), (24, 12.0), (26, 9.5), (16, 12.0), (13, 12.0), (14, 12.0), (12, 12.0), (20, 12.0), (9, 12.0), (23, 9.5), (27, 12.0), (15, 12.0), (12, 9.5), (19, 12.0), (27, 12.0), (19, 12.0), (19, 12.0), (12, 12.0), (18, 12.0), (12, 12.0), (20, 12.0), (14, 12.0), (26, 12.0), (9, 12.0), (10, 12.0), (11, 12.0), (25, 12.0), (12, 12.0), (22, 12.0), (16, 12.0), (24, 12.0), (22, 12.0), (16, 12.0), (22, 12.0), (11, 12.0), (8, 12.0), (17, 12.0), (29, 12.0), (15, 12.0), (6, 12.0), (14, 12.0), (13, 12.0), (16, 12.0), (17, 12.0), (17, 12.0), (5, 12.0), (11, 12.0), (19, 12.0), (8, 12.0), (14, 12.0), (18, 9.5), (3, 12.0), (19, 12.0), (4, 12.0), (15, 12.0), (21, 9.5), (13, 12.0), (27, 12.0), (2, 12.0), (5, 12.0), (16, 12.0), (16, 12.0), (7, 12.0), (2, 12.0), (28, 12.0), (25, 12.0), (30, 12.0), (12, 12.0), (19, 12.0), (12, 12.0), (24, 12.0), (8, 12.0), (29, 12.0), (16, 12.0), (10, 12.0), (25, 12.0), (25, 12.0), (14, 12.0), (13, 12.0), (18, 12.0), (16, 12.0), (21, 12.0), (6, 12.0), (14, 12.0), (10, 12.0), (11, 12.0), (4, 12.0), (13, 12.0)]