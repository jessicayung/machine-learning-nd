
((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ python smartcab/agent.py 
Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (2, 4), destination = (4, 2), deadline = 20
RoutePlanner.route_to(): destination = (4, 2)
q:  {}
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.16666666666666666, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.2, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.2, -0.16666666666666666, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.2, -0.16666666666666666, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.2, -0.16666666666666666, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 0.125]
max_q:  0.125
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, 0.0, -0.03571428571428571]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, 0.0, -0.03571428571428571]
max_q:  0.0
count:  2
best:  [0, 2]
action:  left
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (3, 6), destination = (6, 3), deadline = 30
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['green', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], 'forward')": -0.07692307692307693, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['green', None, None, None, 'forward'], 'forward')": 0.16666666666666666, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 0.2389705882352941, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['red', None, None, None, 'forward'], 'left')": -0.05263157894736842, "(['red', None, None, None, 'forward'], 'right')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'left')": -0.125}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.05]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -1.0, 0.0, -0.03333333333333333]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, 0.0, -0.03333333333333333]
max_q:  0.0
count:  2
best:  [0, 2]
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.025, 0.0, -0.05]
max_q:  0.0
count:  2
best:  [0, 2]
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.16666666666666666, 0.0, 0.0]
max_q:  0.166666666667
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 0.2389705882352941]
max_q:  0.238970588235
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.03571428571428571]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 0.3270220588235294]
max_q:  0.327022058824
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 0.08]
max_q:  0.08
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.4716666666666667, 0.0, 0.0]
max_q:  0.471666666667
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0)]
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (5, 6), destination = (8, 1), deadline = 40
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.125, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 0.9073765432098766, "(['green', None, None, None, 'right'], 'right')": 0.3967294730392157, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 0.5, "(['red', None, None, None, 'forward'], 'right')": -0.055900621118012424, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 0.1614755667892157, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.05263157894736842, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.07692307692307693, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 0.1614755667892157]
max_q:  0.161475566789
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 0.3967294730392157]
max_q:  0.396729473039
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07561471193415638, 0.9073765432098766, 0.0, 0.0]
max_q:  0.90737654321
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07561471193415638, 1.0634656084656084, 0.0, 0.0]
max_q:  1.06346560847
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07561471193415638, 1.1675249853027632, 0.0, 0.0]
max_q:  1.1675249853
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.025, 0.5, -0.05]
max_q:  0.5
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 1.2368979031941996, 0.0, 0.0]
max_q:  1.23689790319
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 1.3232448437193807, 0.0, 0.0]
max_q:  1.32324484372
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 1.4019729365511635, 0.0, 0.0]
max_q:  1.40197293655
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (4, 5), destination = (6, 3), deadline = 20
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', None, None, None, 'forward'], None)": 0.07561471193415638, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.125, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 2.0296959105358536, "(['green', None, None, None, 'right'], 'right')": 1.1278063406352123, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 0.6166666666666667, "(['red', None, None, None, 'forward'], 'right')": -0.055900621118012424, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 1.1799201516544118, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.05263157894736842, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.07692307692307693, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 1.1278063406352123]
max_q:  1.12780634064
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 2.0296959105358536, 0.0, 0.0]
max_q:  2.02969591054
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.025, 0.6166666666666667, -0.05]
max_q:  0.616666666667
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 2.0, 0.0, 0.0]
max_q:  2.0
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (5, 2), destination = (8, 1), deadline = 20
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', None, None, None, 'forward'], None)": 0.07561471193415638, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.125, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.5, "(['green', None, None, None, 'right'], 'right')": 1.2075894978397899, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 1.1805555555555556, "(['red', None, None, None, 'forward'], 'right')": -0.055900621118012424, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 1.1799201516544118, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.05263157894736842, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.07692307692307693, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 1.2075894978397899]
max_q:  1.20758949784
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 1.556640810609816]
max_q:  1.55664081061
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 4.5, 0.0, 0.0]
max_q:  4.5
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 4.375, 0.0, 0.0]
max_q:  4.375
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (1, 2), destination = (5, 6), deadline = 40
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', None, None, None, 'forward'], None)": 0.07561471193415638, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.125, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 6.916666666666667, "(['green', None, None, None, 'right'], 'right')": 2.7783204053049078, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 1.1805555555555556, "(['red', None, None, None, 'forward'], 'right')": -0.055900621118012424, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 1.1799201516544118, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.05263157894736842, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.07692307692307693, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 1.1799201516544118]
max_q:  1.17992015165
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 6.916666666666667, 0.0, 0.0]
max_q:  6.91666666667
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 5.458333333333334, 0.0, 0.0]
max_q:  5.45833333333
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 3.729166666666667, 0.0, 0.0]
max_q:  3.72916666667
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 2.7783204053049078]
max_q:  2.7783204053
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -0.05263157894736842, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 1.9163335019870926]
max_q:  1.91633350199
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 2.9310303546417944]
max_q:  2.93103035464
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 2.011045615533134]
max_q:  2.01104561553
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.05]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 2.010195952799816]
max_q:  2.0101959528
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 2.937238059068859]
max_q:  2.93723805907
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
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
q:  [0.02951388888888889, -0.025, 1.1805555555555556, -0.05]
max_q:  1.18055555556
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07561471193415638, 3.7743055555555562, 0.0, 0.0]
max_q:  3.77430555556
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (2, 2), destination = (7, 1), deadline = 30
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', None, None, None, 'forward'], None)": 0.07561471193415638, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.125, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.23398042929293, "(['green', None, None, None, 'right'], 'right')": 2.9445176853119133, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 1.2476851851851851, "(['red', None, None, None, 'forward'], 'right')": -0.055900621118012424, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.1074241579154567, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.05263157894736842, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.07692307692307693, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 1.2476851851851851, -0.05]
max_q:  1.24768518519
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07561471193415638, 4.23398042929293, 0.0, 0.0]
max_q:  4.23398042929
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.5]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 1.281881313131313, -0.05]
max_q:  1.28188131313
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -1.0, -0.055900621118012424]
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
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.07692307692307693, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.18688440734505551, 3.489320286195287, 0.0, 0.0]
max_q:  3.4893202862
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 1.3536931818181817, -0.05]
max_q:  1.35369318182
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.1188811188811189, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.18688440734505551, 3.5020872790404045, 0.0, 0.0]
max_q:  3.50208727904
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0)]
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (1, 3), destination = (5, 6), deadline = 35
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], None)": 0.18688440734505551, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.125, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.929127127393729, "(['green', None, None, None, 'right'], 'right')": 2.9445176853119133, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 1.3844696969696968, "(['red', None, None, None, 'forward'], 'right')": -0.055900621118012424, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.1074241579154567, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.1188811188811189, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 2.9445176853119133]
max_q:  2.94451768531
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1188811188811189, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1188811188811189, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.18688440734505551, 3.929127127393729, 0.0, 0.0]
max_q:  3.92912712739
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1188811188811189, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1188811188811189, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1188811188811189, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.18688440734505551, 3.446845345545297, 0.0, 0.0]
max_q:  3.44684534555
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1188811188811189, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.18688440734505551, 3.2860847515958196, 0.0, 0.0]
max_q:  3.2860847516
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.125, 3.0537120789577283]
max_q:  3.05371207896
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.315831220279327, 0.0, 0.0]
max_q:  3.31583122028
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.2500396592653606, 0.0, 0.0]
max_q:  3.25003965927
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.265038866080053, 0.0, 0.0]
max_q:  3.26503886608
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 8
Environment.reset(): Trial set up with start = (8, 4), destination = (3, 2), deadline = 35
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.125, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.663788118655437, "(['green', None, None, None, 'right'], 'right')": 3.090107768228585, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 1.3844696969696968, "(['red', None, None, None, 'forward'], 'right')": -0.055900621118012424, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.1074241579154567, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.1989828353464717, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 1.3844696969696968, -0.05]
max_q:  1.38446969697
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.663788118655437, 0.0, 0.0]
max_q:  3.66378811866
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.4558146038235074, 0.0, 0.0]
max_q:  3.45581460382
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.055900621118012424]
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
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 1.5075757575757573, -0.05]
max_q:  1.50757575758
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.4860471258333123, 0.0, 0.0]
max_q:  3.48604712583
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.06928314837550988, 3.090107768228585]
max_q:  3.09010776823
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.16666666666666666, -0.06928314837550988, 3.1107871371324807]
max_q:  3.11078713713
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 2.1074241579154567]
max_q:  2.10742415792
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 1.5404040404040402, -0.05]
max_q:  1.5404040404
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (8, 1), destination = (4, 2), deadline = 25
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.4988959476874792, "(['green', None, None, None, 'right'], 'right')": 3.1083056128640134, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 1.9147306397306396, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.167704518270313, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.1989828353464717, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 2.167704518270313]
max_q:  2.16770451827
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.4988959476874792, 0.0, 0.0]
max_q:  3.49889594769
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.74944797384374, 0.0, 0.0]
max_q:  3.74944797384
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.812085980382805, 0.0, 0.0]
max_q:  3.81208598038
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 1.9147306397306396, -0.05]
max_q:  1.91473063973
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (1, 2), destination = (6, 3), deadline = 30
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.2080573202552034, "(['green', None, None, None, 'right'], 'right')": 3.1083056128640134, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.123257575757576, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.213919461209036, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.1989828353464717, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 4.123257575757576, -0.05]
max_q:  4.12325757576
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.2080573202552034, 0.0, 0.0]
max_q:  3.20805732026
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.9060429901914024, 0.0, 0.0]
max_q:  2.90604299019
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.7550358251595024, 0.0, 0.0]
max_q:  2.75503582516
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.1083056128640134]
max_q:  3.10830561286
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (2, 2), destination = (6, 6), deadline = 40
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 2.8172840339015273, "(['green', None, None, None, 'right'], 'right')": 3.9415267893423884, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.6986060606060605, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.213919461209036, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.1989828353464717, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0}
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.9415267893423884]
max_q:  3.94152678934
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.943963173119789]
max_q:  3.94396317312
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.8172840339015273, 0.0, 0.0]
max_q:  2.8172840339
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.9651235296638365, 0.0, 0.0]
max_q:  2.96512352966
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.106959730604518]
max_q:  3.1069597306
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.868611176697453, 0.0, 0.0]
max_q:  2.8686111767
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.9063241374742046, 0.0, 0.0]
max_q:  2.90632413747
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.8496788788820666, 0.0, 0.0]
max_q:  2.84967887888
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (1, 6), destination = (4, 5), deadline = 20
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.358030052277507, "(['green', None, None, None, 'right'], 'right')": 3.1388540259400712, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.6986060606060605, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.213919461209036, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.1989828353464717, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.1989828353464717, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.358030052277507, 0.0, 0.0]
max_q:  3.35803005228
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.438276295742819, 0.0, 0.0]
max_q:  3.43827629574
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.1506210365942553, 0.0, 0.0]
max_q:  3.15062103659
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.6986060606060605, -0.05]
max_q:  3.69860606061
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 13
Environment.reset(): Trial set up with start = (3, 6), destination = (6, 2), deadline = 35
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 2.9588508638285465, "(['green', None, None, None, 'right'], 'right')": 3.1388540259400712, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.736280303030303, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.213919461209036, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [0.2919580646875275, 2.9588508638285465, 0.0, 0.0]
max_q:  2.95885086383
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.0239226848392624, 0.0, 0.0]
max_q:  3.02392268484
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.511961342419631, 0.0, 0.0]
max_q:  3.51196134242
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 4.736280303030303, -0.05]
max_q:  4.73628030303
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.755980671209816, 0.0, 0.0]
max_q:  2.75598067121
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 2.213919461209036]
max_q:  2.21391946121
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.1388540259400712]
max_q:  3.13885402594
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 2.349470216385136]
max_q:  2.34947021639
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.6299838926748467, 0.0, -0.05555555555555555]
max_q:  2.62998389267
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.675651096252352, 0.0, -0.05555555555555555]
max_q:  2.67565109625
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (7, 3), destination = (8, 6), deadline = 20
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": -0.05555555555555555, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.1418685414397345, "(['green', None, None, None, 'right'], 'right')": 3.177997024760977, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.189024242424242, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.418242290702422, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [0.2919580646875275, 3.1418685414397345, 0.0, -0.05555555555555555]
max_q:  3.14186854144
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.177997024760977]
max_q:  3.17799702476
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.163321827903741, 0.0, -0.05555555555555555]
max_q:  3.1633218279
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.5816609139518705, 0.0, -0.05555555555555555]
max_q:  2.58166091395
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (5, 3), destination = (1, 2), deadline = 25
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": -0.05555555555555555, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.0, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.465328731161497, "(['green', None, None, None, 'right'], 'right')": 3.5889985123804884, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.189024242424242, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 2.418242290702422, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.0, -1.0, -1.0, 2.418242290702422]
max_q:  2.4182422907
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 4.465328731161497, 0.0, -0.05555555555555555]
max_q:  4.46532873116
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 4.2326643655807485, 0.0, -0.05555555555555555]
max_q:  4.23266436558
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 4.174498274185561, 0.0, -0.05555555555555555]
max_q:  4.17449827419
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.3366867104749983, -1.0, -1.0, 2.6934936837999865]
max_q:  2.6934936838
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (4, 2), destination = (8, 2), deadline = 20
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": -0.05555555555555555, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.4496655161237078, "(['green', None, None, None, 'right'], 'right')": 3.5889985123804884, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.189024242424242, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.913694798278039, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": -1.0, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.3366867104749983, -1.0, -1.0, 4.913694798278039]
max_q:  4.91369479828
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.3366867104749983, -1.0, 1.4111626592251176, 4.822325318450235]
max_q:  4.82232531845
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.4496655161237078, 0.0, -0.05555555555555555]
max_q:  3.44966551612
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.504698964511337, 0.0, -0.05555555555555555]
max_q:  3.50469896451
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.5459740508020587, 0.0, -0.05555555555555555]
max_q:  3.5459740508
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.3366867104749983, -1.0, 1.4111626592251176, 4.616743988837676]
max_q:  4.61674398884
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (5, 6), destination = (1, 6), deadline = 20
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": -0.05555555555555555, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.3251206149731933, "(['green', None, None, None, 'right'], 'right')": 3.5889985123804884, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.189024242424242, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.828197489535322, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4111626592251176, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 4.189024242424242, -0.05]
max_q:  4.18902424242
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.3251206149731933, 0.0, -0.05555555555555555]
max_q:  3.32512061497
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.993840461229895, 0.0, -0.05555555555555555]
max_q:  2.99384046123
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
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
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.828200384358246, 0.0, -0.05555555555555555]
max_q:  2.82820038436
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (2, 5), destination = (5, 2), deadline = 30
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": -0.05555555555555555, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.004411474116121, "(['green', None, None, None, 'right'], 'right')": 3.5889985123804884, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.459349494949495, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.828197489535322, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4111626592251176, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.3366867104749983, -1.0, 1.4111626592251176, 5.828197489535322]
max_q:  5.82819748954
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.5889985123804884]
max_q:  3.58899851238
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.459349494949495, -0.05]
max_q:  3.45934949495
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 4.004411474116121, 0.0, -0.05555555555555555]
max_q:  4.00441147412
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.5134145454545456, -0.05]
max_q:  3.51341454545
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 3.781699088103218, 0.0, -0.05555555555555555]
max_q:  3.7816990881
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (4, 2), destination = (2, 4), deadline = 20
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": -0.05555555555555555, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.700712765916708, "(['green', None, None, None, 'right'], 'right')": 3.9598060437403735, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.5377438181818186, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.4028422129202855, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4111626592251176, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.5377438181818186, -0.05]
max_q:  3.53774381818
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.2919580646875275, 4.700712765916708, 0.0, -0.05555555555555555]
max_q:  4.70071276592
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.5587554628099176, -0.05]
max_q:  3.55875546281
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.2919580646875275, 2.0, 0.0, -0.05555555555555555]
max_q:  2.0
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (8, 3), destination = (2, 5), deadline = 40
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": -0.05555555555555555, "(['green', None, None, None, 'forward'], None)": 0.2919580646875275, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.03333333333333333, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.1, "(['green', None, None, None, 'right'], 'right')": 3.9598060437403735, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.613911029958678, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.3333333333333333, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.4028422129202855, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4111626592251176, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -1.0, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.9598060437403735]
max_q:  3.95980604374
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.3333333333333333, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.1, 0.0, 0.49722222222222223]
max_q:  3.1
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.1]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.99, 0.0, 0.49722222222222223]
max_q:  2.99
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.913846153846154, 0.0, 0.49722222222222223]
max_q:  2.91384615385
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.03333333333333333]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3366867104749983, -1.0, 1.4111626592251176, 5.4028422129202855]
max_q:  5.40284221292
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3366867104749983, -1.0, 1.4111626592251176, 5.367771157597278]
max_q:  5.3677711576
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.3366867104749983, -0.878745336871489, 1.4111626592251176, 5.335205177654485]
max_q:  5.33520517765
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.3449258582988985, -0.05]
max_q:  3.3449258583
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.950051282051282, 0.0, 0.49722222222222223]
max_q:  2.95005128205
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.9675504273504276, 0.0, 0.49722222222222223]
max_q:  2.96755042735
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (1, 6), destination = (7, 5), deadline = 35
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.49722222222222223, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.306783484973808, "(['green', None, None, None, 'right'], 'right')": 3.961815741553355, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.296892791931081, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.2763226860511026, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4111626592251176, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.878745336871489, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.306783484973808, 0.0, 0.49722222222222223]
max_q:  3.30678348497
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.3934355493520822, 0.0, 0.49722222222222223]
max_q:  3.39343554935
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.4271335743880775, 0.0, 0.49722222222222223]
max_q:  3.42713357439
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.4557768956686736, 0.0, 0.49722222222222223]
max_q:  3.45577689567
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.323433541516976, 0.0, 0.49722222222222223]
max_q:  3.32343354152
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.296892791931081, -0.05]
max_q:  3.29689279193
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (8, 5), destination = (6, 1), deadline = 30
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.49722222222222223, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.2352046387491775, "(['green', None, None, None, 'right'], 'right')": 3.961815741553355, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.8144704721328035, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.2763226860511026, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4111626592251176, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.878745336871489, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.8144704721328035, -0.05]
max_q:  3.81447047213
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.2352046387491775, 0.0, 0.5282412270798406]
max_q:  3.23520463875
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.961815741553355]
max_q:  3.96181574155
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.6176023193745888, 0.0, 0.5282412270798406]
max_q:  2.61760231937
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.704002174413677, 0.0, 0.5282412270798406]
max_q:  2.70400217441
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (3, 1), destination = (7, 4), deadline = 35
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.3366867104749983, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.887113164724028, "(['green', None, None, None, 'right'], 'right')": 3.968179784627796, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.907235236066402, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.2763226860511026, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4111626592251176, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.878745336871489, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.5924061140917264, -0.878745336871489, 1.4111626592251176, 5.2763226860511026]
max_q:  5.27632268605
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.887113164724028, 0.0, 0.5282412270798406]
max_q:  3.88711316472
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.5096905317792224, 0.0, 0.5282412270798406]
max_q:  3.50969053178
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
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
random
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.14128661876654608, -0.16666666666666666, -0.06928314837550988, 3.968179784627796]
max_q:  3.96817978463
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.907235236066402, -0.05]
max_q:  3.90723523607
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.3587214786013004, -0.041666666666666664, 0.5282412270798406]
max_q:  3.3587214786
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 24
Environment.reset(): Trial set up with start = (5, 1), destination = (8, 2), deadline = 20
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.867031979860047, "(['green', None, None, None, 'right'], 'right')": 3.9692404584735366, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.910134134939327, "(['red', None, None, None, 'forward'], 'right')": -0.09290890269151139, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.638161343025551, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4040794294010912, "(['green', None, None, None, 'right'], None)": 0.14128661876654608, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4040794294010912, 4.638161343025551]
max_q:  4.63816134303
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 3.9692404584735366]
max_q:  3.96924045847
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.867031979860047, -0.041666666666666664, 0.5282412270798406]
max_q:  3.86703197986
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, -0.09290890269151139]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.910134134939327, -0.05]
max_q:  3.91013413494
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4040794294010912, 4.5997177480968]
max_q:  4.5997177481
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (6, 6), destination = (7, 3), deadline = 20
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.4936255838880377, "(['green', None, None, None, 'right'], 'right')": 4.134549666260968, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.7191207214453947, "(['red', None, None, None, 'forward'], 'right')": 0.05594906337910309, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.460404755827135, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4040794294010912, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.7191207214453947, -0.05]
max_q:  3.71912072145
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 3.731887961379695, -0.05]
max_q:  3.73188796138
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, 0.05594906337910309]
max_q:  0.0559490633791
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.134549666260968]
max_q:  4.13454966626
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4040794294010912, 5.460404755827135]
max_q:  5.46040475583
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4040794294010912, 5.136941138138497]
max_q:  5.13694113814
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, 0.651380927661561]
max_q:  0.651380927662
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4040794294010912, 4.942862967525315]
max_q:  4.94286296753
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.333100570145168]
max_q:  4.33310057015
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4040794294010912, 4.831961155746353]
max_q:  4.83196115575
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.4936255838880377, -0.041666666666666664, 0.5282412270798406]
max_q:  3.49362558389
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, 0.5137658503564309]
max_q:  0.513765850356
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4040794294010912, 4.758602170169601]
max_q:  4.75860217017
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.726993746412534]
max_q:  4.72699374641
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.687332070637037]
max_q:  4.68733207064
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.46598855689764784, -1.0, 0.4449583117038658]
max_q:  0.444958311704
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.343460571111169]
max_q:  4.34346057111
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': 'forward'}, action = left, reward = -0.5
next_waypoint:  forward
q:  [1.55, 3.344263025499234, -0.041666666666666664, 0.5282412270798406]
max_q:  3.3442630255
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (6, 6), destination = (2, 2), deadline = 40
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.012260165919230633, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.361519261670307, "(['green', None, None, None, 'right'], 'right')": 4.224646703048604, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.0, "(['red', None, None, None, 'forward'], 'right')": 0.49040663676922525, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.652958618298274, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4009576943091817, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.224646703048604]
max_q:  4.22464670305
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.361519261670307, -0.041666666666666664, 0.5282412270798406]
max_q:  3.36151926167
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.652958618298274]
max_q:  4.6529586183
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.0, -0.041666666666666664, 0.5282412270798406]
max_q:  2.0
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 2.0, -0.05]
max_q:  2.0
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0)]
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (4, 1), destination = (3, 5), deadline = 25
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.012260165919230633, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 2.25, "(['green', None, None, None, 'right'], 'right')": 4.219030535472389, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.2, "(['red', None, None, None, 'forward'], 'right')": 0.49040663676922525, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.544132181915229, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4009576943091817, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.49040663676922525]
max_q:  0.490406636769
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.544132181915229]
max_q:  4.54413218192
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (1, 6), destination = (7, 3), deadline = 45
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.012260165919230633, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 2.25, "(['green', None, None, None, 'right'], 'right')": 4.219030535472389, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.0, "(['red', None, None, None, 'forward'], 'right')": 0.5173253094153802, "(['green', None, None, None, 'left'], None)": 0.02951388888888889, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.375, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 9.326823724825712, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4009576943091817, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.375, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.02951388888888889, -0.025, 2.0, -0.05]
max_q:  2.0
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.5173253094153802]
max_q:  0.517325309415
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.0, -0.05]
max_q:  2.0
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.25, -0.041666666666666664, 0.5282412270798406]
max_q:  2.25
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.5388602475323042]
max_q:  0.538860247532
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.1, -0.05]
max_q:  2.1
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.47474107055179154]
max_q:  0.474741070552
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.0933333333333337, -0.05]
max_q:  2.09333333333
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.48418745285754927]
max_q:  0.484187452858
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.087843137254902, -0.05]
max_q:  2.08784313725
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.0832198142414864, -0.05]
max_q:  2.08321981424
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (5, 2), destination = (1, 1), deadline = 25
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 0.125, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.012260165919230633, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 2.251766374887832, "(['green', None, None, None, 'right'], 'right')": 4.219030535472389, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.539819401444789, "(['red', None, None, None, 'forward'], 'right')": 0.4920594381123474, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 9.326823724825712, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4009576943091817, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.219030535472389]
max_q:  4.21903053547
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 9.326823724825712]
max_q:  9.32682372483
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.251766374887832, -0.041666666666666664, 0.5282412270798406]
max_q:  2.25176637489
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.6888247811658736, -0.041666666666666664, 0.5282412270798406]
max_q:  2.68882478117
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.907353984304895, -0.041666666666666664, 0.5282412270798406]
max_q:  2.9073539843
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.160439878714121]
max_q:  4.16043987871
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.4920594381123474]
max_q:  0.492059438112
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.3208797574282425]
max_q:  4.32087975743
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.297959774754797]
max_q:  4.29795977475
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.144395890842709]
max_q:  4.14439589084
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.125, 0.0, 0.0]
max_q:  0.125
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (2, 1), destination = (7, 2), deadline = 30
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.012260165919230633, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 2.742022917992715, "(['green', None, None, None, 'right'], 'right')": 4.279337288832622, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.539819401444789, "(['red', None, None, None, 'forward'], 'right')": 0.5552181082596824, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.143870641239776, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4009576943091817, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.279337288832622]
max_q:  4.27933728883
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.742022917992715, -0.041666666666666664, 0.5282412270798406]
max_q:  2.74202291799
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.5552181082596824]
max_q:  0.55521810826
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.539819401444789, -0.05]
max_q:  2.53981940144
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.5970113176623015]
max_q:  0.597011317662
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.449849501203991, -0.05]
max_q:  2.4498495012
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.60298177614839]
max_q:  0.602981776148
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.393618313553492, -0.05]
max_q:  2.39361831355
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.4739373978758175, -0.05]
max_q:  2.47393739788
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.277609054129841, -0.041666666666666664, 0.5282412270798406]
max_q:  2.27760905413
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (4, 1), destination = (8, 6), deadline = 45
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.012260165919230633, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.1130983863609285, "(['green', None, None, None, 'right'], 'right')": 4.265370424390991, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.5433038797905527, "(['red', None, None, None, 'forward'], 'right')": 0.6069620818057823, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.143870641239776, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.4009576943091817, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.143870641239776]
max_q:  4.14387064124
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.137876031188118]
max_q:  4.13787603119
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.1130983863609285, -0.041666666666666664, 0.5282412270798406]
max_q:  3.11309838636
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.334823789770696, -0.041666666666666664, 0.5282412270798406]
max_q:  3.33482378977
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.6069620818057823]
max_q:  0.606962081806
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.5433038797905527, -0.05]
max_q:  2.54330387979
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.132685212195495]
max_q:  4.1326852122
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.991042873481428, -0.041666666666666664, 0.5282412270798406]
max_q:  2.99104287348
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.7041019205395151]
max_q:  0.70410192054
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.265370424390991]
max_q:  4.26537042439
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.250627623035935]
max_q:  4.25062762304
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.238096241884138]
max_q:  4.23809624188
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -1.0, 0.734824075125275]
max_q:  0.734824075125
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 4.132685212195495]
max_q:  4.1326852122
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.05263157894736842, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 3.9686325035650727]
max_q:  3.96863250357
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.8997583144511894, -0.041666666666666664, 0.5282412270798406]
max_q:  2.89975831445
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.9341408671245897, -0.041666666666666664, 0.5282412270798406]
max_q:  2.93414086712
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -0.9815961183705078, 0.6625397386617219]
max_q:  0.662539738662
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 3.978299459508563]
max_q:  3.97829945951
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.4009576943091817, 3.9788161390440733]
max_q:  3.97881613904
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.227273685434859]
max_q:  4.22727368543
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.03571428571428571, -0.05]
max_q:  0.0
count:  2
best:  [0, 1]
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -0.9815961183705078, 0.6776344331335884]
max_q:  0.677634433134
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.130435699111605]
max_q:  4.13043569911
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.127927320282536]
max_q:  4.12792732028
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
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -0.9815961183705078, 0.6885026131533323]
max_q:  0.688502613153
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.049115197309109]
max_q:  4.04911519731
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.047227096612929]
max_q:  4.04722709661
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.046489173228352]
max_q:  4.04648917323
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.8986778672543703, -0.041666666666666664, 0.5282412270798406]
max_q:  2.89867786725
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (7, 2), destination = (1, 1), deadline = 35
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.012260165919230633, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.1760607314400278, "(['green', None, None, None, 'right'], 'right')": 4.045784791815802, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.6889734918114976, "(['red', None, None, None, 'forward'], 'right')": 0.6593904991334473, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 3.984944352847408, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.045784791815802]
max_q:  4.04578479182
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -0.9815961183705078, 0.6593904991334473]
max_q:  0.659390499133
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.6889734918114976, -0.05]
max_q:  2.68897349181
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.012260165919230633, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.0122601659192
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.01103414932730757, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.0110341493273
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.01024599580392846, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.0102459958039
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00960562106618293, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00960562106618
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.1760607314400278, -0.041666666666666664, 0.5282412270798406]
max_q:  3.17606073144
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.009071975451394989, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00907197545139
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.008659612930877034, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00865961293088
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.008298795725423823, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00829879572542
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.007979611274445984, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00797961127445
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.0589082570685946, -0.041666666666666664, 0.5282412270798406]
max_q:  3.05890825707
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.007694625157501485, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.0076946251575
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.007454168121329564, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00745416812133
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00723492788246693, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00723492788247
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.007033957663509515, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00703395766351
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.090277981832975, -0.041666666666666664, 0.5282412270798406]
max_q:  3.09027798183
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.006848853514469792, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00684885351447
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.006685785573649082, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00668578557365
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.006533835901520693, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00653383590152
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.1130210322871505, -0.041666666666666664, 0.5282412270798406]
max_q:  3.11302103229
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (3, 1), destination = (7, 6), deadline = 45
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.006391795990618069, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.4833118226085196, "(['green', None, None, None, 'right'], 'right')": 4.044216773716034, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.85285180533506, "(['red', None, None, None, 'forward'], 'right')": -0.17030475043327636, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 3.984944352847408, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 3.984944352847408]
max_q:  3.98494435285
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.044216773716034]
max_q:  4.04421677372
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.4833118226085196, -0.041666666666666664, 0.5282412270798406]
max_q:  3.48331182261
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.03571428571428571, -0.05]
max_q:  0.0
count:  2
best:  [0, 1]
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.03571428571428571, -0.05]
max_q:  0.0
count:  2
best:  [0, 1]
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.03571428571428571, -0.05]
max_q:  0.0
count:  2
best:  [0, 1]
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.006391795990618069, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00639179599062
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00585914632473323, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00585914632473
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.005440635872966571, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00544063587297
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': 'forward', 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.03571428571428571, -0.05]
max_q:  0.0
count:  2
best:  [0, 1]
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.74165591130426, -0.041666666666666664, 0.5282412270798406]
max_q:  2.7416559113
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0)]
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 34
Environment.reset(): Trial set up with start = (2, 6), destination = (1, 1), deadline = 30
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.00510059613090616, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.5835554010098227, "(['green', None, None, None, 'right'], 'right')": 4.022108386858017, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.85285180533506, "(['red', None, None, None, 'forward'], 'right')": -0.17030475043327636, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 3.9864928542645166, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 3.9864928542645166]
max_q:  3.98649285426
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.022108386858017]
max_q:  4.02210838686
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (8, 2), destination = (2, 6), deadline = 50
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.00510059613090616, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.5835554010098227, "(['green', None, None, None, 'right'], 'right')": 14.011054193429008, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.85285180533506, "(['red', None, None, None, 'forward'], 'right')": -0.17030475043327636, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 3.9887257032794703, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.85285180533506, -0.05]
max_q:  2.85285180534
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.5835554010098227, -0.041666666666666664, 0.5282412270798406]
max_q:  3.58355540101
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.6182591175923378, -0.041666666666666664, 0.5282412270798406]
max_q:  3.61825911759
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00510059613090616, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00510059613091
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.3870792436505752, -0.041666666666666664, 0.5282412270798406]
max_q:  3.38707924365
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.421130396781099, -0.041666666666666664, 0.5282412270798406]
max_q:  3.42113039678
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.004781808872724525, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00478180887272
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.2792564475466253, -0.041666666666666664, 0.5282412270798406]
max_q:  3.27925644755
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.6822814442680483, -0.05]
max_q:  2.68228144427
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.1728419291645715, -0.041666666666666664, 0.5282412270798406]
max_q:  3.17284192916
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.004564453923964319, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00456445392396
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.004437663537187532, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00443766353719
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00432088291778786, -0.46598855689764784, -0.9815961183705078, -0.17030475043327636]
max_q:  0.00432088291779
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.197170107718555, -0.041666666666666664, 0.5282412270798406]
max_q:  3.19717010772
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 14.011054193429008]
max_q:  14.0110541934
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 13.793422580528379]
max_q:  13.7934225805
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 13.589392943434039]
max_q:  13.5893929434
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.1402623135615957, -0.041666666666666664, 0.5282412270798406]
max_q:  3.14026231356
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (1, 4), destination = (3, 6), deadline = 20
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.004212860844843164, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.526553752199344, "(['green', None, None, None, 'right'], 'right')": 13.404981540675692, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.7234601491346715, "(['red', None, None, None, 'forward'], 'right')": -0.11392130010536392, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 3.9887257032794703, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [1.55, 3.526553752199344, -0.041666666666666664, 0.5282412270798406]
max_q:  3.5265537522
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.004212860844843164, -0.46598855689764784, -0.9815961183705078, -0.11392130010536392]
max_q:  0.00421286084484
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.002106430422421582, -0.46598855689764784, -0.9815961183705078, -0.11392130010536392]
max_q:  0.00210643042242
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.4700927402816806, -0.041666666666666664, 0.5282412270798406]
max_q:  3.47009274028
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 13.404981540675692]
max_q:  13.4049815407
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0015798228168161866, -0.46598855689764784, -0.9815961183705078, -0.11392130010536392]
max_q:  0.00157982281682
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.5584106169014005, -0.041666666666666664, 0.5282412270798406]
max_q:  3.5584106169
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (4, 2), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.001421840535134568, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 5.261876398826283, "(['green', None, None, None, 'right'], 'right')": 11.052326868416703, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.7234601491346715, "(['red', None, None, None, 'forward'], 'right')": -0.11392130010536392, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 3.9887257032794703, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 3.9887257032794703]
max_q:  3.98872570328
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 11.052326868416703]
max_q:  11.0523268684
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.578298658434283]
max_q:  4.57829865843
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.7234601491346715, -0.05]
max_q:  2.72346014913
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.001421840535134568, -0.46598855689764784, -0.9815961183705078, -0.11392130010536392]
max_q:  0.00142184053513
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.001244110468242747, -0.46598855689764784, -0.9815961183705078, -0.11392130010536392]
max_q:  0.00124411046824
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 5.261876398826283, -0.041666666666666664, 0.5282412270798406]
max_q:  5.26187639883
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.361436661521427]
max_q:  4.36143666152
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.338846870176338]
max_q:  4.33884687018
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.718323640640355, -0.041666666666666664, 0.5282412270798406]
max_q:  4.71832364064
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (7, 4), destination = (8, 1), deadline = 20
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0011196994214184724, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 5.594763475156703, "(['green', None, None, None, 'right'], 'right')": 4.289149329217142, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.4823067660897813, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.317261069557698, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.317261069557698]
max_q:  4.31726106956
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.4823067660897813, -0.05]
max_q:  2.48230676609
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, 0.0, -0.041666666666666664]
max_q:  0.0
count:  2
best:  [0, 2]
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 5.594763475156703, -0.041666666666666664, 0.5282412270798406]
max_q:  5.59476347516
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0011196994214184724, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.00111969942142
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (1, 4), destination = (2, 1), deadline = 20
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0009797369937411635, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 5.917454453705806, "(['green', None, None, None, 'right'], 'right')": 4.289149329217142, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.0, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.301562305471413, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.0, -0.05]
max_q:  2.0
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.2, -0.05]
max_q:  2.2
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 5.917454453705806, -0.041666666666666664, 0.5282412270798406]
max_q:  5.91745445371
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0009797369937411635, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000979736993741
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 5.525757995184912, -0.041666666666666664, 0.5282412270798406]
max_q:  5.52575799518
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0)]
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (8, 3), destination = (3, 4), deadline = 30
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.000935203494025656, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 6.065317129065086, "(['green', None, None, None, 'right'], 'right')": 4.289149329217142, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.177777777777778, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.301562305471413, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [0.000935203494025656, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000935203494026
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.000896236681774587, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000896236681775
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0004481183408872935, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000448118340887
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 6.065317129065086, -0.041666666666666664, 0.5282412270798406]
max_q:  6.06531712907
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 5.505960406609958, -0.041666666666666664, 0.5282412270798406]
max_q:  5.50596040661
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 5.355364365948963, -0.041666666666666664, 0.5282412270798406]
max_q:  5.35536436595
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 5.242417335453217, -0.041666666666666664, 0.5282412270798406]
max_q:  5.24241733545
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.301562305471413]
max_q:  4.30156230547
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.284808844056334]
max_q:  4.28480884406
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.289149329217142]
max_q:  4.28914932922
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.177777777777778, -0.05]
max_q:  2.17777777778
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (1, 5), destination = (8, 2), deadline = 50
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.0003360887556654701, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.803292201500272, "(['green', None, None, None, 'right'], 'right')": 4.275171455020653, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.9051851851851858, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.2707854261115585, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.46598855689764784, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.275171455020653]
max_q:  4.27517145502
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.265999073186632]
max_q:  4.26599907319
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.803292201500272, -0.041666666666666664, 0.5282412270798406]
max_q:  4.8032922015
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0003360887556654701, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000336088755665
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00028007396305455845, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000280073963055
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.4017301229390524, -0.041666666666666664, 0.5282412270798406]
max_q:  3.40173012294
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.1214086048230096, -0.041666666666666664, 0.5282412270798406]
max_q:  3.12140860482
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.1946245544210923, -0.041666666666666664, 0.5282412270798406]
max_q:  3.19462455442
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.252151371962443, -0.041666666666666664, 0.5282412270798406]
max_q:  3.25215137196
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00024506471767273864, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000245064717673
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00023145001113536427, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000231450011135
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00021987751057859605, -0.46598855689764784, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000219877510579
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.095647767011992, -0.041666666666666664, 0.5282412270798406]
max_q:  3.09564776701
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [1.55, 3.1333291100531593, -0.041666666666666664, 0.5282412270798406]
max_q:  3.13332911005
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0)]
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (2, 6), destination = (2, 2), deadline = 20
RoutePlanner.route_to(): destination = (2, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.00020988307827956895, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.749085287880789, "(['green', None, None, None, 'right'], 'right')": 4.132999536593315, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.835555555555556, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.2707854261115585, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.2707854261115585]
max_q:  4.27078542611
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.132999536593315]
max_q:  4.13299953659
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.066499768296658]
max_q:  4.0664997683
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.835555555555556, -0.05]
max_q:  2.83555555556
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.749085287880789, -0.041666666666666664, 0.5282412270798406]
max_q:  3.74908528788
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00020988307827956895, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  0.00020988307828
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00019489142983102832, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000194891429831
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00018271071546658904, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000182710715467
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.457588563490514, -0.041666666666666664, 0.5282412270798406]
max_q:  3.45758856349
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (1, 2), destination = (7, 1), deadline = 35
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 0.00017256012016288966, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.484709135315988, "(['green', None, None, None, 'right'], 'right')": 4.097541479712637, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.668444444444445, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.257166382257232, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.668444444444445, -0.05]
max_q:  2.66844444444
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.00017256012016288966, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  0.000172560120163
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.628006008144483e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  8.62800600814e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.471004506108363e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  6.47100450611e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.484709135315988, -0.041666666666666664, 0.5282412270798406]
max_q:  4.48470913532
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.392503755090303e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  5.39250375509e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.863538592116685, -0.041666666666666664, 0.5282412270798406]
max_q:  3.86353859212
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.5065924238968964e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  4.5065924239e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.552952871141721, -0.041666666666666664, 0.5282412270798406]
max_q:  3.55295287114
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.5777888227449584, -0.041666666666666664, 0.5282412270798406]
max_q:  3.57778882274
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.5988993816077106, -0.041666666666666664, 0.5282412270798406]
max_q:  3.59889938161
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.601600000000001, -0.05]
max_q:  2.6016
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (1, 2), destination = (4, 5), deadline = 30
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 4.2249303974033405e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 0.3752797680644168, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.453546812793554, "(['green', None, None, None, 'right'], 'right')": 4.097541479712637, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.3848000000000007, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.257166382257232, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [1.55, 3.453546812793554, -0.041666666666666664, 0.5282412270798406]
max_q:  3.45354681279
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.4763156955938226, -0.041666666666666664, 0.5282412270798406]
max_q:  3.47631569559
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.3752797680644168, 0.0, 0.0]
max_q:  0.375279768064
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.097541479712637]
max_q:  4.09754147971
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.187639884032208, -0.041666666666666664, 0.5282412270798406]
max_q:  2.18763988403
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.414184898528182, -0.041666666666666664, 0.5282412270798406]
max_q:  2.41418489853
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0)]
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (2, 5), destination = (6, 6), deadline = 25
RoutePlanner.route_to(): destination = (6, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 4.2249303974033405e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 4.572766408675364, "(['green', None, None, None, 'right'], 'right')": 4.081284566427198, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.3848000000000007, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.257166382257232, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 3.3848000000000007, -0.05]
max_q:  3.3848
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [4.2249303974033405e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  4.2249303974e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.872852864286396e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  3.87285286429e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.596220516837368e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  3.59622051684e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.572766408675364, -0.041666666666666664, 0.5282412270798406]
max_q:  4.57276640868
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.371456734535033e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  3.37145673454e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.202883897808281e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  3.20288389781e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.286905347409621, -0.041666666666666664, 0.5282412270798406]
max_q:  4.28690534741
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.057298266089723e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  3.05729826609e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.9397098712401185e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.93970987124e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.257166382257232]
max_q:  4.25716638226
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 6), deadline = 35
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.5282412270798406, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 2.8347202329815426e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, None, 'forward'], 'forward')": 3.9565755199127537, "(['green', None, None, None, 'right'], 'right')": 4.081284566427198, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.446320000000001, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.8686336260670044, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": -0.041666666666666664, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.8686336260670044]
max_q:  4.86863362607
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 3.446320000000001, -0.05]
max_q:  3.44632
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.8347202329815426e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.83472023298e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.3622668608179525e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.36226686082e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.081284566427198]
max_q:  4.08128456643
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.9565755199127537, 0.26232421865794203, 1.4782877599563768]
max_q:  3.95657551991
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.0669835032157086e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.06698350322e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.9377970342647268e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.93779703426e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.5]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.074510852558264]
max_q:  4.07451085256
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.100197870328346]
max_q:  4.10019787033
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.7231600000000005, -0.05]
max_q:  2.72316
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.5093605020643412, 0.26232421865794203, 1.4782877599563768]
max_q:  3.50936050206
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (5, 4), destination = (8, 2), deadline = 25
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 1.4782877599563768, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 1.781980021275604e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.021626489512732, "(['green', None, None, None, 'right'], 'right')": 4.119775003393056, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.682984444444445, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.787709732598, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.021085827274914, 0.26232421865794203, 1.4782877599563768]
max_q:  4.02108582727
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.781980021275604e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.78198002128e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.3364850159567029e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.33648501596e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.000008909900106, 0.26232421865794203, 1.4782877599563768]
max_q:  2.0000089099
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.682984444444445, -0.05]
max_q:  2.68298444444
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.1137375132972525e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.1137375133e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0209260538558149e-05, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.02092605386e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.480027642946853e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  9.48002764295e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.000008074596971, 0.26232421865794203, 1.4782877599563768]
max_q:  2.0000080746
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (8, 3), destination = (5, 6), deadline = 30
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 1.4782877599563768, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 8.887525915262675e-06, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.1111187822820803, "(['green', None, None, None, 'right'], 'right')": 4.119775003393056, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.5537486666666673, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.787709732598, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.787709732598]
max_q:  4.7877097326
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.743948080787]
max_q:  4.74394808079
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.16666666666666666, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.887525915262675e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  8.88752591526e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.1111187822820803, 0.26232421865794203, 1.4782877599563768]
max_q:  3.11111878228
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.2222289344968202, 0.26232421865794203, 1.4782877599563768]
max_q:  3.2222289345
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.5537486666666673, -0.05]
max_q:  2.55374866667
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.3000060410471383, 0.26232421865794203, 1.4782877599563768]
max_q:  3.30000604105
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (1, 2), destination = (8, 3), deadline = 40
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 1.4782877599563768, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 7.40627159605223e-06, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.7785770381152, "(['green', None, None, None, 'right'], 'right')": 4.119775003393056, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.6742696111111117, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.3719740403935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.6742696111111117, -0.05]
max_q:  2.67426961111
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [7.40627159605223e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  7.40627159605e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.703135798026115e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  3.70313579803e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.7773518485195862e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.77735184852e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.7785770381152, 0.26232421865794203, 1.4782877599563768]
max_q:  4.77857703812
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.6812549083508, 0.26232421865794203, 1.4782877599563768]
max_q:  4.68125490835
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.1450041581266275, 0.26232421865794203, 1.4782877599563768]
max_q:  4.14500415813
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.5779453809523813, -0.05]
max_q:  2.57794538095
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.314459873766322e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.31445987377e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.132920478282742, 0.26232421865794203, 1.1956753881383142]
max_q:  4.13292047828
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.127382125020961, 0.26232421865794203, 1.1956753881383142]
max_q:  4.12738212502
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (4, 6), destination = (6, 4), deadline = 20
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 1.1956753881383142, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 2.2092571522314896e-06, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.732968200375393, "(['green', None, None, None, 'right'], 'right')": 4.119775003393056, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.5201508428571433, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.3719740403935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [1.55, 4.732968200375393, 0.26232421865794203, 1.1956753881383142]
max_q:  4.73296820038
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.2092571522314896e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.20925715223e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1046285761157448e-06, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.10462857612e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.522739962241023, 0.26232421865794203, 1.1956753881383142]
max_q:  4.52273996224
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.5201508428571433, -0.05]
max_q:  2.52015084286
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [8.284714320868086e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  8.28471432087e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.594321460795746e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  7.5943214608e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.051869927881765e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  7.05186992788e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.681826779572588, 0.26232421865794203, 1.1956753881383142]
max_q:  3.68182677957
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (5, 1), destination = (8, 3), deadline = 25
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 1.1956753881383142, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 6.611128057389154e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.6060682852374555, "(['green', None, None, None, 'right'], 'right')": 4.119775003393056, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.668135758571429, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.3719740403935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.3719740403935]
max_q:  4.37197404039
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.6060682852374555, 0.26232421865794203, 1.1956753881383142]
max_q:  4.60606828524
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.303034142618728, 0.26232421865794203, 1.1956753881383142]
max_q:  4.30303414262
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.119775003393056]
max_q:  4.11977500339
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [6.611128057389154e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  6.61112805739e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.1360662953147145]
max_q:  4.13606629531
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.124727437371822]
max_q:  4.12472743737
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.337297758316058]
max_q:  4.33729775832
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.151517236587565, 0.26232421865794203, 0.8565403683580218]
max_q:  3.15151723659
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (6, 5), destination = (1, 2), deadline = 40
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.8565403683580218, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 5.78473705021551e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.3097662789993665, "(['green', None, None, None, 'right'], 'right')": 4.131001929055566, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.668135758571429, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.303323159092524, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [1.55, 4.3097662789993665, 0.26232421865794203, 0.8565403683580218]
max_q:  4.309766279
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.78473705021551e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  5.78473705022e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.892368525107755e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.89236852511e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.053125613470198, 0.26232421865794203, 0.8565403683580218]
max_q:  4.05312561347
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, 0.0, -0.041666666666666664]
max_q:  0.0
count:  2
best:  [0, 2]
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, -0.25, -0.041666666666666664]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, -0.25, -0.041666666666666664]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, -0.25, -0.041666666666666664]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.044271344558498, 0.26232421865794203, 0.8565403683580218]
max_q:  4.04427134456
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.7887374400466634, 0.26232421865794203, 0.8565403683580218]
max_q:  3.78873744005
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.1692763938308164e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.16927639383e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.0608125741392757e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  2.06081257414e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.967139275314763e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.96713927531e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.8851751388433144e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.88517513884e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.812668402733956e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.81266840273e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.80047424893296, 0.26232421865794203, 0.8565403683580218]
max_q:  3.80047424893
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.131001929055566]
max_q:  4.13100192906
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.8071251073018613, 0.26232421865794203, 0.8565403683580218]
max_q:  3.8071251073
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.699376627563084e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.69937662756e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6546561899956346e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.65465619e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.8127978982635713, 0.26232421865794203, 0.8565403683580218]
max_q:  3.81279789826
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (1, 5), destination = (8, 6), deadline = 40
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.8565403683580218, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 1.6132897852457436e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.293445567352534, "(['green', None, None, None, 'right'], 'right')": 4.12690811877258, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.668135758571429, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.303323159092524, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.303323159092524]
max_q:  4.30332315909
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.29610117911413]
max_q:  4.29610117911
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.293445567352534, 0.26232421865794203, 0.8565403683580218]
max_q:  4.29344556735
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.220084175514401, 0.26232421865794203, 0.8565403683580218]
max_q:  4.22008417551
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6132897852457436e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.61328978525e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4116285620900256e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.41162856209e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.480056143897764, 0.26232421865794203, 0.8565403683580218]
max_q:  3.4800561439
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.2704657058810232e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.27046570588e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1797181554609502e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.17971815546e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1059857707446408e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.10598577074e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.233380130502018, 0.26232421865794203, 0.8565403683580218]
max_q:  3.2333801305
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0445421168143829e-07, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  1.04454211681e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.1100421226745265, 0.26232421865794203, 0.8565403683580218]
max_q:  3.11004212267
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [9.970629296864564e-08, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  9.97062929686e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [9.587143554677466e-08, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  9.58714355468e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.0175386166060783, 0.26232421865794203, 0.8565403683580218]
max_q:  3.01753861661
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.12690811877258]
max_q:  4.12690811877
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.0482405348371384, 0.26232421865794203, 0.8565403683580218]
max_q:  3.04824053484
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (6, 4), destination = (2, 4), deadline = 20
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.8565403683580218, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 9.267572102854884e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.6302338533138845, "(['green', None, None, None, 'right'], 'right')": 4.1231755270439745, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.668135758571429, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.06345405938629, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.1231755270439745]
max_q:  4.12317552704
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.119753984626086]
max_q:  4.11975398463
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.6302338533138845, 0.26232421865794203, 0.8565403683580218]
max_q:  3.63023385331
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [9.267572102854884e-08, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  9.26757210285e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.815116949825873, 0.26232421865794203, 0.8565403683580218]
max_q:  2.81511694983
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [7.722976752379071e-08, -0.5041247355807345, -0.9815961183705078, -0.1689954215602106]
max_q:  7.72297675238e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.6113377220231255, 0.26232421865794203, 0.8565403683580218]
max_q:  2.61133772202
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.06345405938629]
max_q:  4.06345405939
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (1, 2), destination = (2, 5), deadline = 20
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.8565403683580218, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 6.950679077141164e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 2.5094481074781707, "(['green', None, None, None, 'right'], 'right')": 4.059876992313043, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.668135758571429, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.487493055144412, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9815961183705078, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.668135758571429, -0.05]
max_q:  2.66813575857
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 5.487493055144412]
max_q:  5.48749305514
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [6.950679077141164e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.95067907714e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.45420200020251e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.4542020002e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.050814375189854e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.05081437519e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 2.5094481074781707, 0.26232421865794203, 0.8565403683580218]
max_q:  2.50944810748
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 2.5839757021042624, 0.26232421865794203, 0.8565403683580218]
max_q:  2.5839757021
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (7, 1), destination = (4, 5), deadline = 35
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.8565403683580218, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 5.7146580210126395e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.439977911003875, "(['green', None, None, None, 'right'], 'right')": 4.059876992313043, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.501101818928572, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 5.3387437496299714, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3877807421193276, "(['green', None, None, None, 'right'], None)": 1.9846202292367683, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.26232421865794203, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [1.9846202292367683, -0.16666666666666666, -0.06928314837550988, 4.059876992313043]
max_q:  4.05987699231
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 5.3387437496299714]
max_q:  5.33874374963
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.439977911003875, 0.26232421865794203, 0.8565403683580218]
max_q:  3.439977911
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.7146580210126395e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  5.71465802101e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.501101818928572, -0.05]
max_q:  2.50110181893
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [5.143192218911375e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  5.14319221891e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.821742705229414e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  4.82174270523e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3877807421193276, 4.90202171822736]
max_q:  4.90202171823
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 4.638201562024872]
max_q:  4.63820156202
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.429515844795919, -0.05]
max_q:  2.4295158448
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (7, 6), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.8565403683580218, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 4.5538681104944466e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.05789473684210526, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.156651487029876, "(['green', None, None, None, 'right'], 'right')": 4.057155310844268, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.1485319833027217, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.613655348100839, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.16666666666666666, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.057155310844268]
max_q:  4.05715531084
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [4.5538681104944466e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  4.55386811049e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.415401082870835e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  3.41540108287e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.156651487029876, 0.1860917990690819, 0.8565403683580218]
max_q:  3.15665148703
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.05789473684210526]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [2.846167569059029e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  2.84616756906e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.2620700511511416, 0.1860917990690819, 0.8565403683580218]
max_q:  3.26207005115
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 3.3030661594205224, 0.1860917990690819, 0.8565403683580218]
max_q:  3.30306615942
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 4), deadline = 25
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.8565403683580218, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 2.6682820959928394e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.337912851449497, "(['green', None, None, None, 'right'], 'right')": 4.306827674050419, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.1485319833027217, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.613655348100839, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 3.1485319833027217, -0.05]
max_q:  3.1485319833
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.6682820959928394e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  2.66828209599e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.0012115719946295e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  2.00121157199e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.337912851449497, 0.1860917990690819, 0.9377819740946944]
max_q:  4.33791285145
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6676763099955246e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.66767631e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.500908678995972e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.500908679e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.3758329557463078e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.37583295575e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.2775591731930002e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.27755917319e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1977117248684376e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.19771172487e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.29567374501831, 0.1860917990690819, 0.9377819740946944]
max_q:  4.29567374502
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.280890057767395, 0.1860917990690819, 0.9377819740946944]
max_q:  4.28089005777
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.268122327868876, 0.1860917990690819, 0.9377819740946944]
max_q:  4.26812232787
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.0, -0.05]
max_q:  2.0
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (2, 2), destination = (1, 6), deadline = 25
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.9377819740946944, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 1.1311721845979688e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.256950564207672, "(['green', None, None, None, 'right'], 'right')": 4.306827674050419, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.8461538461538463, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.613655348100839, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.8461538461538463, -0.05]
max_q:  2.84615384615
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.6346153846153846, -0.05]
max_q:  2.63461538462
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.256950564207672, 0.1860917990690819, 0.9377819740946944]
max_q:  4.25695056421
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.006178279924137, 0.1860917990690819, 0.9377819740946944]
max_q:  4.00617827992
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.16666666666666666, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1311721845979688e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.1311721846e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.08404001023972e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.08404001024e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0423461636920384e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.04234616369e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 3.8055604524973097, 0.1860917990690819, 0.9377819740946944]
max_q:  3.8055604525
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (1, 6), destination = (5, 2), deadline = 40
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 0.9377819740946944, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 1.0051195149887514e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.351856422665862, "(['green', None, None, None, 'right'], 'right')": 4.306827674050419, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.5552884615384617, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'right')": 4.613655348100839, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 4.613655348100839]
max_q:  4.6136553481
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 4.582972580695797]
max_q:  4.5829725807
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.306827674050419]
max_q:  4.30682767405
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0051195149887514e-08, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  1.00511951499e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.046075634898761e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  9.0460756349e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.292235998657198e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  8.29223599866e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.351856422665862, 0.1860917990690819, 1.675928211332931]
max_q:  4.35185642267
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [7.699933427324541e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  7.69993342732e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.2721593480287335e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  7.27215934803e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.908551380627297e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.90855138063e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.329865396249246, 0.1860917990690819, 1.675928211332931]
max_q:  4.32986539625
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.316121004738861, 0.1860917990690819, 1.675928211332931]
max_q:  4.31612100474
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.5552884615384617, -0.275]
max_q:  2.55528846154
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.303962504556597, 0.1860917990690819, 1.675928211332931]
max_q:  4.30396250456
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.293830421071377, 0.1860917990690819, 1.675928211332931]
max_q:  4.29383042107
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [6.59452631787151e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.59452631787e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.4005696614635245e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.40056966146e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.222776059756204e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.22277605976e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.55, 4.150466019960494, 0.1860917990690819, 1.675928211332931]
max_q:  4.15046601996
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (1, 2), destination = (7, 3), deadline = 35
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.55, "(['red', None, None, None, 'forward'], None)": 6.059018795025778e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.646704369461482, "(['green', None, None, None, 'right'], 'right')": 4.29084706602696, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.515625, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['red', None, None, None, 'right'], 'right')": 4.4858104839131645, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 4.4858104839131645]
max_q:  4.48581048391
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.646704369461482, 0.1860917990690819, 1.675928211332931]
max_q:  4.64670436946
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.55, 4.323352184730741, 0.1860917990690819, 1.675928211332931]
max_q:  4.32335218473
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 3.161676093880125, 0.1860917990690819, 1.675928211332931]
max_q:  3.16167609388
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 3.2664665821451093, 0.1860917990690819, 1.675928211332931]
max_q:  3.26646658215
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = -1.0
next_waypoint:  forward
q:  [6.059018795025778e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  6.05901879503e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.626231738238223e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  5.62623173824e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.274592254598334e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  5.2745922546e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 3.0131732663219895, 0.1860917990690819, 1.675928211332931]
max_q:  3.01317326632
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 4.46879113636818]
max_q:  4.46879113637
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (5, 2), destination = (1, 1), deadline = 25
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.3402609054129844, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 4.981559351565093e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 2.9118559399388686, "(['green', None, None, None, 'right'], 'right')": 4.29084706602696, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.515625, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['red', None, None, None, 'right'], 'right')": 5.356573357442354, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 2.515625, -0.275]
max_q:  2.515625
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 2.9118559399388686, 0.1860917990690819, 1.675928211332931]
max_q:  2.91185593994
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
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 1.3402609054129844, 0.0, 0.0]
max_q:  1.34026090541
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [4.981559351565093e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  4.98155935157e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 2.4559279699694345, 0.1860917990690819, 1.675928211332931]
max_q:  2.45592796997
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (2, 3), destination = (5, 4), deadline = 20
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 4.483403416408584e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.251267305805315, "(['green', None, None, None, 'right'], 'right')": 4.29084706602696, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.2578125, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.356573357442354, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.29084706602696]
max_q:  4.29084706603
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.266609810524713]
max_q:  4.26660981052
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [4.483403416408584e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  4.48340341641e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.251267305805315, 0.1860917990690819, 1.675928211332931]
max_q:  4.25126730581
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.362552562306438e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  3.36255256231e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.942233492018133e-09, -0.5041247355807345, -0.9846634261831906, -0.1689954215602106]
max_q:  2.94223349202e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 3.500844871097302, 0.1860917990690819, 1.675928211332931]
max_q:  3.5008448711
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.678286678721177]
max_q:  4.67828667872
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 3.5424411318391935, 0.1860917990690819, 1.675928211332931]
max_q:  3.54244113184
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (3, 4), destination = (6, 1), deadline = 30
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 2.64801014281632e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.599635990524795, "(['green', None, None, None, 'right'], 'right')": 4.629837630241093, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.2578125, "(['red', None, None, None, 'forward'], 'right')": -0.1689954215602106, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.356573357442354, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9846634261831906, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.5041247355807345, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 5.356573357442354]
max_q:  5.35657335744
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [2.64801014281632e-09, -0.999999998675995, -0.9846634261831906, -0.1689954215602106]
max_q:  2.64801014282e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.599635990524795, 0.1860917990690819, 1.675928211332931]
max_q:  4.59963599052
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.499696658770663, 0.1860917990690819, 1.675928211332931]
max_q:  4.49969665877
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 3.2578125, -0.275]
max_q:  3.2578125
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 5.271787522602207]
max_q:  5.2717875226
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 5.1923008024395685]
max_q:  5.19230080244
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.629837630241093]
max_q:  4.62983763024
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.437234576424331, 0.1860917990690819, 1.675928211332931]
max_q:  4.43723457642
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.98600760711224e-09, -0.999999998675995, -0.9872195216538249, -0.21628178976689427]
max_q:  1.98600760711e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 5.094813914959676]
max_q:  5.09481391496
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.598345748729039]
max_q:  4.59834574873
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5924061140917264, -0.7217577648440416, 1.3820574120270865, 5.055713417996831]
max_q:  5.055713418
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.215667796839664, 0.1860917990690819, 1.675928211332931]
max_q:  4.21566779684
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (5, 1), destination = (6, 4), deadline = 20
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 1.9032572901492296e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.5924061140917264, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.683483891012778, "(['green', None, None, None, 'right'], 'right')": 4.578400890438071, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.00625, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.007806357198219, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9872195216538249, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [1.5602793489800209, 4.683483891012778, 0.1860917990690819, 1.675928211332931]
max_q:  4.68348389101
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.007806357198219]
max_q:  5.0078063572
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.525631897479769, 0.1860917990690819, 1.675928211332931]
max_q:  4.52563189748
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.9032572901492296e-09, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  1.90325729015e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6653501288805759e-09, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  1.66535012888e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4988151159925186e-09, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  1.49881511599e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.3739138563264755e-09, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  1.37391385633e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.438026581233141, 0.1860917990690819, 1.675928211332931]
max_q:  4.43802658123
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 66
Environment.reset(): Trial set up with start = (7, 3), destination = (1, 3), deadline = 30
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 1.2757771523031558e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.12105263157894737, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 5.383273258658734, "(['green', None, None, None, 'right'], 'right')": 4.578400890438071, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.00625, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.648503401208627, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9872195216538249, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.12105263157894737]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.648503401208627]
max_q:  4.64850340121
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.005075545599805]
max_q:  4.0050755456
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.2757771523031558e-09, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  1.2757771523e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.169462389611226e-09, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  1.16946238961e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 5.383273258658734, 0.1860917990690819, 1.675928211332931]
max_q:  5.38327325866
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0255999527939723e-09, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  1.02559995279e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.743199551542738e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  9.74319955154e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 5.296818679992564, 0.1860917990690819, 1.675928211332931]
max_q:  5.29681867999
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 5.242784568326206, 0.1860917990690819, 1.675928211332931]
max_q:  5.24278456833
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 5.194985161852121, 0.1860917990690819, 1.675928211332931]
max_q:  5.19498516185
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [9.300326844654432e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  9.30032684465e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.990315949832618e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  8.99031594983e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.709368576400349e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  8.7093685764e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [8.453210677094455e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  8.45321067709e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 5.152307120357402, 0.1860917990690819, 1.675928211332931]
max_q:  5.15230712036
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [8.230757764539338e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  8.23075776454e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.034787341574115e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  8.03478734157e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.852178538356523e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  7.85217853836e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 5.001973014339531, 0.1860917990690819, 1.675928211332931]
max_q:  5.00197301434
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.004567991039825]
max_q:  4.00456799104
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (8, 1), destination = (7, 5), deadline = 25
RoutePlanner.route_to(): destination = (7, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 7.68147900491399e-10, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.24736842105263157, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.9810985765407905, "(['green', None, None, None, 'right'], 'right')": 4.578400890438071, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.00625, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.4159532892069935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9872195216538249, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.578400890438071]
max_q:  4.57840089044
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 3.00625, -0.275]
max_q:  3.00625
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.9810985765407905, 0.1860917990690819, 1.675928211332931]
max_q:  4.98109857654
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [7.68147900491399e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  7.68147900491e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.04135575450449e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  7.0413557545e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.538401772039885e-10, -0.999999998675995, -0.9872195216538249, -0.23810626740393098]
max_q:  6.53840177204e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.384878861309447, 0.1860917990690819, 1.675928211332931]
max_q:  4.38487886131
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [6.129751661287392e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  6.12975166129e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.146390975209152, 0.1860917990690819, 1.675928211332931]
max_q:  4.14639097521
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (6, 3), destination = (3, 2), deadline = 20
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 5.851126585774328e-10, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.24736842105263157, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.800858393966102, "(['green', None, None, None, 'right'], 'right')": 4.563583920604688, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.1304687500000004, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.4159532892069935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.13734567901234568, -0.025, 3.1304687500000004, -0.275]
max_q:  3.13046875
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [5.851126585774328e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.85112658577e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.266013927196895e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.2660139272e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.827179433263821e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.82717943326e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.482380902316405e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.48238090232e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.20223209592163e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.20223209592e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.800858393966102, 0.1860917990690819, 1.675928211332931]
max_q:  4.80085839397
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.7608154742677975, 0.1860917990690819, 1.675928211332931]
max_q:  4.76081547427
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 4.563583920604688]
max_q:  4.5635839206
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0)]
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (7, 1), destination = (4, 4), deadline = 30
RoutePlanner.route_to(): destination = (4, 4)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5602793489800209, "(['red', None, None, None, 'forward'], None)": 3.968774757259317e-10, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.24736842105263157, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.726232952710171, "(['green', None, None, None, 'right'], 'right')": 5.367283314271255, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.2391601562500005, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.4159532892069935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 5.367283314271255]
max_q:  5.36728331427
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [3.968774757259317e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.96877475726e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -1.0
next_waypoint:  forward
q:  [1.9843873786296584e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.98438737863e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.726232952710171, 0.1860917990690819, 1.675928211332931]
max_q:  4.72623295271
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6536561488580487e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.65365614886e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.488290533972244e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.48829053397e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.3642663228078903e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.36426632281e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.2668187283216124e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.26681872832e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1876425578015115e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.1876425578e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5602793489800209, 4.08681006397828, 0.1860917990690819, 1.675928211332931]
max_q:  4.08681006398
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.24736842105263157]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [1.1216624157014275e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.1216624157e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0816030437120909e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.08160304371e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5839534227183338, 3.8781290575860603, 0.1860917990690819, 1.675928211332931]
max_q:  3.87812905759
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5839534227183338, 3.881713497068823, 0.1860917990690819, 1.675928211332931]
max_q:  3.88171349707
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (1, 1), destination = (4, 2), deadline = 20
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.5839534227183338, "(['red', None, None, None, 'forward'], None)": 1.0455496089216879e-10, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.332729413901237, "(['green', None, None, None, 'right'], 'right')": 5.270674425132275, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.2391601562500005, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.4159532892069935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 5.270674425132275]
max_q:  5.27067442513
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0455496089216879e-10, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.04554960892e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.2277480446084396e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.22774804461e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5839534227183338, 4.332729413901237, 0.1860917990690819, 1.675928211332931]
max_q:  4.3327294139
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.92081103345633e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.92081103346e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.430709654274289e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.43070965427e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.08763868884686e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.08763868885e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.830335464776288e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.83033546478e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.2772745115843644, 0.1860917990690819, 1.675928211332931]
max_q:  4.27727451158
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 5.211635659547342]
max_q:  5.21163565955
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (3, 2), destination = (4, 6), deadline = 25
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.6281686458636962e-11, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.0242440102986725, "(['green', None, None, None, 'right'], 'right')": 6.111269758052957, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.2391601562500005, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.4159532892069935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 6.111269758052957]
max_q:  6.11126975805
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.0242440102986725, 0.1860917990690819, 1.675928211332931]
max_q:  4.0242440103
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.6281686458636962e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.62816864586e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.190140538219747e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.19014053822e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.916372970942279e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.91637297094e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.018183007724005, 0.1860917990690819, 1.675928211332931]
max_q:  4.01818300772
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.7247356738480508e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.72473567385e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.681819173104775, 0.1860917990690819, 1.675928211332931]
max_q:  3.6818191731
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (4, 1), destination = (1, 6), deadline = 40
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.6015402685731902e-11, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.951705474785727, "(['green', None, None, None, 'right'], 'right')": 5.002853135075155, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.2391601562500005, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.13734567901234568, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.4159532892069935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.33708279556521303, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [1.6015402685731902e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.60154026857e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5014440017873656e-11, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.50144400179e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.507220008936828e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  7.50722000894e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.6304150067026216e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.6304150067e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.692012505585518e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.69201250559e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.951705474785727, 0.1860917990690819, 1.675928211332931]
max_q:  4.95170547479
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [4.1055109423873285e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.10551094239e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.763385030521718e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.76338503052e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.361364379828992, 0.1860917990690819, 1.675928211332931]
max_q:  4.36136437983
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.4945718140558815e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.49457181406e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.3004289354972214e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.3004289355e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.1354074887223605e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.13540748872e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.33877910608968, 0.1860917990690819, 1.675928211332931]
max_q:  4.33877910609
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.2513637097133191, -0.025, 3.2391601562500005, -0.275]
max_q:  3.23916015625
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.9928889665077074e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.99288896651e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.3246633100026095, 0.1860917990690819, 1.675928211332931]
max_q:  4.32466331
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.3145175815650285, 0.1860917990690819, 1.675928211332931]
max_q:  4.31451758157
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.8931260009574506e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.89312600096e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.16666666666666666, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.33708279556521303, -0.03571428571428571, -0.05]
max_q:  0.337082795565
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.812761389819744e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.81276138982e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.745790880538321e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.74579088054e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.6833865423442685e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.68338654234e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.625052052293306e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.62505205229e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.178369488531876, 0.1860917990690819, 1.675928211332931]
max_q:  4.17836948853
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (4, 5), destination = (7, 6), deadline = 20
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.570363467870529e-12, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.491234708990652, "(['green', None, None, None, 'right'], 'right')": 5.002853135075155, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.150648716517858, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.2513637097133191, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.4159532892069935, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [2.570363467870529e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.57036346787e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.5189561985131184e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  2.51895619851e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.2594780992565592e-12, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  1.25947809926e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.446085744424194e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  9.44608574442e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.491234708990652, 0.1860917990690819, 1.675928211332931]
max_q:  4.49123470899
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.429830370366821, 0.1860917990690819, 1.675928211332931]
max_q:  4.42983037037
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.943864296293535, 0.1860917990690819, 1.675928211332931]
max_q:  3.94386429629
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.4159532892069935]
max_q:  4.41595328921
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 5), deadline = 35
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 7.871738120353496e-13, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.6198869135780116, "(['green', None, None, None, 'right'], 'right')": 5.002853135075155, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.150648716517858, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.2513637097133191, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.856735186111363, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6926839258951891, -0.025, 3.150648716517858, -0.275]
max_q:  3.15064871652
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [7.871738120353496e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  7.87173812035e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.084564308318147e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  7.08456430832e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.494183949291635e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  6.49418394929e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.6198869135780116, 0.1860917990690819, 1.675928211332931]
max_q:  3.61988691358
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.643643981479386, 0.1860917990690819, 1.675928211332931]
max_q:  3.64364398148
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.6926839258951891, -0.025, 2.8629865373883936, -0.275]
max_q:  2.86298653739
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.4610168724261543, 0.1860917990690819, 1.675928211332931]
max_q:  3.46101687243
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [6.030313667199376e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  6.0303136672e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.779050597732735e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.77905059773e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.556779420896861e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.5567794209e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.3281971567510764, 0.1860917990690819, 1.675928211332931]
max_q:  3.32819715675
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.358323013007687e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.35832301301e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.190875418851197e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.19087541885e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.038202612414397e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  5.03820261241e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.89825253984733e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.89825253985e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.2396506796343556, 0.1860917990690819, 1.675928211332931]
max_q:  3.23965067963
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (8, 2), destination = (3, 5), deadline = 40
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 4.769351157219768e-13, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": -0.06928314837550988, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.7586594126434965, "(['green', None, None, None, 'right'], 'right')": 5.002853135075155, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.919837210518974, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.6926839258951891, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.856735186111363, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, -0.06928314837550988, 5.002853135075155]
max_q:  5.00285313508
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  forward
q:  [1.653288901852565, 3.7586594126434965, 0.1860917990690819, 1.675928211332931]
max_q:  3.75865941264
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.818994559482622, 0.1860917990690819, 1.675928211332931]
max_q:  3.81899455948
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, 1.9888909033491378, 4.9777818066982755]
max_q:  4.9777818067
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [4.769351157219768e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.76935115722e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.2924160414977915e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  4.2924160415e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.934714704706309e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.93471470471e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.6536636543701443e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.65366365437e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.4253096759720104e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.42530967597e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.849162132902185, 0.1860917990690819, 1.675928211332931]
max_q:  3.8491621329
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0)]
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (2, 1), destination = (1, 6), deadline = 30
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 3.235014693973565e-13, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.664245919611982, "(['green', None, None, None, 'right'], 'right')": 4.855559080860991, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.919837210518974, "(['red', None, None, None, 'forward'], 'right')": -0.23810626740393098, "(['green', None, None, None, 'left'], None)": 0.6926839258951891, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.856735186111363, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, 1.9888909033491378, 4.855559080860991]
max_q:  4.85555908086
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.6926839258951891, -0.025, 2.919837210518974, -0.275]
max_q:  2.91983721052
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.664245919611982, 0.1860917990690819, 1.675928211332931]
max_q:  4.66424591961
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.235014693973565e-13, -0.999999998675995, -0.9886395747693457, -0.23810626740393098]
max_q:  3.23501469397e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [2.6958455783113045e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  2.69584557831e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.498184439708987, 0.1860917990690819, 1.675928211332931]
max_q:  4.49818443971
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.6926839258951891, -0.025, 3.459918605259487, -0.275]
max_q:  3.45991860526
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.4262610204801743e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  2.42626102048e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.3049479694561656e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  2.30494796946e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.200177607208158e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  2.20017760721e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.1085035402411512e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  2.10850354024e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.0274072502318763e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  2.02740725023e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.0818203664241555, 0.1860917990690819, 1.675928211332931]
max_q:  4.08182036642
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.079093020876684, 0.1860917990690819, 1.675928211332931]
max_q:  4.07909302088
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.076621363974287, 0.1860917990690819, 1.675928211332931]
max_q:  4.07662136397
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.954467166093453, 0.1860917990690819, 1.675928211332931]
max_q:  3.95446716609
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.954999848437881e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.95499984844e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.489923127189515, -0.275]
max_q:  3.48992312719
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.9035524840053054e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.90355248401e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.849738515444393, 0.1860917990690819, 1.675928211332931]
max_q:  3.84973851544
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.8621709082660596e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.86217090827e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.8249274901007386e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.8249274901e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.7898327306757246e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.78983273068e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.7566876801076558e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.75668768011e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.7253182572485906e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.72531825725e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.8528689630393016, 0.1860917990690819, 1.675928211332931]
max_q:  3.85286896304
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (5, 2), destination = (8, 3), deadline = 20
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.6955713907443046e-13, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.791106664271328, "(['green', None, None, None, 'right'], 'right')": 4.812781126817941, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.4221993486809006, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.856735186111363, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.999999998675995, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.4221993486809006, -0.275]
max_q:  3.42219934868
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.6955713907443046e-13, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  1.69557139074e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.477856953721523e-14, -0.999999998675995, -0.9886395747693457, -0.30357970055291456]
max_q:  8.47785695372e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [6.358392715291142e-14, -0.9999999991173194, -0.9886395747693457, -0.30357970055291456]
max_q:  6.35839271529e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.791106664271328, 0.1860917990690819, 1.675928211332931]
max_q:  3.79110666427
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.432885331417068, 0.1860917990690819, 1.675928211332931]
max_q:  3.43288533142
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.856735186111363]
max_q:  5.85673518611
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (6, 6), destination = (7, 2), deadline = 25
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 5.563593625879749e-14, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.194071109514228, "(['green', None, None, None, 'right'], 'right')": 4.812781126817941, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.3747927037248706, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 7.152682672817695, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 7.152682672817695]
max_q:  7.15268267282
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.028577655422134, -0.05365037852741328, 1.9888909033491378, 4.812781126817941]
max_q:  4.81278112682
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.3747927037248706, -0.275]
max_q:  3.37479270372
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [5.563593625879749e-14, -0.9999999991173194, -0.9886395747693457, -0.30357970055291456]
max_q:  5.56359362588e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.194071109514228, 0.1860917990690819, 1.675928211332931]
max_q:  3.19407110951
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 2.895553332135677, 0.1860917990690819, 1.675928211332931]
max_q:  2.89555333214
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (7, 1), destination = (1, 5), deadline = 50
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 4.636328021566458e-14, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 5.005997998922109, "(['green', None, None, None, 'right'], 'right')": 4.406390563408971, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.6873963518624353, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.760355228616449, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9886395747693457, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  forward
q:  [1.653288901852565, 5.005997998922109, 0.1860917990690819, 1.675928211332931]
max_q:  5.00599799892
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.905398199029898, 0.1860917990690819, 1.675928211332931]
max_q:  4.90539819903
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.452699099514949, 0.1860917990690819, 1.675928211332931]
max_q:  4.45269909951
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [4.636328021566458e-14, -0.9999999991173194, -0.9886395747693457, -0.30357970055291456]
max_q:  4.63632802157e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.8636066846387156e-14, -0.9999999991173194, -0.9886395747693457, -0.30357970055291456]
max_q:  3.86360668464e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.226349549757486, 0.1860917990690819, 1.675928211332931]
max_q:  3.22634954976
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.303714594781738, 0.1860917990690819, 1.675928211332931]
max_q:  3.30371459478
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.3617383785499264, 0.1860917990690819, 1.675928211332931]
max_q:  3.36173837855
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 2.6873963518624353, -0.275]
max_q:  2.68739635186
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [3.380655849058876e-14, -0.9999999991173194, -0.9886395747693457, -0.30357970055291456]
max_q:  3.38065584906e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.1672043244713683, 0.1860917990690819, 1.675928211332931]
max_q:  3.16720432447
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.2269896741016546e-14, -0.9999999991173194, -0.9886395747693457, -0.30357970055291456]
max_q:  3.2269896741e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.653288901852565, 3.0699372974320887, 0.1860917990690819, 1.675928211332931]
max_q:  3.06993729743
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.1028746866362065e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  3.10287468664e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.005909852678825e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  3.00590985268e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.9175007393647415e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.91750073936e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.836459052160165e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.83645905216e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 2.9986081442699493, 0.1860917990690819, 1.675928211332931]
max_q:  2.99860814427
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0)]
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (7, 6), destination = (4, 5), deadline = 20
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.7618153928927925e-14, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.4486777370564523, "(['green', None, None, None, 'right'], 'right')": 4.406390563408971, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.618656716676192, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.760355228616449, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.028577655422134, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.406390563408971]
max_q:  4.40639056341
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.4486777370564523, 0.1860917990690819, 1.675928211332931]
max_q:  3.44867773706
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 2.724338868528233, 0.1860917990690819, 1.675928211332931]
max_q:  2.72433886853
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.2031952817044855]
max_q:  4.2031952817
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (1, 5), destination = (6, 2), deadline = 40
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.7618153928927925e-14, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 2.4828925790188263, "(['green', None, None, None, 'right'], 'right')": 6.99744086485542, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.618656716676192, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.760355228616449, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664}
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 6.760355228616449]
max_q:  6.76035522862
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 2.4828925790188263, 0.1860917990690819, 1.675928211332931]
max_q:  2.48289257902
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.241446289509413, 0.1860917990690819, 1.675928211332931]
max_q:  3.24144628951
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.4310847171320598, 0.1860917990690819, 1.675928211332931]
max_q:  3.43108471713
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.7618153928927925e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.76181539289e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.4165884687811934e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.41658846878e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 2.9540564780880443, 0.1860917990690819, 1.675928211332931]
max_q:  2.95405647809
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 2.618656716676192, -0.275]
max_q:  2.61865671668
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.07142857142855409]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.07142857142855409]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 2.7950470650733723, 0.1860917990690819, 1.675928211332931]
max_q:  2.79504706507
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0)]
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (2, 2), destination = (4, 6), deadline = 30
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.1749296219030742e-14, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.678586770695315, "(['green', None, None, None, 'right'], 'right')": 6.99744086485542, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 2.695398010194181, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.444946529569265, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, None, None, 'forward'], 'left')": 0.1860917990690819, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 2.695398010194181, -0.275]
max_q:  2.69539801019
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.1749296219030742e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.1749296219e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.993685486744485e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  1.99368548674e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.8512793805484505e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  1.85127938055e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.7355744192641724e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  1.73557441926e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.678586770695315, 0.1860917990690819, 1.675928211332931]
max_q:  3.6785867707
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 6.99744086485542]
max_q:  6.99744086486
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.6391536181939406e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  1.63915361819e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.570855550769193e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  1.57085555077e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5104380295857625e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  1.51043802959e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 6.77178125429102]
max_q:  6.77178125429
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 2.5563184081553447, -0.275]
max_q:  2.55631840816
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (6, 5), destination = (6, 1), deadline = 20
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.4564938142434138e-14, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.694657432160549, "(['green', None, None, None, 'right'], 'right')": 6.680645490202409, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.0285024877475775, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.444946529569265, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.2635075935364947, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 6.444946529569265]
max_q:  6.44494652957
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4564938142434138e-14, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  1.45649381424e-14
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.282469071217069e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  7.28246907122e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.694657432160549, 0.2635075935364947, 1.675928211332931]
max_q:  3.69465743216
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.129771621440367, 0.2635075935364947, 1.675928211332931]
max_q:  3.12977162144
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.461851803412802e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  5.46185180341e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.9156666230715225e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  4.91566662307e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.506027737815563e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  4.50602773782e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.1841686136858806e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  4.18416861369e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.922658075330513e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  3.92265807533e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 2.8998572980536528, 0.2635075935364947, 1.675928211332931]
max_q:  2.89985729805
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (3, 1), destination = (8, 5), deadline = 45
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 3.70473262670104e-15, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.8098715682482878, "(['green', None, None, None, 'right'], 'right')": 6.680645490202409, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.0285024877475775, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.383822866330033, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.2635075935364947, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, -0.25, -0.041666666666666664]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, -0.25, -0.041666666666666664]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.09090909090909091, -0.25, -0.041666666666666664]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.8098715682482878, 0.2635075935364947, 1.675928211332931]
max_q:  3.80987156825
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.3574036761862165, 0.2635075935364947, 1.675928211332931]
max_q:  3.35740367619
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.70473262670104e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  3.7047326267e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.3960049078092866e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  3.39600490781e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.153433128680052e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  3.15343312868e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.9563435581375487e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.95634355814e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.085922940948974, 0.2635075935364947, 1.675928211332931]
max_q:  3.08592294095
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 6.383822866330033]
max_q:  6.38382286633
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.792102249352129e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.79210224935e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.6847137013001243e-15, -0.9999999991173194, -0.9894510337143914, -0.30357970055291456]
max_q:  2.6847137013e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.131626793901525, 0.19409781230590442, 1.675928211332931]
max_q:  3.1316267939
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.0285024877475775, -0.275]
max_q:  3.02850248775
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (7, 2), destination = (2, 1), deadline = 30
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.675928211332931, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.588831069110834e-15, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.0561850076414236, "(['green', None, None, None, 'right'], 'right')": 6.680645490202409, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.5269190162060453, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.284496913566281, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.19409781230590442, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999991173194, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 6.680645490202409]
max_q:  6.6806454902
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.0561850076414236, 0.19409781230590442, 1.675928211332931]
max_q:  3.05618500764
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 2.3696717774676044, 0.19409781230590442, 1.675928211332931]
max_q:  2.36967177747
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [2.588831069110834e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  2.58883106911e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.2652271854719795e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  2.26522718547e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 2.777253833100703, 0.19409781230590442, 1.675928211332931]
max_q:  2.7772538331
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.0387044669247817e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  2.03870446692e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.8930827192872976e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  1.89308271929e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.5269190162060453, -0.275]
max_q:  3.52691901621
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (5, 6), destination = (8, 5), deadline = 20
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.5812534949394896, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.7747650493318415e-15, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 2.6477115275839194, "(['green', None, None, None, 'right'], 'right')": 6.606183115474564, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.374227114585441, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.284496913566281, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.19409781230590442, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 6.606183115474564]
max_q:  6.60618311547
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 6.284496913566281]
max_q:  6.28449691357
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.7747650493318415e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  1.77476504933e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 2.6477115275839194, 0.19409781230590442, 1.5812534949394896]
max_q:  2.64771152758
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3310737869988811e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  1.331073787e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.164689563624021e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  1.16468956362e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 2.4318076850559462, 0.19409781230590442, 1.5812534949394896]
max_q:  2.43180768506
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (8, 5), destination = (3, 6), deadline = 30
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.5812534949394896, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.0482206072616188e-15, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.026506404213288, "(['green', None, None, None, 'right'], 'right')": 6.459789649605421, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.374227114585441, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.142248456783141, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.19409781230590442, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 6.459789649605421]
max_q:  6.45978964961
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.653288901852565, 4.026506404213288, 0.19409781230590442, 1.5812534949394896]
max_q:  4.02650640421
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.013253202106644, 0.19409781230590442, 1.5812534949394896]
max_q:  3.01325320211
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0482206072616188e-15, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  1.04822060726e-15
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.171930313539165e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  9.17193031354e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 4.374227114585441, -0.275]
max_q:  4.37422711459
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [8.254737282185249e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  8.25473728219e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 2.675502134737763, 0.19409781230590442, 1.2343779124495748]
max_q:  2.67550213474
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 4.136804403126897, -0.275]
max_q:  4.13680440313
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 2.6192102901762824, 0.19409781230590442, 1.2343779124495748]
max_q:  2.61921029018
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (5, 4), destination = (1, 6), deadline = 30
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2343779124495748, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 7.879521951176828e-16, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.2873599686082735, "(['green', None, None, None, 'right'], 'right')": 6.2548071788049695, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 4.1322442563560005, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.142248456783141, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.19409781230590442, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  forward
q:  [1.653288901852565, 3.2873599686082735, 0.19409781230590442, 1.2343779124495748]
max_q:  3.28735996861
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [7.879521951176828e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  7.87952195118e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.939760975588414e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  3.93976097559e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.2068999705702566, 0.19409781230590442, 1.2343779124495748]
max_q:  3.20689997057
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.142248456783141]
max_q:  5.14224845678
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 4.1322442563560005, -0.275]
max_q:  4.13224425636
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.827637934019429, -0.275]
max_q:  3.82763793402
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.3390833088085476, 0.020573359229428365, 1.2235718694420248]
max_q:  3.33908330881
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (1, 5), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.9548207316913104e-16, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.126439371644134, "(['green', None, None, None, 'right'], 'right')": 6.2548071788049695, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.8362560373184573, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.13927948330701, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  forward
q:  [2.9548207316913104e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  2.95482073169e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.8205106984326145e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  2.82051069843e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4102553492163072e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  1.41025534922e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0576915119122304e-16, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  1.05769151191e-16
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.814095932601922e-17, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  8.8140959326e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.126439371644134, 0.020573359229428365, 1.2235718694420248]
max_q:  4.12643937164
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.11379543447972, 0.020573359229428365, 1.2235718694420248]
max_q:  4.11379543448
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.10431248160641, 0.020573359229428365, 1.2235718694420248]
max_q:  4.10431248161
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.13927948330701]
max_q:  5.13927948331
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (6, 4), destination = (4, 2), deadline = 20
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 7.712333941026681e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.096861590063096, "(['green', None, None, None, 'right'], 'right')": 6.2548071788049695, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.8362560373184573, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 6.387794996568944, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 6.2548071788049695]
max_q:  6.2548071788
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 6.113881730129659]
max_q:  6.11388173013
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.096861590063096, 0.020573359229428365, 1.2235718694420248]
max_q:  4.09686159006
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 6.387794996568944]
max_q:  6.38779499657
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.048430795031548, 0.020573359229428365, 1.2235718694420248]
max_q:  3.04843079503
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 2.786323096273661, 0.020573359229428365, 1.2235718694420248]
max_q:  2.78632309627
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (8, 2), destination = (1, 2), deadline = 35
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 7.712333941026681e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.62905847701893, "(['green', None, None, None, 'right'], 'right')": 5.0569408650648295, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.8362560373184573, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.768020141890101, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9894510337143914, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  forward
q:  [7.712333941026681e-17, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  7.71233394103e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.941100546924014e-17, -0.9999999994115458, -0.9894510337143914, -0.30357970055291456]
max_q:  6.94110054692e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [3.470550273462007e-17, -0.9999999994115458, -0.9947255168571957, -0.30357970055291456]
max_q:  3.47055027346e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.892125227885006e-17, -0.9999999994115458, -0.9947255168571957, -0.30357970055291456]
max_q:  2.89212522789e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.62905847701893, 0.020573359229428365, 1.2235718694420248]
max_q:  4.62905847702
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.5306095743993806e-17, -0.9999999994115458, -0.9947255168571957, -0.30357970055291456]
max_q:  2.5306095744e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.319725443199432e-17, -0.9999999994115458, -0.9947255168571957, -0.30357970055291456]
max_q:  2.3197254432e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.145269647193847, 0.020573359229428365, 1.2235718694420248]
max_q:  4.14526964719
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.906906353061197, 0.020573359229428365, 1.2235718694420248]
max_q:  3.90690635306
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.1747426029994675e-17, -0.9999999994115458, -0.9947255168571957, -0.30357970055291456]
max_q:  2.174742603e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.7162157177550776, 0.020573359229428365, 1.2235718694420248]
max_q:  3.71621571776
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.728040062848616, 0.020573359229428365, 1.2235718694420248]
max_q:  3.72804006285
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.653288901852565, 3.5951139041679534, 0.020573359229428365, 1.2235718694420248]
max_q:  3.59511390417
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.488772977223423, 0.020573359229428365, 1.2235718694420248]
max_q:  3.48877297722
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (6, 3), destination = (8, 5), deadline = 20
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 2.0758906664994916e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.129748821685191, "(['green', None, None, None, 'right'], 'right')": 5.0569408650648295, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.8362560373184573, "(['red', None, None, None, 'forward'], 'right')": -0.30357970055291456, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.768020141890101, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9951022656531102, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 5.0569408650648295]
max_q:  5.05694086506
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.0758906664994916e-17, -0.9999999994115458, -0.9951022656531102, -0.30357970055291456]
max_q:  2.0758906665e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.8164043331870552e-17, -0.9999999994115458, -0.9951022656531102, -0.30357970055291456]
max_q:  1.81640433319e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 4.129748821685191, 0.020573359229428365, 1.2235718694420248]
max_q:  4.12974882169
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.768020141890101]
max_q:  5.76802014189
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.6347638998683498e-17, -0.9999999994115458, -0.9951022656531102, -0.30357970055291456]
max_q:  1.63476389987e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.653288901852565, 3.7747906847376598, 0.020573359229428365, 1.2235718694420248]
max_q:  3.77479068474
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5325911561265778e-17, -0.9999999994115458, -0.9951022656531102, -0.30357970055291456]
max_q:  1.53259115613e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.455961598320249e-17, -0.9999999994115458, -0.9951022656531102, -0.30357970055291456]
max_q:  1.45596159832e-17
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.865882060998278]
max_q:  4.865882061
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.832578904806036]
max_q:  4.83257890481
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.229731550191516]
max_q:  5.22973155019
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.7873023133633454, 0.020573359229428365, 1.2235718694420248]
max_q:  3.78730231336
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0)]
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (2, 1), destination = (6, 5), deadline = 40
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.3897815256693287e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.300595918778136, "(['green', None, None, None, 'right'], 'right')": 4.802843943920107, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.8362560373184573, "(['red', None, None, None, 'forward'], 'right')": -0.16214379578336563, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.174510911642751, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.9951022656531102, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, 'left', None, 'right'], 'right')": 1.6280033569816834, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  forward
q:  [1.653288901852565, 4.300595918778136, 0.020573359229428365, 1.2235718694420248]
max_q:  4.30059591878
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.8362560373184573, -0.275]
max_q:  3.83625603732
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.5784043369272514]
max_q:  1.57840433693
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.877192027988843, -0.275]
max_q:  3.87719202799
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.5784043369272514]
max_q:  1.57840433693
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.6894728251899593, -0.275]
max_q:  3.68947282519
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.802843943920107]
max_q:  4.80284394392
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (8, 5), destination = (4, 1), deadline = 40
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.3897815256693287e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 4.156808673854503, "(['green', None, None, None, 'right'], 'right')": 5.402755070672603, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.6998237310169606, "(['red', None, None, None, 'forward'], 'right')": 1.4612041397941944, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 5.174510911642751, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.733667454280865, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, 'left', None, 'right'], 'right')": 1.6280033569816834, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.174510911642751]
max_q:  5.17451091164
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 5.402755070672603]
max_q:  5.40275507067
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.4612041397941944]
max_q:  1.46120413979
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.6998237310169606, -0.275]
max_q:  3.69982373102
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 4.156808673854503, 0.020573359229428365, 1.2235718694420248]
max_q:  4.15680867385
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.8459031048456458]
max_q:  0.845903104846
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.7498531091808007, -0.275]
max_q:  3.74985310918
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.144940075623598]
max_q:  5.14494007562
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.6613127943610813]
max_q:  0.661312794361
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.572470037811799]
max_q:  4.57247003781
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.550451959434422]
max_q:  4.55045195943
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.0928973449134345]
max_q:  5.09289734491
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.723344393496583, 0.020573359229428365, 1.2235718694420248]
max_q:  3.7233443935
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.7196760778933488]
max_q:  0.719676077893
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 5.037730620615313]
max_q:  5.03773062062
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.530792960883193]
max_q:  4.53079296088
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.7549341099683639]
max_q:  0.754934109968
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.5158101451624715]
max_q:  4.51581014516
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9888909033491378, 4.514973846936528]
max_q:  4.51497384694
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.638125246337214, 0.020573359229428365, 1.2235718694420248]
max_q:  3.63812524634
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0), (24, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (2, 5), destination = (8, 2), deadline = 45
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.3897815256693287e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9888909033491378, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.988236183933759, "(['green', None, None, None, 'right'], 'right')": 4.50424522512535, "(['green', None, None, None, 'left'], 'forward')": -0.025, "(['green', None, None, None, 'left'], 'left')": 3.574867798262721, "(['red', None, None, None, 'forward'], 'right')": 0.7817973725017087, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.962765070778431, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.733667454280865, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, 'left', None, 'right'], 'right')": 1.6280033569816834, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.962765070778431]
max_q:  4.96276507078
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.481382535389216]
max_q:  4.48138253539
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.7817973725017087]
max_q:  0.781797372502
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, -0.025, 3.574867798262721, -0.275]
max_q:  3.57486779826
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.0192376123234324]
max_q:  1.01923761232
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.181150848697041, -0.275]
max_q:  3.1811508487
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.988236183933759, 0.020573359229428365, 1.2235718694420248]
max_q:  3.98823618393
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.1142137082521217]
max_q:  1.11421370825
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.222093306262189, -0.275]
max_q:  3.22209330626
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.8581335175876044, 0.020573359229428365, 1.2235718694420248]
max_q:  3.85813351759
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.1404514624639286]
max_q:  1.14045146246
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.2520127944828743, -0.275]
max_q:  3.25201279448
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.1737619948276947, -0.275]
max_q:  3.17376199483
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0), (24, 12.0), (15, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (1, 3), destination = (8, 6), deadline = 50
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.3897815256693287e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9885905686307408, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.863200177673762, "(['green', None, None, None, 'right'], 'right')": 4.50424522512535, "(['green', None, None, None, 'left'], 'forward')": 0.09895282492761337, "(['green', None, None, None, 'left'], 'left')": 3.6641085506706004, "(['red', None, None, None, 'forward'], 'right')": 1.1598613708887922, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.366752573975946, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.733667454280865, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, 'left', None, 'right'], 'right')": 1.6280033569816834, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.6641085506706004, -0.275]
max_q:  3.66410855067
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.863200177673762, 0.020573359229428365, 1.2235718694420248]
max_q:  3.86320017767
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.1749579663303527]
max_q:  1.17495796633
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.8320542753353, -0.275]
max_q:  3.83205427534
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.1541952409568133]
max_q:  1.15419524096
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.374040706501475, -0.275]
max_q:  3.3740407065
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.225339580419469, 0.020573359229428365, 1.2235718694420248]
max_q:  3.22533958042
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.1458901508073975]
max_q:  1.14589015081
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.426203980959685, -0.275]
max_q:  3.42620398096
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.011772016381935]
max_q:  1.01177201638
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.3073536492130446, -0.275]
max_q:  3.30735364921
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.366752573975946]
max_q:  4.36675257398
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.132140365417216, 0.020573359229428365, 1.2235718694420248]
max_q:  3.13214036542
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.157665648787298, 0.020573359229428365, 1.2235718694420248]
max_q:  3.15766564879
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.9343961695980145]
max_q:  0.934396169598
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 4.50424522512535]
max_q:  4.50424522513
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.359588201387616]
max_q:  4.35958820139
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 4.488022668903772]
max_q:  4.4880226689
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.1193063396768372, 0.020573359229428365, 1.2235718694420248]
max_q:  3.11930633968
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0), (24, 12.0), (15, 12.0), (27, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (4, 5), destination = (8, 3), deadline = 30
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.3897815256693287e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9885905686307408, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.5258797301972984, "(['green', None, None, None, 'right'], 'right')": 4.476931244610505, "(['green', None, None, None, 'left'], 'forward')": 0.09895282492761337, "(['green', None, None, None, 'left'], 'left')": 3.2201967392655084, "(['red', None, None, None, 'forward'], 'right')": 0.940988643294878, "(['green', None, None, None, 'left'], None)": 0.7427923848332638, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.354084541057343, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.733667454280865, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, 'left', None, 'right'], 'right')": 1.6280033569816834, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  left
q:  [0.7427923848332638, 0.09895282492761337, 3.2201967392655084, -0.275]
max_q:  3.22019673927
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.940988643294878]
max_q:  0.940988643295
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.2629398650986492]
max_q:  1.2629398651
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 2.9726205892696087, -0.275]
max_q:  2.97262058927
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.1013013033058887]
max_q:  1.10130130331
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 2.8510430156109074, -0.275]
max_q:  2.85104301561
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 4.476931244610505]
max_q:  4.47693124461
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0), (24, 12.0), (15, 12.0), (27, 12.0), (27, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (8, 2), destination = (2, 6), deadline = 50
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.3897815256693287e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9885905686307408, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.5258797301972984, "(['green', None, None, None, 'right'], 'right')": 5.227818504433178, "(['green', None, None, None, 'left'], 'forward')": 0.09895282492761337, "(['green', None, None, None, 'left'], 'left')": 2.8989162232937864, "(['red', None, None, None, 'forward'], 'right')": 0.9845623420111171, "(['green', None, None, None, 'left'], None)": 1.1631823691975143, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.354084541057343, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.733667454280865, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, 'left', None, 'right'], 'right')": 1.6280033569816834, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 5.227818504433178]
max_q:  5.22781850443
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 5.180594715801133]
max_q:  5.1805947158
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 0.9845623420111171]
max_q:  0.984562342011
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 2.8989162232937864, -0.275]
max_q:  2.89891622329
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.5258797301972984, 0.020573359229428365, 1.2235718694420248]
max_q:  3.5258797302
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 2.9906732046859705, -0.275]
max_q:  2.99067320469
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.1237511035548833]
max_q:  1.12375110355
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 2.884687910338146, -0.275]
max_q:  2.88468791034
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.0175635483771392]
max_q:  1.01756354838
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 2.8109639178099672, -0.275]
max_q:  2.81096391781
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 2.853429492173897, -0.275]
max_q:  2.85342949217
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0), (24, 12.0), (15, 12.0), (27, 12.0), (27, 12.0), (17, 12.0), (30, 12.0)]
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (5, 3), destination = (4, 6), deadline = 20
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['green', 'left', None, None, 'forward'], 'forward')": 1.505195679682433, "(['green', None, None, None, 'forward'], 'right')": 1.2235718694420248, "(['green', None, None, None, 'forward'], None)": 1.653288901852565, "(['red', None, None, None, 'forward'], None)": 1.3897815256693287e-17, "(['green', None, None, 'forward', 'right'], 'forward')": 0.6472496280951221, "(['green', None, None, 'forward', 'forward'], 'forward')": 1.187650446358202, "(['red', None, None, None, 'left'], 'forward')": -1.0, "(['red', 'left', None, None, 'forward'], 'forward')": -0.3333333333333333, "(['green', None, None, 'right', 'forward'], 'forward')": 0.7393435549352083, "(['green', 'forward', 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 2.5039031785991095, "(['red', 'forward', None, None, 'right'], 'right')": 0.29383120305124494, "(['red', None, None, 'left', 'left'], 'right')": -0.5, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.26680161943319836, "(['green', None, None, None, 'right'], 'left')": 1.9885905686307408, "(['red', None, None, 'right', 'forward'], 'forward')": -0.05555555555555555, "(['green', 'right', None, None, 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, 'right', None, 'forward'], 'right')": -0.1, "(['green', None, 'right', None, 'left'], 'left')": 0.2961002331002331, "(['red', None, 'forward', None, 'forward'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'right')": 0.14258829201513226, "(['red', 'forward', None, None, 'left'], 'forward')": -0.2, "(['green', None, 'left', None, 'left'], 'forward')": -0.5, "(['green', None, None, 'left', 'left'], 'right')": 0.07179833333333335, "(['green', None, None, None, 'forward'], 'forward')": 3.3078969115976844, "(['green', None, None, None, 'right'], 'right')": 4.177042270528672, "(['green', None, None, None, 'left'], 'forward')": 0.09895282492761337, "(['green', None, None, None, 'left'], 'left')": 3.310758017565202, "(['red', None, None, None, 'forward'], 'right')": 1.0280546951018856, "(['green', None, None, None, 'left'], None)": 1.1631823691975143, "(['red', None, 'forward', None, 'forward'], 'left')": -0.16666666666666666, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'left', 'forward'], 'right')": -0.07142857142855409, "(['green', None, 'left', 'forward', 'right'], 'left')": 0.08957351952912788, "(['red', None, None, None, 'left'], 'left')": -0.5833333333333333, "(['red', None, None, 'forward', 'forward'], 'right')": -0.5, "(['green', None, 'right', None, 'forward'], 'forward')": 0.29125, "(['red', 'forward', None, None, 'left'], 'left')": -0.16666666666666666, "(['red', None, 'right', None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.275, "(['green', None, 'forward', None, 'right'], 'left')": 0.14958395754668002, "(['red', None, None, None, 'right'], 'right')": 4.354084541057343, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.09090909090909091, "(['green', None, 'forward', None, 'forward'], 'right')": -0.05, "(['red', None, None, None, 'right'], 'left')": 1.3820574120270865, "(['green', None, None, None, 'right'], None)": 2.037308536736252, "(['green', None, 'forward', None, 'forward'], None)": 0.0, "(['red', None, None, 'left', 'left'], None)": 0.0, "(['red', 'forward', None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'forward')": 0.4202286557870227, "(['red', None, None, None, 'forward'], 'left')": -0.733667454280865, "(['green', None, None, 'right', 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], 'right')": -0.125, "(['red', None, None, 'left', 'forward'], None)": 0.0, "(['red', 'right', None, None, 'forward'], 'forward')": -0.07142857142857142, "(['green', None, 'right', None, 'right'], 'right')": 0.4144574664608571, "(['green', None, None, 'forward', 'forward'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'left')": -0.25, "(['green', None, 'left', None, 'left'], None)": 0.0, "(['green', None, None, None, 'forward'], 'left')": 0.020573359229428365, "(['green', None, None, 'left', 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'left')": -0.03571428571428571, "(['green', None, 'left', None, 'forward'], 'left')": -0.1273983408076937, "(['green', None, None, None, 'right'], 'forward')": -0.05365037852741328, "(['red', None, None, None, 'forward'], 'forward')": -0.9999999994115458, "(['red', 'forward', None, None, 'left'], None)": 0.0, "(['green', None, 'left', None, 'forward'], 'right')": 0.14424355697485527, "(['green', None, 'left', None, 'right'], 'right')": 1.6280033569816834, "(['red', 'forward', None, None, 'right'], 'forward')": -0.05263157894736842, "(['green', 'right', None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.7217577648440416, "(['red', None, None, 'forward', 'forward'], 'left')": -0.16666666666666666, "(['green', None, 'forward', None, 'left'], 'right')": 0.07361111111111113, "(['red', 'forward', None, None, 'forward'], 'right')": -0.041666666666666664, "(['green', None, None, 'left', 'forward'], 'forward')": 0.1818181818181828}
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
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
q:  [1.1631823691975143, 0.09895282492761337, 3.310758017565202, -0.275]
max_q:  3.31075801757
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -1.0, -0.5833333333333333, -0.26680161943319836]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [1.1631823691975143, 0.09895282492761337, 3.048606414052162, -0.275]
max_q:  3.04860641405
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.733667454280865, 1.0280546951018856]
max_q:  1.0280546951
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.354084541057343]
max_q:  4.35408454106
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.3393310185132865]
max_q:  4.33933101851
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 4.177042270528672]
max_q:  4.17704227053
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.3897815256693287e-17, -0.9999999994115458, -0.7202272776361717, 0.9358703907790726]
max_q:  0.935870390779
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 4.170719332295505]
max_q:  4.1707193323
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.037308536736252, -0.05365037852741328, 1.9885905686307408, 4.165698175463284]
max_q:  4.16569817546
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [2.5039031785991095, -0.7217577648440416, 1.3820574120270865, 4.320037950571059]
max_q:  4.32003795057
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.653288901852565, 3.3078969115976844, 0.020573359229428365, 1.2235718694420248]
max_q:  3.3078969116
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
epsilon:  0.1 gamma:  0.5 alpha:  0.05 defaultq:  0.0
Results:  [(3, 12.0), (22, 12.0), (16, 12.0), (17, 12.0), (18, 12.0), (6, 12.0), (9, 12.0), (5, 12.0), (20, 12.0), (18, 12.0), (22, 12.0), (12, 12.0), (15, 12.0), (15, 12.0), (20, 12.0), (12, 12.0), (11, 12.0), (19, 12.0), (10, 12.0), (9, 12.0), (15, 12.0), (21, 12.0), (18, 12.0), (9, 12.0), (35, 12.0), (23, 12.0), (21, 12.0), (15, 12.0), (18, 12.0), (11, 12.0), (11, 12.0), (34, 12.0), (29, 12.0), (23, 12.0), (14, 12.0), (9, 12.0), (15, 12.0), (8, 12.0), (15, 12.0), (35, 12.0), (10, 12.0), (23, 12.0), (25, 12.0), (9, 12.0), (15, 12.0), (16, 12.0), (23, 12.0), (27, 12.0), (11, 12.0), (16, 12.0), (19, 12.0), (22, 12.0), (13, 12.0), (9, 12.0), (20, 12.0), (10, 12.0), (12, 12.0), (10, 12.0), (20, 12.0), (24, 12.0), (19, 12.0), (12, 12.0), (13, 12.0), (12, 12.0), (5, 12.0), (13, 12.0), (8, 12.0), (12, 12.0), (10, 12.0), (17, 12.0), (15, 12.0), (13, 12.0), (15, 12.0), (30, 12.0), (13, 12.0), (20, 12.0), (30, 12.0), (16, 12.0), (28, 12.0), (10, 12.0), (10, 12.0), (27, 12.0), (20, 12.0), (14, 12.0), (14, 12.0), (19, 12.0), (12, 12.0), (15, 12.0), (19, 12.0), (4, 12.0), (24, 12.0), (15, 12.0), (27, 12.0), (27, 12.0), (17, 12.0), (30, 12.0)]
Number of Successful Outcomes:  96
((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ 
