((python2.7)) jessica@Bourbaki:~/Dropbox/data-science/ml-nd/smartcab$ python smartcab/agent.py 
Simulator.run(): Trial 0
Environment.reset(): Trial set up with start = (8, 5), destination = (2, 5), deadline = 30
RoutePlanner.route_to(): destination = (2, 5)
q:  {}
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
random
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 1
Environment.reset(): Trial set up with start = (8, 2), destination = (5, 5), deadline = 30
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['green', None, None, None, 'left'], 'right')": -0.5, "(['green', None, None, None, 'forward'], 'forward')": 12.0}
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, -1.0, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, -1.0, -1.0, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.25, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.5]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 12.0, 0.0, 0.0]
max_q:  12.0
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 10.767857142857144, 0.0, 0.0]
max_q:  10.7678571429
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.3333333333333333, -0.5]
max_q:  0.333333333333
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, -0.09090909090909091, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.5625]
max_q:  2.5625
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.005494505494505495, 0.0, -0.09090909090909091, 0.15384615384615385]
max_q:  0.153846153846
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 0.11764705882352941]
max_q:  0.117647058824
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 10.344866071428573, 0.0, 0.0]
max_q:  10.3448660714
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.005494505494505495, 0.0, -0.09090909090909091, 0.24455936220642102]
max_q:  0.244559362206
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.673549107142857]
max_q:  2.67354910714
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 0.32279770882712056]
max_q:  0.322797708827
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 0.39089404755254425]
max_q:  0.390894047553
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 0.20588235294117646]
max_q:  0.205882352941
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 10.040166440217394, 0.0, 0.0]
max_q:  10.0401664402
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Simulator.run(): Trial 2
Environment.reset(): Trial set up with start = (6, 6), destination = (7, 1), deadline = 30
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['red', None, None, None, 'right'], None)": 0.005494505494505495, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['red', None, None, None, 'right'], 'left')": -0.09090909090909091, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['red', None, None, None, 'right'], 'right')": 0.45203858787104584, "(['green', None, None, None, 'forward'], 'forward')": 9.815495527626814, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -1.0, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 0.2712981744421907, "(['green', None, None, None, 'left'], 'left')": 0.5185185185185185, "(['red', None, None, None, 'forward'], 'right')": 2.600078125, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065, "(['red', None, None, None, 'left'], None)": 0.0}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, -0.03333333333333333, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, -1.0, -0.03333333333333333, 0.0]
max_q:  0.0
count:  2
best:  [0, 3]
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 0.45203858787104584]
max_q:  0.452038587871
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.5185185185185185, -0.5]
max_q:  0.518518518519
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 1.0132420876543957]
max_q:  1.01324208765
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 0.2712981744421907]
max_q:  0.271298174442
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 1.1152790876150047]
max_q:  1.11527908762
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.600078125]
max_q:  2.600078125
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 1.2262298919375045]
max_q:  1.22622989194
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -1.0, -0.03333333333333333, 1.1130096469677615]
max_q:  1.11300964697
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 0.41535665990534143]
max_q:  0.415356659905
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 9.815495527626814, 0.0, 0.08889322916666666]
max_q:  9.81549552763
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 9.653953985192736, 0.0, 0.08889322916666666]
max_q:  9.65395398519
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.7291973849152433]
max_q:  2.72919738492
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 1.3186888955395877]
max_q:  1.31868889554
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 1.3635319801895767]
max_q:  1.36353198019
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = forward, reward = 12.0
Simulator.run(): Trial 3
Environment.reset(): Trial set up with start = (5, 1), destination = (2, 5), deadline = 35
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.08889322916666666, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, None, None, 'right'], None)": 0.005494505494505495, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 9.505165722424508, "(['green', None, None, None, 'right'], 'right')": 0.5207873463787137, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 0.736111111111111, "(['red', None, None, None, 'forward'], 'right')": 2.635967450292362, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 1.4009012173979007, "(['red', None, None, None, 'right'], 'left')": -0.09090909090909091, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -1.0, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.736111111111111, -0.5]
max_q:  0.736111111111
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.635967450292362]
max_q:  2.63596745029
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 1.0625, -0.5]
max_q:  1.0625
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.905403352112344]
max_q:  2.90540335211
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 1.1964285714285716, -0.5]
max_q:  1.19642857143
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0)]
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 4
Environment.reset(): Trial set up with start = (6, 6), destination = (7, 3), deadline = 20
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.08889322916666666, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, None, None, 'right'], None)": 0.005494505494505495, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 9.505165722424508, "(['green', None, None, None, 'right'], 'right')": 0.5207873463787137, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 2.396825396825397, "(['red', None, None, None, 'forward'], 'right')": 2.6613156426053224, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 1.4009012173979007, "(['red', None, None, None, 'right'], 'left')": -0.09090909090909091, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -1.0, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 1.4009012173979007]
max_q:  1.4009012174
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 0.8905905097840353]
max_q:  0.890590509784
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.2015314588056318]
max_q:  1.20153145881
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 2.396825396825397, -0.5]
max_q:  2.39682539683
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 9.505165722424508, 0.0, 0.08889322916666666]
max_q:  9.50516572242
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 5
Environment.reset(): Trial set up with start = (7, 6), destination = (1, 3), deadline = 45
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.08889322916666666, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, None, None, 'right'], None)": 0.005494505494505495, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 10.310434293400922, "(['green', None, None, None, 'right'], 'right')": 1.4871635027791623, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 2.4970238095238098, "(['red', None, None, None, 'forward'], 'right')": 2.6613156426053224, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 1.8306474452936288, "(['red', None, None, None, 'right'], 'left')": -0.09090909090909091, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -1.0, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.4871635027791623]
max_q:  1.48716350278
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 10.310434293400922, 0.0, 0.08889322916666666]
max_q:  10.3104342934
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 44, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 7.155217146700461, 0.0, 0.08889322916666666]
max_q:  7.1552171467
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 2.4970238095238098, -0.5]
max_q:  2.49702380952
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.6613156426053224]
max_q:  2.66131564261
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': 'right', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 2.5909598214285716, -0.5]
max_q:  2.59095982143
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 2.541713169642857, -0.5]
max_q:  2.54171316964
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0)]
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 6
Environment.reset(): Trial set up with start = (7, 4), destination = (1, 1), deadline = 45
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.9536642961153353, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.005494505494505495, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 6.366412860025346, "(['green', None, None, None, 'right'], 'right')": 1.6267655304025421, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 3.3080805564413267, "(['red', None, None, None, 'forward'], 'right')": 2.475239772785102, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 1.8306474452936288, "(['red', None, None, None, 'right'], 'left')": -0.09090909090909091, "(['green', None, None, None, 'right'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -1.0, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.09090909090909091, 1.8306474452936288]
max_q:  1.83064744529
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.475239772785102]
max_q:  2.47523977279
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 3.3080805564413267, -0.5]
max_q:  3.30808055644
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.683206430012673]
max_q:  2.68320643001
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 2.6540402782206636, -0.5]
max_q:  2.65404027822
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 6.366412860025346, 0.0, 0.9536642961153353]
max_q:  6.36641286003
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -1.0, -1.0, 2.0693386916772276]
max_q:  2.06933869168
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 2.8222852434430807, -0.5]
max_q:  2.82228524344
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.8135604673707921]
max_q:  1.81356046737
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 2.887713841029576, -0.5]
max_q:  2.88771384103
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.6267655304025421]
max_q:  1.6267655304
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.858266434972726]
max_q:  1.85826643497
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.005494505494505495, -0.032253890214863065, -0.08524044569487181, 1.9081243222474278]
max_q:  1.90812432225
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.71525197245062]
max_q:  1.71525197245
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.7786451733271584]
max_q:  1.77864517333
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 5.700064157187999, 0.0, 0.9536642961153353]
max_q:  5.70006415719
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 5.661426335433727, 0.0, 0.9536642961153353]
max_q:  5.66142633543
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
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.7689456088798283]
max_q:  1.76894560888
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 1.9662319799627768]
max_q:  1.96623197996
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 1.967482647371563]
max_q:  1.96748264737
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 2.0037776000970706]
max_q:  2.0037776001
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.7156966548629087]
max_q:  1.71569665486
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.831534573962226]
max_q:  1.83153457396
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.8697951606140002]
max_q:  1.86979516061
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.9030796112294064]
max_q:  1.90307961123
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 5.540689225390517, 0.0, 0.9536642961153353]
max_q:  5.54068922539
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 7
Environment.reset(): Trial set up with start = (1, 6), destination = (3, 3), deadline = 25
RoutePlanner.route_to(): destination = (3, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.9536642961153353, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.11537891217759658, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.056948267835920385, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 5.8121496779583035, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 1.934851132271385, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 2.8194281609503777, "(['red', None, None, None, 'forward'], 'right')": 1.734184920123987, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 2.0352255203344516, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  forward
q:  [0.0, 5.8121496779583035, 0.0, 0.9536642961153353]
max_q:  5.81214967796
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 5.785500417988328, 0.0, 0.9536642961153353]
max_q:  5.78550041799
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 2.8194281609503777, -0.5]
max_q:  2.81942816095
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.734184920123987]
max_q:  1.73418492012
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 2.0352255203344516]
max_q:  2.03522552033
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 1.934851132271385]
max_q:  1.93485113227
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 2.2808223302926454]
max_q:  2.28082233029
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 4.892750208994164, 0.0, 0.9536642961153353]
max_q:  4.89275020899
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 4.608422677822261, 0.0, 0.9536642961153353]
max_q:  4.60842267782
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 8
Environment.reset(): Trial set up with start = (7, 2), destination = (4, 5), deadline = 30
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.9536642961153353, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.11537891217759658, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.056948267835920385, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 5.645177029443333, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.175963138846373, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 3.1145711207127835, "(['red', None, None, None, 'forward'], 'right')": 1.8049149815816854, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 2.4153488701477355, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 3.1145711207127835, -0.5]
max_q:  3.11457112071
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.8049149815816854]
max_q:  1.80491498158
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 2.8359283405345876, -0.5]
max_q:  2.83592834053
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 5.645177029443333, 0.0, 0.9536642961153353]
max_q:  5.64517702944
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 2.9329343121567053, -0.5]
max_q:  2.93293431216
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 5.527664384483096, 0.0, 0.9536642961153353]
max_q:  5.52766438448
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 5.442794140900701, 0.0, 0.9536642961153353]
max_q:  5.4427941409
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 5.377212589041577, 0.0, 0.9536642961153353]
max_q:  5.37721258904
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 9
Environment.reset(): Trial set up with start = (3, 5), destination = (7, 1), deadline = 40
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.9536642961153353, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.11537891217759658, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.056948267835920385, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 6.153162064498178, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.175963138846373, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 2.9996259176469113, "(['red', None, None, None, 'forward'], 'right')": 1.9084496882096817, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 2.4153488701477355, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 2.4153488701477355]
max_q:  2.41534887015
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 2.4813760005582464]
max_q:  2.48137600056
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.9084496882096817]
max_q:  1.90844968821
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 2.9996259176469113, -0.5]
max_q:  2.99962591765
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 6.153162064498178, 0.0, 0.9536642961153353]
max_q:  6.1531620645
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 2.2425153602293855]
max_q:  2.24251536023
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 2.6664172784312745, -0.5]
max_q:  2.66641727843
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.240688000279123]
max_q:  3.24068800028
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.2698923079606956]
max_q:  3.26989230796
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0)]
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 10
Environment.reset(): Trial set up with start = (2, 3), destination = (8, 4), deadline = 35
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.9536642961153353, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.11537891217759658, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.056948267835920385, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 5.8840168064359055, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.175963138846373, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'left')": 2.5997755505881472, "(['red', None, None, None, 'forward'], 'right')": 1.9182638242064471, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.9356652302368715, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 2.175963138846373]
max_q:  2.17596313885
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 5.8840168064359055, 0.0, 0.9536642961153353]
max_q:  5.88401680644
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.942008403217953, 0.0, 0.9536642961153353]
max_q:  4.94200840322
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.706506302413464, 0.0, 0.9536642961153353]
max_q:  4.70650630241
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.9182638242064471]
max_q:  1.91826382421
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.15997755505881472, 2.5997755505881472, -0.5]
max_q:  2.59977555059
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.124048172310051, 0.0, 0.9536642961153353]
max_q:  4.12404817231
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.5534808461806413]
max_q:  1.55348084618
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.716460921372468, -0.5]
max_q:  2.71646092137
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.6448148292352216, -0.5]
max_q:  2.64481482924
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.115187588573619, 0.0, 0.9536642961153353]
max_q:  4.11518758857
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.5539378404146598]
max_q:  1.55393784041
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.6899876682607142, -0.5]
max_q:  2.68998766826
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.031548921800725, 0.0, 0.9536642961153353]
max_q:  4.0315489218
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.0307186870164955, 0.0, 0.9536642961153353]
max_q:  4.03071868702
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.5516929357373481]
max_q:  1.55169293574
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.7263768996979163, -0.5]
max_q:  2.7263768997
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 2.2411073124590026]
max_q:  2.24110731246
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 11
Environment.reset(): Trial set up with start = (7, 5), destination = (4, 2), deadline = 30
RoutePlanner.route_to(): destination = (4, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.9536642961153353, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.11537891217759658, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.056948267835920385, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.0251789927461209, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.9679750760591044, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.7509649343137608, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.7553228792502367, "(['red', None, None, None, 'forward'], 'right')": 1.548468869179834, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.9356652302368715, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.9356652302368715]
max_q:  3.93566523024
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.9679750760591044, 0.0, 0.9536642961153353]
max_q:  3.96797507606
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.548468869179834]
max_q:  1.54846886918
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.7553228792502367, -0.5]
max_q:  2.75532287925
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.911309457929046]
max_q:  3.91130945793
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.9113516518848755]
max_q:  0.911351651885
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.6019964797399293]
max_q:  3.60199647974
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 2.7509649343137608]
max_q:  2.75096493431
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.720216486696388]
max_q:  0.720216486696
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 2.6570943175245407]
max_q:  2.65709431752
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 2.7242396016483137]
max_q:  2.72423960165
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.569637335085208]
max_q:  3.56963733509
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 2.774234434589917, 0.0, 0.9536642961153353]
max_q:  2.77423443459
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 12
Environment.reset(): Trial set up with start = (5, 6), destination = (4, 1), deadline = 30
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.9536642961153353, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.11537891217759658, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.056948267835920385, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.0251789927461209, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.504397914583225, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 2.8206558803659765, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.5035485861668247, "(['red', None, None, None, 'forward'], 'right')": 0.6246489041021442, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.5563615521766896, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.0, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 2.8206558803659765]
max_q:  2.82065588037
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.5563615521766896]
max_q:  3.55636155218
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.6246489041021442]
max_q:  0.624648904102
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.0, -0.041666666666666664, 0.0, 2.89431164157539]
max_q:  2.89431164158
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.7781807760883446]
max_q:  3.77818077609
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.0785930346461585]
max_q:  3.07859303465
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.504397914583225, 0.0, 0.9536642961153353]
max_q:  3.50439791458
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.9384239306968785]
max_q:  0.938423930697
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.8059081790773015]
max_q:  3.80590817908
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.816691058017451]
max_q:  3.81669105802
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.1553769484256455]
max_q:  3.15537694843
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.3565142075496848, 0.0, 0.9536642961153353]
max_q:  3.35651420755
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.11537891217759658, 0.0, 0.0]
max_q:  0.115378912178
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.968403077331624]
max_q:  0.968403077332
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.056948267835920385, -0.032253890214863065, -0.08524044569487181, 3.792790799636988]
max_q:  3.79279079964
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
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.1937689053153893]
max_q:  3.19376890532
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.2174815845708187]
max_q:  3.21748158457
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.5035485861668247, -0.5]
max_q:  2.50354858617
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.2392182072216293]
max_q:  3.23921820722
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.8981029674269232]
max_q:  0.898102967427
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.673271412994522]
max_q:  3.67327141299
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.6190284437308997]
max_q:  3.61902844373
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
Simulator.run(): Trial 13
Environment.reset(): Trial set up with start = (2, 6), destination = (5, 2), deadline = 35
RoutePlanner.route_to(): destination = (5, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.0251789927461209, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.383326115568448, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.2533067589397473, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.4834066427201518, "(['red', None, None, None, 'forward'], 'right')": 0.8642082715800138, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.625377969668718, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.8642082715800138]
max_q:  0.86420827158
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.4834066427201518, -0.5]
max_q:  2.48340664272
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.383326115568448, 0.0, 0.8771556489513704]
max_q:  3.38332611557
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.8331381337203468]
max_q:  0.83313813372
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.3867253141761213, -0.5]
max_q:  2.38672531418
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 14
Environment.reset(): Trial set up with start = (3, 6), destination = (8, 3), deadline = 40
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.0251789927461209, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.2221999407837356, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.2533067589397473, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.2872784260854493, "(['red', None, None, None, 'forward'], 'right')": 0.8728469675305641, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.625377969668718, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.2533067589397473]
max_q:  3.25330675894
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.8728469675305641]
max_q:  0.872846967531
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.2872784260854493, -0.5]
max_q:  3.28727842609
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 1.1110999703918678]
max_q:  1.11109997039
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.6436392130427246, -0.5]
max_q:  2.64363921304
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.2221999407837356, 0.0, 0.8771556489513704]
max_q:  3.22219994078
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.7592499753265566]
max_q:  0.759249975327
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.813184311412384, -0.5]
max_q:  2.81318431141
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0)]
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 15
Environment.reset(): Trial set up with start = (5, 2), destination = (7, 6), deadline = 30
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.0251789927461209, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.0536849501596444, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.299921944430965, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 4.3265282891686425, "(['red', None, None, None, 'forward'], 'right')": 0.8038487252854342, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.625377969668718, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.625377969668718]
max_q:  3.62537796967
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.652136686120953]
max_q:  3.65213668612
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.8038487252854342]
max_q:  0.803848725285
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.3265282891686425, -0.5]
max_q:  4.32652828917
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.299921944430965]
max_q:  3.29992194443
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.1128296407746663, 0.0, 0.8771556489513704]
max_q:  3.11282964077
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.9153456001826281]
max_q:  0.915345600183
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.8260683430604763]
max_q:  3.82606834306
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.0, 3.349927519828753]
max_q:  3.34992751983
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.3770138731692216]
max_q:  3.37701387317
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.8123315627744674]
max_q:  3.81233156277
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.414810438041937]
max_q:  3.41481043804
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.299317598404589, -0.5]
max_q:  4.2993175984
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.0400344362542935, 0.0, 0.8771556489513704]
max_q:  3.04003443625
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0)]
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 16
Environment.reset(): Trial set up with start = (6, 6), destination = (8, 4), deadline = 20
RoutePlanner.route_to(): destination = (8, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.0251789927461209, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.4862132326272675, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.4453015504515316, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 4.291834658444475, "(['red', None, None, None, 'forward'], 'right')": 0.8195783201734967, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.8053364731909007, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.291834658444475, -0.5]
max_q:  4.29183465844
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.4862132326272675, 0.0, 0.8771556489513704]
max_q:  3.48621323263
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.8195783201734967]
max_q:  0.819578320173
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.8053364731909007]
max_q:  3.80533647319
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.188970586101814, 0.0, 0.8771556489513704]
max_q:  3.1889705861
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.134542033229655, 0.0, 0.8771556489513704]
max_q:  3.13454203323
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.1633906321220002, 0.0, 0.8771556489513704]
max_q:  3.16339063212
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.853941691783173]
max_q:  0.853941691783
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.255355326138915, -0.5]
max_q:  4.25535532614
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.1173643954825994, 0.0, 0.8771556489513704]
max_q:  3.11736439548
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.140591648233057, 0.0, 0.8771556489513704]
max_q:  3.14059164823
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
Simulator.run(): Trial 17
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 4), deadline = 30
RoutePlanner.route_to(): destination = (5, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.025, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.0251789927461209, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.1052116970953336, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.4453015504515316, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 4.248262122635055, "(['red', None, None, None, 'forward'], 'right')": 0.8659852509571805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.7989760348858903, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.7989760348858903]
max_q:  3.79897603489
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.8659852509571805]
max_q:  0.865985250957
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.248262122635055, -0.5]
max_q:  4.24826212264
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.1052116970953336, -0.025, 0.8771556489513704]
max_q:  3.1052116971
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.025]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.39948893821788534]
max_q:  0.399488938218
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.4453015504515316]
max_q:  3.44530155045
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.473036472928955]
max_q:  3.47303647293
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.29954572286034253]
max_q:  0.29954572286
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.899488017442945]
max_q:  3.89948801744
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.3435912474713607]
max_q:  3.34359124747
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.903077731105697]
max_q:  3.90307773111
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0251789927461209]
max_q:  0.0251789927461
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.3841210886767934]
max_q:  3.38412108868
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.786222676835096]
max_q:  3.78622267684
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.412398324773502]
max_q:  3.41239832477
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.24956319505802171]
max_q:  0.249563195058
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.7918483958657516]
max_q:  3.79184839587
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.4365746184314703]
max_q:  3.43657461843
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.4488229962916557]
max_q:  3.44882299629
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 2.9241182514980553, -0.025, 0.8771556489513704]
max_q:  2.9241182515
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.2198116904137831]
max_q:  0.219811690414
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.7885047101089326]
max_q:  3.78850471011
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.4603058505355797]
max_q:  3.46030585054
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.4699432460617303]
max_q:  3.46994324606
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 2.891549755246409, -0.025, 0.8771556489513704]
max_q:  2.89154975525
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0)]
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 18
Environment.reset(): Trial set up with start = (2, 5), destination = (7, 4), deadline = 30
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.07118055555555555, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.2433572593256352, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.419255547921671, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 4.217229357305674, "(['red', None, None, None, 'forward'], 'right')": 0.2477333514602993, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.025, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.7924212895513603, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  right
q:  [0.12539778470751042, -0.032253890214863065, -0.08524044569487181, 3.7924212895513603]
max_q:  3.79242128955
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, 0.2477333514602993]
max_q:  0.24773335146
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.217229357305674, -0.5]
max_q:  4.21722935731
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.07118055555555555, -0.9093219766314604, -1.0, -0.37613332426985036]
max_q:  0.0711805555556
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.06524884259259259, -0.9093219766314604, -1.0, -0.37613332426985036]
max_q:  0.0652488425926
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.06058821097883598, -0.9093219766314604, -1.0, -0.37613332426985036]
max_q:  0.0605882109788
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.05680144779265873, -0.9093219766314604, -1.0, -0.37613332426985036]
max_q:  0.0568014477927
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.2433572593256352, -0.025, 0.8771556489513704]
max_q:  3.24335725933
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.053645811804177684, -0.9093219766314604, -1.0, -0.37613332426985036]
max_q:  0.0536458118042
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.121703823983281, -0.025, 0.8771556489513704]
max_q:  3.12170382398
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.1582994979839776, -0.025, 0.8771556489513704]
max_q:  3.15829949798
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.773783485844539, -0.5]
max_q:  3.77378348584
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.1906725942153633, -0.025, 0.8771556489513704]
max_q:  3.19067259422
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 19
Environment.reset(): Trial set up with start = (4, 6), destination = (3, 3), deadline = 20
RoutePlanner.route_to(): destination = (3, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.04950045361930941, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.7428024462525062, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.419255547921671, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.647084665427072, "(['red', None, None, None, 'forward'], 'right')": -0.37613332426985036, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.025, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.7958809347255045, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": -0.032253890214863065}
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.647084665427072, -0.5]
max_q:  3.64708466543
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.419255547921671]
max_q:  3.41925554792
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.04950045361930941, -0.9093219766314604, -1.0, -0.3823281023273813]
max_q:  0.0495004536193
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.7428024462525062, -0.025, 0.8771556489513704]
max_q:  3.74280244625
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 20
Environment.reset(): Trial set up with start = (8, 4), destination = (3, 5), deadline = 30
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.04596470693221588, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 5.008877293361724, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.499036367828518, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.235313499070304, "(['red', None, None, None, 'forward'], 'right')": -0.3823281023273813, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.025, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.7958809347255045, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998}
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.499036367828518]
max_q:  3.49903636783
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.7958809347255045]
max_q:  3.79588093473
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.04596470693221588, -0.9093219766314604, -1.0, -0.3823281023273813]
max_q:  0.0459647069322
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.03447353019916191, -0.9093219766314604, -1.0, -0.3823281023273813]
max_q:  0.0344735301992
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 5.008877293361724, -0.025, 0.8771556489513704]
max_q:  5.00887729336
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.260248962750373, -0.025, 0.8771556489513704]
max_q:  4.26024896275
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02872794183263493, -0.9093219766314604, -1.0, -0.3823281023273813]
max_q:  0.0287279418326
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.02633394667991535, -0.9093219766314604, -1.0, -0.3823281023273813]
max_q:  0.0263339466799
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.8110719643835615, -0.025, 0.8771556489513704]
max_q:  3.81107196438
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.822879966609589, -0.025, 0.8771556489513704]
max_q:  3.82287996661
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 21
Environment.reset(): Trial set up with start = (7, 3), destination = (1, 3), deadline = 30
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.024452950488492827, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.732807356457884, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.5488993802702975, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.235313499070304, "(['red', None, None, None, 'forward'], 'right')": -0.3823281023273813, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.025, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.8979404673627522, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998}
next_waypoint:  forward
q:  [0.27213970704503504, 4.732807356457884, -0.025, 0.8771556489513704]
max_q:  4.73280735646
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.6920958366546675, -0.025, 0.8771556489513704]
max_q:  4.69209583665
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.346047918327334, -0.025, 0.8771556489513704]
max_q:  4.34604791833
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.024452950488492827, -0.9093219766314604, -1.0, -0.3823281023273813]
max_q:  0.0244529504885
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.8979404673627522]
max_q:  3.89794046736
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.5488993802702975]
max_q:  3.54889938027
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.020377458740410692, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.0203774587404
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.019245377699276763, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.0192453776993
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.018283108814312925, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.0182831088143
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.2595359387455005, -0.025, 0.8771556489513704]
max_q:  4.25953593875
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.248721941297771, -0.025, 0.8771556489513704]
max_q:  4.2487219413
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.239155712786318, -0.025, 0.8771556489513704]
max_q:  4.23915571279
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 22
Environment.reset(): Trial set up with start = (7, 6), destination = (2, 4), deadline = 35
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.01745205841366234, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.794125021102069, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.5811208531081333, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.235313499070304, "(['red', None, None, None, 'forward'], 'right')": -0.411746076745536, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.025, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.877358671158152, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998}
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.877358671158152]
max_q:  3.87735867116
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.01745205841366234, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.0174520584137
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00872602920683117, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00872602920683
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0065445219051233775, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00654452190512
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.005453768254269482, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00545376825427
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.8817387186167895]
max_q:  3.88173871862
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.794125021102069, -0.11952279527775143, 0.8771556489513704]
max_q:  4.7941250211
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.737401805309064, -0.11952279527775143, 0.8771556489513704]
max_q:  4.73740180531
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.395524832596837, -0.11952279527775143, 0.8771556489513704]
max_q:  4.3955248326
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.235313499070304, -0.5]
max_q:  3.23531349907
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.129620520487326, -0.11952279527775143, 0.8771556489513704]
max_q:  4.12962052049
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.936235566225864, -0.11952279527775143, 0.8771556489513704]
max_q:  3.93623556623
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 23
Environment.reset(): Trial set up with start = (8, 6), destination = (3, 3), deadline = 40
RoutePlanner.route_to(): destination = (3, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.27213970704503504, "(['red', None, None, None, 'forward'], None)": 0.004772047222485797, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.608414771007978, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.5811208531081333, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.273547824116789, "(['red', None, None, None, 'forward'], 'right')": -0.411746076745536, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.8665423366063356, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.8665423366063356]
max_q:  3.86654233661
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.933271168303168]
max_q:  3.9332711683
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.004772047222485797, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00477204722249
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 4.608414771007978, -0.11952279527775143, 0.8771556489513704]
max_q:  4.60841477101
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.003976706018738165, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00397670601874
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0035790354168643485, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00357903541686
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.003280782465458986, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00328078246546
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.956808166508326, -0.11952279527775143, 0.8771556489513704]
max_q:  3.95680816651
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.9595076561015556, -0.11952279527775143, 0.8771556489513704]
max_q:  3.9595076561
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0030464408607833444, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00304644086078
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0028941188177441773, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00289411881774
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.27213970704503504, 3.7419538299158708, -0.11952279527775143, 0.8771556489513704]
max_q:  3.74195382992
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.273547824116789, -0.5]
max_q:  3.27354782412
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0027625679623921695, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00276256796239
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0026762377135674145, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00267623771357
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.002597524839638961, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00259752483964
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.002525371371871212, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00252537137187
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.596906117754648, -0.11952279527775143, 0.8771556489513704]
max_q:  3.59690611775
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 24
Environment.reset(): Trial set up with start = (3, 4), destination = (7, 4), deadline = 20
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.3484553746366495, "(['red', None, None, None, 'forward'], None)": 0.00245891423050618, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.9971119910575337, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.5811208531081333, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.188644635842336, "(['red', None, None, None, 'forward'], 'right')": -0.411746076745536, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.949953376227376, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9093219766314604, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998}
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.949953376227376]
max_q:  3.94995337623
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.00245891423050618, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00245891423051
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00122945711525309, -0.9093219766314604, -1.0, -0.411746076745536]
max_q:  0.00122945711525
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0009220928364398176, -0.9393943022815671, -1.0, -0.411746076745536]
max_q:  0.00092209283644
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.9971119910575337, -0.11952279527775143, 0.8771556489513704]
max_q:  3.99711199106
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.5977702759692156, -0.11952279527775143, 0.8771556489513704]
max_q:  3.59777027597
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0008068312318848404, -0.9393943022815671, -1.0, -0.411746076745536]
max_q:  0.000806831231885
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0007492004296073519, -0.9393943022815671, -1.0, -0.411746076745536]
max_q:  0.000749200429607
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0007023754027568924, -0.9393943022815671, -1.0, -0.411746076745536]
max_q:  0.000702375402757
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.3315424659103368, -0.11952279527775143, 0.8771556489513704]
max_q:  3.33154246591
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 25
Environment.reset(): Trial set up with start = (1, 2), destination = (6, 3), deadline = 30
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.3484553746366495, "(['red', None, None, None, 'forward'], None)": 0.0006633545470481761, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.198388219319304, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.5811208531081333, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 3.188644635842336, "(['red', None, None, None, 'forward'], 'right')": -0.411746076745536, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.9511449625076764, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9393943022815671, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998}
next_waypoint:  right
q:  [0.3078593034646159, -0.041666666666666664, 0.09142361050650853, 3.5811208531081333]
max_q:  3.58112085311
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.5, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.188644635842336, -0.5]
max_q:  3.18864463584
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0006633545470481761, -0.9393943022815671, -1.0, -0.411746076745536]
max_q:  0.000663354547048
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.290064056362044, -0.5]
max_q:  3.29006405636
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.3484553746366495, 4.198388219319304, -0.11952279527775143, 0.8771556489513704]
max_q:  4.19838821932
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.923627005597662, -0.11952279527775143, 0.8771556489513704]
max_q:  3.9236270056
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.340773766621898, -0.5]
max_q:  3.34077376662
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 26
Environment.reset(): Trial set up with start = (3, 6), destination = (7, 4), deadline = 30
RoutePlanner.route_to(): destination = (7, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.3484553746366495, "(['red', None, None, None, 'forward'], None)": 0.0005970190923433585, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.7099238393697185, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.42300876779732, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 4.373735078290803, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.9511449625076764, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9393943022815671, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [0.0005970190923433585, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000597019092343
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
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'right'}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0005671681377261906, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000567168137726
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.000425376103294643, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000425376103295
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0003544800860788692, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000354480086079
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.7099238393697185, -0.11952279527775143, 0.8771556489513704]
max_q:  3.70992383937
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.7389314554327466, -0.11952279527775143, 0.8771556489513704]
max_q:  3.73893145543
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00031017007531901054, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000310170075319
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.4491353937002325, -0.11952279527775143, 0.8771556489513704]
max_q:  3.4491353937
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.483564431593968, -0.11952279527775143, 0.8771556489513704]
max_q:  3.48356443159
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.373735078290803, -0.5]
max_q:  4.37373507829
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0002880150699390812, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000288015069939
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.3484553746366495, 3.512255296505414, -0.11952279527775143, 0.8771556489513704]
max_q:  3.51225529651
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 27
Environment.reset(): Trial set up with start = (6, 6), destination = (5, 1), deadline = 30
RoutePlanner.route_to(): destination = (5, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.3484553746366495, "(['red', None, None, None, 'forward'], None)": 0.00027492347585094117, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.21957881027479, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.42300876779732, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 4.136361570461723, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 3.9511449625076764, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9393943022815671, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.9511449625076764]
max_q:  3.95114496251
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, -0.08524044569487181, 3.9531805890698566]
max_q:  3.95318058907
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 28
Environment.reset(): Trial set up with start = (8, 3), destination = (2, 5), deadline = 40
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.3484553746366495, "(['red', None, None, None, 'forward'], None)": 0.00027492347585094117, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.21957881027479, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.42300876779732, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 4.136361570461723, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 13.976590294534928, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -1.0, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9393943022815671, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 4.136361570461723, -0.5]
max_q:  4.13636157046
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00013746173792547058, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000137461737925
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.3484553746366495, 4.21957881027479, -0.11952279527775143, 0.8771556489513704]
max_q:  4.21957881027
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.182982341895658, -0.11952279527775143, 0.8771556489513704]
max_q:  4.1829823419
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00010309630344410294, -0.9393943022815671, -1.0, -0.07658937901133805]
max_q:  0.000103096303444
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [9.450494482376103e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  9.45049448238e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.859838577227598e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  8.85983857723e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.7463961831468713, -0.11952279527775143, 0.8771556489513704]
max_q:  3.74639618315
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.7590763739895277, -0.11952279527775143, 0.8771556489513704]
max_q:  3.75907637399
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.7700274478990945, -0.11952279527775143, 0.8771556489513704]
max_q:  3.7700274479
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.0, -0.5]
max_q:  2.0
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.7796096375699655, -0.11952279527775143, 0.8771556489513704]
max_q:  3.77960963757
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0)]
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 29
Environment.reset(): Trial set up with start = (7, 3), destination = (3, 2), deadline = 25
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 8.367625322937175e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.366780377743539, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.42300876779732, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.076923076923077, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 13.976590294534928, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": -0.08524044569487181, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999932496467984, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'forward'], 'forward')": -0.9393943022815671, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [8.367625322937175e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  8.36762532294e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.068781561403705e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  8.0687815614e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.0343907807018526e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  4.0343907807e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.366780377743539, -0.11952279527775143, 0.8771556489513704]
max_q:  4.36678037774
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.305650314786282, -0.11952279527775143, 0.8771556489513704]
max_q:  4.30565031479
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.0257930855263894e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  3.02579308553e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.7232137769737505e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  2.72321377697e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.4962792955592714e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  2.49627929556e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.317973631590752e-05, -0.9393943022815671, -0.9999932496467984, -0.07658937901133805]
max_q:  2.31797363159e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.267444025437997, -0.11952279527775143, 0.8771556489513704]
max_q:  4.26744402544
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.254071824166097, -0.11952279527775143, 0.8771556489513704]
max_q:  4.25407182417
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, 0.38195459991761554, 13.976590294534928]
max_q:  13.9765902945
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, 0.38195459991761554, 13.243369872346625]
max_q:  13.2433698723
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 30
Environment.reset(): Trial set up with start = (8, 6), destination = (3, 1), deadline = 50
RoutePlanner.route_to(): destination = (3, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 2.17310027961633e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.242523104885819, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.42300876779732, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.076923076923077, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.11952279527775143, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 13.274578839783427, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999927924081098, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9393943022815671, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, 0.38195459991761554, 13.274578839783427]
max_q:  13.2745788398
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.12539778470751042, 0.15378498130065998, 0.38195459991761554, 12.965426211790646]
max_q:  12.9654262118
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.17310027961633e-05, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  2.17310027962e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6298252097122476e-05, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  1.62982520971e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.242523104885819, -0.11952279527775143, 0.8771556489513704]
max_q:  4.24252310489
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.3581876747602064e-05, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  1.35818767476e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.2223689072841858e-05, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  1.22236890728e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1205048316771704e-05, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  1.12050483168e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.681894026398958, -0.1670824458680325, 0.8771556489513704]
max_q:  3.6818940264
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0404687722716583e-05, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  1.04046877227e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.513705143993448, -0.1670824458680325, 0.8771556489513704]
max_q:  3.51370514399
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.42300876779732]
max_q:  3.4230087678
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0)]
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 31
Environment.reset(): Trial set up with start = (4, 5), destination = (8, 1), deadline = 40
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 9.93174737168401e-06, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.533967429660388, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.214431507497424, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.076923076923077, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 8.482713105895323, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999927924081098, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9393943022815671, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 4.214431507497424]
max_q:  4.2144315075
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [9.93174737168401e-06, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  9.93174737168e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.965873685842005e-06, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  4.96587368584e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.724405264381504e-06, -0.9393943022815671, -0.9999927924081098, -0.07658937901133805]
max_q:  3.72440526438e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.533967429660388, -0.1670824458680325, 0.8771556489513704]
max_q:  3.53396742966
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [3.1036710536512535e-06, -0.9494949932620514, -0.9999927924081098, -0.07658937901133805]
max_q:  3.10367105365e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 2.9203810785304434, -0.1670824458680325, 0.8771556489513704]
max_q:  2.92038107853
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.076923076923077, -0.5]
max_q:  2.07692307692
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.8819802641047357e-06, -0.9494949932620514, -0.9999927924081098, -0.07658937901133805]
max_q:  2.8819802641e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 2.805333443714138, -0.1670824458680325, 0.8771556489513704]
max_q:  2.80533344371
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 2.8551112168927153, -0.1670824458680325, 0.8771556489513704]
max_q:  2.85511121689
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 2.8991454008583806, -0.1670824458680325, 0.8771556489513704]
max_q:  2.89914540086
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0)]
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 32
Environment.reset(): Trial set up with start = (1, 3), destination = (7, 6), deadline = 45
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 2.750981161190884e-06, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.5492065419035375, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.370348818685904, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.0692307692307694, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 8.482713105895323, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999927924081098, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9494949932620514, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.15378498130065998, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [0.7842143237144444, 3.5492065419035375, -0.1670824458680325, 0.8771556489513704]
max_q:  3.5492065419
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 45, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.750981161190884e-06, -0.9494949932620514, -0.9999927924081098, -0.07658937901133805]
max_q:  2.75098116119e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.375490580595442e-06, -0.9494949932620514, -0.9999927924081098, -0.07658937901133805]
max_q:  1.3754905806e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.438549030016898, -0.1670824458680325, 0.8771556489513704]
max_q:  3.43854903002
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.0789119014649153, -0.1670824458680325, 0.8771556489513704]
max_q:  3.07891190146
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 2.8631296243337263, -0.1670824458680325, 0.8771556489513704]
max_q:  2.86312962433
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 2.9578688223059157, -0.1670824458680325, 0.8771556489513704]
max_q:  2.95786882231
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.12539778470751042, 0.4968484892614379, 0.38195459991761554, 8.482713105895323]
max_q:  8.4827131059
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0316179354465815e-06, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  1.03161793545e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.032306763569779, -0.1670824458680325, 0.8771556489513704]
max_q:  3.03230676357
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [9.847262111081004e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  9.84726211108e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.468521260654812e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  9.46852126065e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.130359787059998e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  9.13035978706e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 2.9462812409692227, -0.1670824458680325, 0.8771556489513704]
max_q:  2.94628124097
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 33
Environment.reset(): Trial set up with start = (8, 1), destination = (4, 5), deadline = 40
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 8.826014460824665e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.604209952188935, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.370348818685904, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.0692307692307694, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 8.258577450600557, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999927924081098, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 4.370348818685904]
max_q:  4.37034881869
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [8.826014460824665e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  8.82601446082e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.4130072304123324e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  4.41300723041e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.3097554228092493e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  3.30975542281e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.604209952188935, -0.1670824458680325, 0.8771556489513704]
max_q:  3.60420995219
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.7581295190077077e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  2.75812951901e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.482316567106937e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  2.48231656711e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.275456853181359e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  2.27545685318e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.20315749861832, -0.1670824458680325, 0.8771556489513704]
max_q:  3.20315749862
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.2529601549546747, -0.1670824458680325, 0.8771556489513704]
max_q:  3.25296015495
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.0692307692307694, -0.5]
max_q:  2.06923076923
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.2944623685683037, -0.1670824458680325, 0.8771556489513704]
max_q:  3.29446236857
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.1767839810299314, -0.1670824458680325, 0.8771556489513704]
max_q:  3.17678398103
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 3.2110846484870175, -0.1670824458680325, 0.8771556489513704]
max_q:  3.21108464849
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 34
Environment.reset(): Trial set up with start = (8, 3), destination = (2, 3), deadline = 30
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 2.112924220811262e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.0106583158529014, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.480282562849303, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.165769230769231, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 8.258577450600557, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999927924081098, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.12539778470751042, 0.4968484892614379, 0.38195459991761554, 8.258577450600557]
max_q:  8.2585774506
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.5, -0.16655610757549197]
max_q:  0.0
count:  2
best:  [0, 1]
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, -0.5, -0.16655610757549197]
max_q:  0.0
count:  2
best:  [0, 1]
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.0106583158529014, -0.1670824458680325, 0.8771556489513704]
max_q:  4.01065831585
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.008881929877418, -0.1670824458680325, 0.8771556489513704]
max_q:  4.00888192988
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.112924220811262e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  2.11292422081e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.9016317987301359e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  1.90163179873e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.7431624821692912e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  1.74316248217e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6186508763000563e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  1.6186508763e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5174851965313026e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  1.51748519653e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.007771688642741, -0.1670824458680325, 0.8771556489513704]
max_q:  4.00777168864
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.0073831042106045, -0.1670824458680325, 0.8771556489513704]
max_q:  4.00738310421
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.007047508564668, -0.1670824458680325, 0.8771556489513704]
max_q:  4.00704750856
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 35
Environment.reset(): Trial set up with start = (7, 6), destination = (2, 6), deadline = 25
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8771556489513704, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 1.4331804633906747e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.25, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.67312688882253, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.480282562849303, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.165769230769231, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 8.094786010192843, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999927924081098, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 4.480282562849303]
max_q:  4.48028256285
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4331804633906747e-07, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  1.43318046339e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.165902316953373e-08, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  7.16590231695e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.37442673771503e-08, -0.9663298235717118, -0.9999927924081098, -0.07658937901133805]
max_q:  5.37442673772e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.67312688882253, -0.1670824458680325, 0.8771556489513704]
max_q:  4.67312688882
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.605814199940277, -0.1670824458680325, 0.8771556489513704]
max_q:  4.60581419994
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.555329683278588, -0.1670824458680325, 0.8771556489513704]
max_q:  4.55532968328
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.165769230769231, -0.5]
max_q:  2.16576923077
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.25, -0.2, -0.084375]
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
q:  [0.0, -0.3076923076923077, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.26767094017094, -0.5]
max_q:  2.26767094017
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 36
Environment.reset(): Trial set up with start = (2, 2), destination = (8, 3), deadline = 35
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 4.478688948095858e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 0.12539778470751042, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.515663277330118, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.610875099703229, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.9164928774928773, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 8.094786010192843, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = None, reward = 0.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 8.094786010192843]
max_q:  8.09478601019
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 6.200111780022229]
max_q:  6.20011178002
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [4.478688948095858e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  4.4786889481e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.15878259466044e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  4.15878259466e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.898858682494162e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  3.89885868249e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.515663277330118, -0.1670824458680325, 0.7050111956316297]
max_q:  4.51566327733
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.489880113463612, -0.1670824458680325, 0.7050111956316297]
max_q:  4.48988011346
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.263527377549764, -0.1670824458680325, 0.7050111956316297]
max_q:  4.26352737755
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.5859438795550196]
max_q:  0.585943879555
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.2, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.9164928774928773, -0.5]
max_q:  2.91649287749
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [3.682255422355597e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  3.68225542236e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.5671849404069846e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  3.56718494041e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.099314424402076, -0.1670824458680325, 0.7050111956316297]
max_q:  4.0993144244
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0)]
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 37
Environment.reset(): Trial set up with start = (2, 3), destination = (5, 5), deadline = 25
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 3.4622677362773674e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.652111245946463, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.660827327585033, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.8553933523266855, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5024097363901163, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 5.821176933988107, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.821176933988107]
max_q:  5.82117693399
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.652111245946463, -0.1670824458680325, 0.7050111956316297]
max_q:  4.65211124595
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.326055622973231, -0.1670824458680325, 0.7050111956316297]
max_q:  4.32605562297
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 4.660827327585033]
max_q:  4.66082732759
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.5, -0.5, -0.16655610757549197]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, -0.5, -0.5, -0.16655610757549197]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.244541717229923, -0.1670824458680325, 0.7050111956316297]
max_q:  4.24454171723
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 38
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 6), deadline = 35
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 0.7842143237144444, "(['red', None, None, None, 'forward'], None)": 3.4622677362773674e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 5.5371181005768255, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.773884885056689, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.8553933523266855, "(['red', None, None, None, 'forward'], 'right')": -0.07658937901133805, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5024097363901163, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 5.738356752310574, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [0.7842143237144444, 5.5371181005768255, -0.1670824458680325, 0.7050111956316297]
max_q:  5.53711810058
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.4622677362773674e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  3.46226773628e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.7311338681386837e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  1.73113386814e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.2983504011040128e-08, -0.9663298235717118, -0.9999945887077212, -0.07658937901133805]
max_q:  1.2983504011e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.8553933523266855, -0.5]
max_q:  2.85539335233
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.7842143237144444, 4.947598420032578, -0.1670824458680325, 0.7050111956316297]
max_q:  4.94759842003
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.4360077682455687]
max_q:  0.436007768246
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.969854017094017, -0.5]
max_q:  2.96985401709
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 4.868631885029863, -0.1670824458680325, 0.7050111956316297]
max_q:  4.86863188503
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 3.0213613162393163, -0.5]
max_q:  3.02136131624
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.6024864542754979]
max_q:  0.602486454275
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.773884885056689]
max_q:  3.77388488506
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.738356752310574]
max_q:  5.73835675231
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.680411527233556]
max_q:  5.68041152723
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 4.829148617528506, -0.1670824458680325, 0.7050111956316297]
max_q:  4.82914861753
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.7034162892361714]
max_q:  0.703416289236
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.568572070058837]
max_q:  5.56857207006
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.480277761763006]
max_q:  5.48027776176
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.781960424876093]
max_q:  3.78196042488
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 4.804761893483549, -0.1670824458680325, 0.7050111956316297]
max_q:  4.80476189348
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.6560991700907222]
max_q:  0.656099170091
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.400812884296757]
max_q:  5.4008128843
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.7871518433314244]
max_q:  3.78715184333
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.791408806464796]
max_q:  3.79140880646
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.5024097363901163]
max_q:  0.50240973639
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.7954201755712424]
max_q:  3.79542017557
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.33801134418713]
max_q:  5.33801134419
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.8266196575898968]
max_q:  3.82661965759
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.6200970142191847]
max_q:  0.620097014219
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.314942183080456]
max_q:  5.31494218308
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.2715739071308825]
max_q:  5.27157390713
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.252307635810718]
max_q:  5.25230763581
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 4.6921840612818135, -0.1670824458680325, 0.7050111956316297]
max_q:  4.69218406128
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0)]
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 39
Environment.reset(): Trial set up with start = (3, 5), destination = (7, 2), deadline = 35
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 1.1967397284145662, "(['red', None, None, None, 'forward'], None)": 1.0819586675866775e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.08028958880511541, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 4.909464036919699, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.854314705388241, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.936247873219373, "(['red', None, None, None, 'forward'], 'right')": 0.5939664172156496, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 5.233891347048796, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.1967397284145662, 4.909464036919699, -0.1670824458680325, 0.7050111956316297]
max_q:  4.90946403692
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 4.896471693535132, -0.1670824458680325, 0.7050111956316297]
max_q:  4.89647169354
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.08028958880511541]
max_q:  0.0802895888051
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.936247873219373, -0.5]
max_q:  2.93624787322
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.5939664172156496]
max_q:  0.593966417216
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.6241652488129157, -0.5]
max_q:  2.62416524881
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 3.854314705388241]
max_q:  3.85431470539
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 40
Environment.reset(): Trial set up with start = (2, 2), destination = (2, 6), deadline = 20
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 1.1967397284145662, "(['red', None, None, None, 'forward'], None)": 1.0819586675866775e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 2.0401447944025577, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.533121813272555, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.7617487239316243, "(['red', None, None, None, 'forward'], 'right')": 0.5754929122120569, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 5.233891347048796, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.7617487239316243, -0.5]
max_q:  2.76174872393
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.5754929122120569]
max_q:  0.575492912212
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 5.533121813272555]
max_q:  5.53312181327
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 5.0750337433984765]
max_q:  5.0750337434
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 2.0401447944025577, -0.1670824458680325, 0.7050111956316297]
max_q:  2.0401447944
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 2.084123075242174, -0.1670824458680325, 0.7050111956316297]
max_q:  2.08412307524
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 2.24377948563866, -0.1670824458680325, 0.7050111956316297]
max_q:  2.24377948564
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 41
Environment.reset(): Trial set up with start = (5, 1), destination = (1, 2), deadline = 25
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 1.1967397284145662, "(['red', None, None, None, 'forward'], None)": 1.0819586675866775e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'forward'], 'forward')": 3.6746733017760858, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.783878771228056, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.634790603276354, "(['red', None, None, None, 'forward'], 'right')": 0.5200723972012788, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.2, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 5.233891347048796, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3078593034646159, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.233891347048796]
max_q:  5.23389134705
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 5.145756250831026]
max_q:  5.14575625083
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.5200723972012788]
max_q:  0.520072397201
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.634790603276354, -0.5]
max_q:  2.63479060328
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.6746733017760858, -0.1670824458680325, 0.7050111956316297]
max_q:  3.67467330178
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.9287045240446609]
max_q:  0.928704524045
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.7485580530033245, -0.5]
max_q:  2.748558053
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 4.572878125415513]
max_q:  4.57287812542
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.8081604912918696]
max_q:  0.808160491292
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 4.783878771228056]
max_q:  4.78387877123
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [0.0, 0.0, -0.0625, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': 'right', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 4.550844351361071]
max_q:  4.55084435136
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.501770296096978, -0.1670824458680325, 0.7050111956316297]
max_q:  3.5017702961
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.7435833308885885]
max_q:  0.743583330889
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3078593034646159, 0.5024968178278442, 0.09142361050650853, 4.757749478853788]
max_q:  4.75774947885
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.626428075098845]
max_q:  4.6264280751
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.612810073466262]
max_q:  4.61281007347
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.0819586675866775e-08, -0.9663298235717118, -0.9999945887077212, 0.6999937476163738]
max_q:  0.699993747616
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Simulator.run(): Trial 42
Environment.reset(): Trial set up with start = (2, 6), destination = (8, 6), deadline = 30
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 1.1967397284145662, "(['red', None, None, None, 'forward'], None)": 1.0819586675866775e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 3.4422977365889422, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.598553205489155, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.6861782152530473, "(['red', None, None, None, 'forward'], 'right')": 0.6659938726640463, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.541290484031394, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3990117913775616, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.598553205489155]
max_q:  4.59855320549
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 4.541290484031394]
max_q:  4.54129048403
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.4422977365889422, -0.1670824458680325, 0.7050111956316297]
max_q:  3.44229773659
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.5817233024417066, -0.1670824458680325, 0.7050111956316297]
max_q:  3.58172330244
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.6659938726640463]
max_q:  0.665993872664
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.6861782152530473, -0.5]
max_q:  2.68617821525
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.4993944853976417]
max_q:  0.499394485398
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.07748036067646288, 2.6004059383464164, -0.5]
max_q:  2.60040593835
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.651436085368089, -0.1670824458680325, 0.7050111956316297]
max_q:  3.65143608537
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 4.292718443475108]
max_q:  4.29271844348
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.41609479176443936]
max_q:  0.416094791764
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.585436886950217]
max_q:  4.58543688695
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.5671419842330225]
max_q:  4.56714198423
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 4.282264213350997]
max_q:  4.28226421335
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.5404061861768685, -0.1670824458680325, 0.7050111956316297]
max_q:  3.54040618618
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.36889163203895803]
max_q:  0.368891632039
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.550461337637933]
max_q:  4.55046133764
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.53735511531322]
max_q:  4.53735511531
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.525142499056102]
max_q:  4.52514249906
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.552500760224846, -0.1670824458680325, 0.7050111956316297]
max_q:  3.55250076022
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.3346693412379841]
max_q:  0.334669341238
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.508437900420554]
max_q:  4.50843790042
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 4.281873460876995]
max_q:  4.28187346088
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.415814339033205]
max_q:  4.41581433903
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.4947855064912687, -0.1670824458680325, 0.7050111956316297]
max_q:  3.49478550649
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 1, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.37117827771829004]
max_q:  0.371178277718
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
Simulator.run(): Trial 43
Environment.reset(): Trial set up with start = (6, 3), destination = (1, 1), deadline = 35
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7050111956316297, "(['green', None, None, None, 'forward'], None)": 1.1967397284145662, "(['red', None, None, None, 'forward'], None)": 0.08324924219769579, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 3.5034961012069368, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.408389082979041, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.07748036067646288, "(['green', None, None, None, 'left'], 'left')": 2.6587223575819823, "(['red', None, None, None, 'forward'], 'right')": 0.4005306034811293, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.1670824458680325, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.276653581971866, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.38195459991761554, "(['green', None, None, None, 'right'], None)": 0.3990117913775616, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.38195459991761554, 4.276653581971866]
max_q:  4.27665358197
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.408389082979041]
max_q:  4.40838908298
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 2.6587223575819823, -0.5]
max_q:  2.65872235758
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.5034961012069368, -0.1670824458680325, 0.978379623117549]
max_q:  3.50349610121
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.204194541489521]
max_q:  4.20419454149
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.4005306034811293]
max_q:  0.400530603481
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 2.742552210233108, -0.5]
max_q:  2.74255221023
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.274238280622455]
max_q:  4.27423828062
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 44
Environment.reset(): Trial set up with start = (4, 2), destination = (8, 2), deadline = 20
RoutePlanner.route_to(): destination = (8, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.1967397284145662, "(['red', None, None, None, 'forward'], None)": 0.08324924219769579, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.29759603729207473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 3.3364409788506104, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.194912971421815, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 2.693048729550901, "(['red', None, None, None, 'forward'], 'right')": 0.34217516166941553, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.854407742957088, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.3990117913775616, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [0.0, 0.29759603729207473, 0.0, 0.0]
max_q:  0.297596037292
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, 0.34217516166941553]
max_q:  0.342175161669
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 2.693048729550901, -0.5]
max_q:  2.69304872955
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.3364409788506104, -0.033552152338698724, 0.978379623117549]
max_q:  3.33644097885
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.391737563946393, -0.033552152338698724, 0.978379623117549]
max_q:  3.39173756395
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 2.554438983640721, -0.5]
max_q:  2.55443898364
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 45
Environment.reset(): Trial set up with start = (2, 6), destination = (5, 5), deadline = 20
RoutePlanner.route_to(): destination = (5, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.1967397284145662, "(['red', None, None, None, 'forward'], None)": 0.08324924219769579, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 3.198864286396744, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.194912971421815, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 3.735134110685631, "(['red', None, None, None, 'forward'], 'right')": -0.32891241916529224, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.854407742957088, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.3990117913775616, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.194912971421815]
max_q:  4.19491297142
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.1967397284145662, 3.198864286396744, -0.033552152338698724, 0.978379623117549]
max_q:  3.1988642864
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.599432143198372, -0.033552152338698724, 0.978379623117549]
max_q:  3.5994321432
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 3.735134110685631, -0.5]
max_q:  3.73513411069
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 46
Environment.reset(): Trial set up with start = (5, 2), destination = (3, 5), deadline = 25
RoutePlanner.route_to(): destination = (3, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.08324924219769579, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 3.6661934526653104, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.182730910707952, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 5.001688228767779, "(['red', None, None, None, 'forward'], 'right')": -0.32891241916529224, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.854407742957088, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.3990117913775616, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.16666666666666666, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, 0.0, 0.16666666666666666, 0.0]
max_q:  0.166666666667
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.6661934526653104, -0.033552152338698724, 0.978379623117549]
max_q:  3.66619345267
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 5.001688228767779, -0.5]
max_q:  5.00168822877
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 2.041624621098848, -0.033552152338698724, 0.978379623117549]
max_q:  2.0416246211
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 2.2048225693406107, -0.033552152338698724, 0.978379623117549]
max_q:  2.20482256934
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 47
Environment.reset(): Trial set up with start = (4, 2), destination = (5, 6), deadline = 25
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.08324924219769579, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 3.761620957244853, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.182730910707952, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 4.901519405891001, "(['red', None, None, None, 'forward'], 'right')": -0.32891241916529224, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.854407742957088, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.3990117913775616, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9663298235717118, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  right
q:  [0.0, -0.14285714285714285, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.854407742957088]
max_q:  4.85440774296
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.3990117913775616, 0.5024968178278442, 0.09142361050650853, 4.182730910707952]
max_q:  4.18273091071
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.08324924219769579, -0.9663298235717118, -0.9999945887077212, -0.32891241916529224]
max_q:  0.0832492421977
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.07492431797792622, -0.9663298235717118, -0.9999945887077212, -0.32891241916529224]
max_q:  0.0749243179779
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.06868062481309903, -0.9663298235717118, -0.9999945887077212, -0.32891241916529224]
max_q:  0.0686806248131
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.06377486589787768, -0.9663298235717118, -0.9999945887077212, -0.32891241916529224]
max_q:  0.0637748658979
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.472886599155532]
max_q:  4.47288659916
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.4356296912565405]
max_q:  4.43562969126
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.417478454120851]
max_q:  4.41747845412
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.761620957244853, -0.033552152338698724, 0.978379623117549]
max_q:  3.76162095724
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.059788936779260324, -0.9663298235717118, -0.9999945887077212, -0.34460054277030083]
max_q:  0.0597889367793
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.05779597221995165, -0.9663298235717118, -0.9999945887077212, -0.34460054277030083]
max_q:  0.05779597222
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.770134494486108, -0.033552152338698724, 0.978379623117549]
max_q:  3.77013449449
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.05598984808807816, -0.9666636619472558, -0.9999945887077212, -0.34460054277030083]
max_q:  0.0559898480881
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.6733489627948823, -0.033552152338698724, 0.978379623117549]
max_q:  3.67334896279
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 48
Environment.reset(): Trial set up with start = (8, 1), destination = (7, 6), deadline = 30
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.05451643103312873, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 4.091044425430966, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.200635040331224, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 4.901519405891001, "(['red', None, None, None, 'forward'], 'right')": -0.34460054277030083, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.393081459201218, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9666636619472558, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.4982279000068761, 4.091044425430966, -0.033552152338698724, 0.978379623117549]
max_q:  4.09104442543
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': 'forward', 'right': None, 'left': None}, action = right, reward = 9.5
Simulator.run(): Trial 49
Environment.reset(): Trial set up with start = (5, 6), destination = (7, 2), deadline = 30
RoutePlanner.route_to(): destination = (7, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.05451643103312873, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 4.088768314795192, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.200635040331224, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 4.901519405891001, "(['red', None, None, None, 'forward'], 'right')": -0.34460054277030083, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.393081459201218, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9666636619472558, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.200635040331224]
max_q:  4.20063504033
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.100317520165612]
max_q:  4.10031752017
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.05451643103312873, -0.9666636619472558, -0.9999945887077212, -0.34460054277030083]
max_q:  0.0545164310331
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.04088732327484655, -0.9666636619472558, -0.9999945887077212, -0.34460054277030083]
max_q:  0.0408873232748
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.088768314795192, -0.033552152338698724, 0.978379623117549]
max_q:  4.0887683148
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 4.901519405891001, -0.5]
max_q:  4.90151940589
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.673996019158278, -0.033552152338698724, 0.978379623117549]
max_q:  3.67399601916
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.692107351427262, -0.033552152338698724, 0.978379623117549]
max_q:  3.69210735143
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 50
Environment.reset(): Trial set up with start = (4, 2), destination = (7, 1), deadline = 20
RoutePlanner.route_to(): destination = (7, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 4.707501983855899, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.196540729600609, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 4.845174443022813, "(['red', None, None, None, 'forward'], 'right')": -0.34460054277030083, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.393081459201218, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9666636619472558, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.393081459201218]
max_q:  4.3930814592
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 4.845174443022813, -0.5]
max_q:  4.84517444302
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.707501983855899, -0.033552152338698724, 0.978379623117549]
max_q:  4.70750198386
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 3.4225872215114066, -0.5]
max_q:  3.42258722151
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.9666636619472558, -0.9999945887077212, 1.8537509919279493]
max_q:  1.85375099193
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.373427386241157]
max_q:  4.37342738624
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.196540729600609]
max_q:  4.1965407296
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.327567882667681]
max_q:  4.32756788267
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.5895849865465825, -0.033552152338698724, 0.978379623117549]
max_q:  4.58958498655
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0)]
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 51
Environment.reset(): Trial set up with start = (8, 1), destination = (5, 6), deadline = 40
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 5.500096426526692, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.191861188419642, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 3.066940416133555, "(['red', None, None, None, 'forward'], 'right')": 1.5683758927351543, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.298613221610449, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.4291523836922163, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.9666636619472558, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.191861188419642]
max_q:  4.19186118842
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.298613221610449]
max_q:  4.29861322161
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5912378577898394, -0.9999945887077212, 1.5683758927351543]
max_q:  1.56837589274
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.3281073000479723, 3.066940416133555, -0.5]
max_q:  3.06694041613
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.500096426526692, -0.033552152338698724, 0.978379623117549]
max_q:  5.50009642653
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 0.3281073000479723, 3.1835728641168606, -0.5]
max_q:  3.18357286412
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.350086783874024, -0.033552152338698724, 0.978379623117549]
max_q:  5.35008678387
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.2657063598818965, -0.033552152338698724, 0.978379623117549]
max_q:  5.26570635988
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5912378577898394, -0.9999945887077212, 1.140313243945962]
max_q:  1.14031324395
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.4291523836922163, 4.149306610805224]
max_q:  4.14930661081
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.48230779740090574, 4.1340346963929795]
max_q:  4.13403469639
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 3.9626311045410767]
max_q:  3.96263110454
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5912378577898394, -0.9999945887077212, 1.033297581748664]
max_q:  1.03329758175
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 3.963965707950324]
max_q:  3.96396570795
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 3.9650917795768765]
max_q:  3.96509177958
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.48230779740090574, 4.122287069922023]
max_q:  4.12228706992
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.966200833447573, -0.033552152338698724, 0.978379623117549]
max_q:  4.96620083345
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.0966177707470055]
max_q:  1.09661777075
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 3.970741882834767]
max_q:  3.97074188283
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 3.971406840043068]
max_q:  3.97140684004
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.48230779740090574, 4.114680618338432]
max_q:  4.11468061834
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.940774495725268, -0.033552152338698724, 0.978379623117549]
max_q:  4.94077449573
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 52
Environment.reset(): Trial set up with start = (3, 1), destination = (1, 4), deadline = 25
RoutePlanner.route_to(): destination = (1, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 5.245908032717974, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 3.9720284304769145, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 3.0144910263858806, "(['red', None, None, None, 'forward'], 'right')": 1.138225841085845, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.5, "(['red', None, None, None, 'right'], 'right')": 4.109319518209266, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 3.9720284304769145]
max_q:  3.97202843048
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.48230779740090574, 4.109319518209266]
max_q:  4.10931951821
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.245908032717974, -0.033552152338698724, 0.978379623117549]
max_q:  5.24590803272
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.038256693931645, -0.033552152338698724, 0.978379623117549]
max_q:  5.03825669393
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.26529773867640505, 0.3281073000479723, 3.0144910263858806, -0.43971017947228236]
max_q:  3.01449102639
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.90847460719019, -0.033552152338698724, 0.978379623117549]
max_q:  4.90847460719
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 53
Environment.reset(): Trial set up with start = (8, 4), destination = (4, 1), deadline = 35
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 6.4994350565910075, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.0546597591046325, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 0.3281073000479723, "(['green', None, None, None, 'left'], 'left')": 3.113041923747293, "(['red', None, None, None, 'forward'], 'right')": 1.138225841085845, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.43971017947228236, "(['red', None, None, None, 'right'], 'right')": 4.068324698880791, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.138225841085845]
max_q:  1.13822584109
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.113041923747293, -0.43971017947228236]
max_q:  3.11304192375
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 6.4994350565910075, -0.033552152338698724, 0.978379623117549]
max_q:  6.49943505659
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.4068077889541215]
max_q:  1.40680778895
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.3347814428104696, -0.43971017947228236]
max_q:  3.33478144281
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.234091335886359, -0.033552152338698724, 0.978379623117549]
max_q:  5.23409133589
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0)]
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 54
Environment.reset(): Trial set up with start = (8, 5), destination = (4, 5), deadline = 20
RoutePlanner.route_to(): destination = (4, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 6.797917057895829, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.0546597591046325, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.401303298529423, "(['red', None, None, None, 'forward'], 'right')": 1.584367258701386, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.43971017947228236, "(['red', None, None, None, 'right'], 'right')": 4.068324698880791, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 0.41238937598874, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.48230779740090574, 4.068324698880791]
max_q:  4.06832469888
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 6.797917057895829, -0.033552152338698724, 0.978379623117549]
max_q:  6.7979170579
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 6.098437793421871, -0.033552152338698724, 0.978379623117549]
max_q:  6.09843779342
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.584367258701386]
max_q:  1.5843672587
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.401303298529423, -0.43971017947228236]
max_q:  3.40130329853
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 55
Environment.reset(): Trial set up with start = (8, 6), destination = (6, 2), deadline = 30
RoutePlanner.route_to(): destination = (6, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 4.0473930050964215, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 5.748698161184893, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.0546597591046325, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 4.476140386213245, "(['red', None, None, None, 'forward'], 'right')": 1.2613213513637127, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.43971017947228236, "(['red', None, None, None, 'right'], 'right')": 4.027329879552316, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 0.7084388476313195, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, 0.0, 0.7084388476313195, 0.0]
max_q:  0.708438847631
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.2613213513637127]
max_q:  1.26132135136
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 4.476140386213245, -0.43971017947228236]
max_q:  4.47614038621
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [4.0473930050964215, 0.4968484892614379, 0.48230779740090574, 4.027329879552316]
max_q:  4.0473930051
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [3.7582935047323915, 0.4968484892614379, 0.48230779740090574, 4.027329879552316]
max_q:  4.02732987955
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.748698161184893, -0.033552152338698724, 0.978379623117549]
max_q:  5.74869816118
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.6515482633412875, -0.033552152338698724, 0.978379623117549]
max_q:  5.65154826334
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 56
Environment.reset(): Trial set up with start = (4, 4), destination = (1, 6), deadline = 25
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.7582935047323915, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, None, 'forward'], 'forward')": 6.568970850174223, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.0546597591046325, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 4.063450321844371, "(['red', None, None, None, 'forward'], 'right')": 1.4839268972094595, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.4666666666666667, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.43971017947228236, "(['red', None, None, None, 'right'], 'right')": 4.027329879552316, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.4839268972094595]
max_q:  1.48392689721
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 4.063450321844371, -0.43971017947228236]
max_q:  4.06345032184
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 6.568970850174223, -0.033552152338698724, 0.978379623117549]
max_q:  6.56897085017
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.926728137630667, -0.033552152338698724, 0.978379623117549]
max_q:  5.92672813763
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 4.031725160922186, -0.43971017947228236]
max_q:  4.03172516092
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.6139827499972246]
max_q:  1.61398275
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [1.4982279000068761, 4.886815883419983, -0.033552152338698724, 0.978379623117549]
max_q:  4.88681588342
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': 'left'}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.4666666666666667, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 4.0285526448299676, -0.43971017947228236]
max_q:  4.02855264483
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.699243073273212]
max_q:  1.69924307327
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.8595065910941364, -0.43971017947228236]
max_q:  3.85950659109
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.823471891747127, -0.033552152338698724, 0.978379623117549]
max_q:  4.82347189175
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.692426721592581, -0.033552152338698724, 0.978379623117549]
max_q:  4.69242672159
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.670788386542812, -0.033552152338698724, 0.978379623117549]
max_q:  4.67078838654
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.651059316350376, -0.033552152338698724, 0.978379623117549]
max_q:  4.65105931635
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.8645242128407746, -0.43971017947228236]
max_q:  3.86452421284
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.632974335340644, -0.033552152338698724, 0.978379623117549]
max_q:  4.63297433534
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.5013256185736115, -0.033552152338698724, 0.978379623117549]
max_q:  4.50132561857
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.7155886788578545]
max_q:  1.71558867886
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.653870754338358]
max_q:  1.65387075434
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.48888888888888893, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Simulator.run(): Trial 57
Environment.reset(): Trial set up with start = (1, 2), destination = (1, 6), deadline = 20
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.7582935047323915, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.423062224328627, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.0546597591046325, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.7663913595333653, "(['red', None, None, None, 'forward'], 'right')": 1.6563777264177473, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.48888888888888893, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.43971017947228236, "(['red', None, None, None, 'right'], 'right')": 4.027329879552316, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [3.6885083621341423, 0.4968484892614379, 0.48230779740090574, 4.027329879552316]
max_q:  4.02732987955
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.0546597591046325]
max_q:  4.0546597591
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.6885083621341423, 0.4968484892614379, 0.48230779740090574, 4.027329879552316]
max_q:  4.02732987955
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.7663913595333653, -0.43971017947228236]
max_q:  3.76639135953
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.423062224328627, -0.033552152338698724, 0.978379623117549]
max_q:  4.42306222433
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.6563777264177473]
max_q:  1.65637772642
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.435012915882935]
max_q:  1.43501291588
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.48888888888888893, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.7955924395916947, -0.43971017947228236]
max_q:  3.79559243959
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.2610834218912967]
max_q:  1.26108342189
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.48888888888888893, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.5960821685259505, -0.43971017947228236]
max_q:  3.59608216853
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.148029250796732]
max_q:  1.1480292508
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.463075321148788, -0.43971017947228236]
max_q:  3.46307532115
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.1040875521046765, -0.033552152338698724, 0.978379623117549]
max_q:  4.1040875521
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.003118625004398, -0.033552152338698724, 0.978379623117549]
max_q:  4.003118625
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 4, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.1791072912010097]
max_q:  1.1791072912
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.48888888888888893, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.48888888888888893, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.48888888888888893, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 0, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
Simulator.run(): Trial 58
Environment.reset(): Trial set up with start = (2, 3), destination = (7, 3), deadline = 25
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.6885083621341423, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.914770813791655, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.034162349440395, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.4822512025363315, "(['red', None, None, None, 'forward'], 'right')": 1.195476592124234, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.48888888888888893, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.43971017947228236, "(['red', None, None, None, 'right'], 'right')": 4.023913644608276, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.034162349440395]
max_q:  4.03416234944
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.195476592124234]
max_q:  1.19547659212
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.4822512025363315, -0.43971017947228236]
max_q:  3.48225120254
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.914770813791655, -0.033552152338698724, 0.978379623117549]
max_q:  3.91477081379
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.4573854068958274]
max_q:  1.4573854069
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.6116884019022484, -0.43971017947228236]
max_q:  3.6116884019
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.5194114436770745, -0.033552152338698724, 0.978379623117549]
max_q:  3.51941144368
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.650519561712024, -0.43971017947228236]
max_q:  3.65051956171
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.4079654856315047]
max_q:  1.40796548563
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.023913644608276]
max_q:  4.02391364461
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.022717962377863]
max_q:  4.02271796238
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.0330520730835815]
max_q:  4.03305207308
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 3.559460490037319, -0.033552152338698724, 0.978379623117549]
max_q:  3.55946049004
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0)]
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 59
Environment.reset(): Trial set up with start = (8, 5), destination = (4, 6), deadline = 25
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.345635086574346, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.031674903371766, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.6754824501611654, "(['red', None, None, None, 'forward'], 'right')": 1.391936080554899, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.48888888888888893, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": -0.033552152338698724, "(['green', None, None, None, 'left'], 'right')": -0.43971017947228236, "(['red', None, None, None, 'right'], 'right')": 4.021685327724324, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.021685327724324]
max_q:  4.02168532772
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.031674903371766]
max_q:  4.03167490337
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.345635086574346, 1.6728175432871728, 0.978379623117549]
max_q:  4.34563508657
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.391936080554899]
max_q:  1.39193608055
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.023756177528824]
max_q:  4.02375617753
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.021235491105982]
max_q:  4.02123549111
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 4.288029238811955, 1.6728175432871728, 0.978379623117549]
max_q:  4.28802923881
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 60
Environment.reset(): Trial set up with start = (3, 3), destination = (7, 6), deadline = 35
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4982279000068761, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 5.184027909775048, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.022436389888334, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.6754824501611654, "(['red', None, None, None, 'forward'], 'right')": 1.0929440704855367, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.6728175432871728, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.020233761489801, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.020233761489801]
max_q:  4.02023376149
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.019314045058446]
max_q:  4.01931404506
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4982279000068761, 5.184027909775048, 1.6728175432871728, 0.978379623117549]
max_q:  5.18402790978
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.0929440704855367]
max_q:  1.09294407049
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.6754824501611654, -0.21752875390317425]
max_q:  3.67548245016
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 0.5619627136570245]
max_q:  0.561962713657
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.507934205145049, -0.21752875390317425]
max_q:  3.50793420515
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.022436389888334]
max_q:  4.02243638989
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5292562633102744, 3.865249972508908, 1.6728175432871728, 0.978379623117549]
max_q:  3.86524997251
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 61
Environment.reset(): Trial set up with start = (8, 6), destination = (1, 2), deadline = 55
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.5292562633102744, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'left', 'forward'], 'right')": 0.3001809930031971, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.536408306758611, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.021573451815706, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.5284369465973384, "(['red', None, None, None, 'forward'], 'right')": 0.6411138293476999, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.6728175432871728, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.011218194944167, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5024968178278442, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.011218194944167]
max_q:  4.01121819494
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 55, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.021573451815706]
max_q:  4.02157345182
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 54, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 0.6411138293476999]
max_q:  0.641113829348
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 53, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 52, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 51, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.5284369465973384, -0.21752875390317425]
max_q:  3.5284369466
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 4.536408306758611, 1.6728175432871728, 0.978379623117549]
max_q:  4.53640830676
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 48, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.2046589913635026]
max_q:  1.20465899136
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 46, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.567733867714227, -0.21752875390317425]
max_q:  3.56773386771
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 43, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.0668678044032838]
max_q:  1.0668678044
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.437089378738041, -0.21752875390317425]
max_q:  3.43708937874
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 4.498093427704425, 1.6728175432871728, 0.978379623117549]
max_q:  4.4980934277
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 4.481490313447611, 1.6728175432871728, 0.978379623117549]
max_q:  4.48149031345
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.011189430341746]
max_q:  4.01118943034
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.1193431051301244]
max_q:  1.11934310513
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.010860329449342]
max_q:  4.01086032945
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5024968178278442, 0.09142361050650853, 4.005594715170873]
max_q:  4.00559471517
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 4.010435962509137]
max_q:  4.01043596251
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.3001809930031971]
max_q:  0.300180993003
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  right
random
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.005454847291601]
max_q:  4.00545484729
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.005341204639692]
max_q:  4.00534120464
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.0604724633209544]
max_q:  1.06047246332
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.457193329497397, -0.21752875390317425]
max_q:  3.4571933295
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.003453381323589]
max_q:  4.00345338132
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0)]
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 62
Environment.reset(): Trial set up with start = (3, 2), destination = (8, 3), deadline = 30
RoutePlanner.route_to(): destination = (8, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.5292562633102744, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.361376640892452, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.360534570942811, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.467245304877075, "(['red', None, None, None, 'forward'], 'right')": 1.0089065834379005, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.6728175432871728, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 3.916291243474229, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.48230779740090574, 3.916291243474229]
max_q:  3.91629124347
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 4.361376640892452, 1.6728175432871728, 0.978379623117549]
max_q:  4.36137664089
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 1.0089065834379005]
max_q:  1.00890658344
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.041666666666666664, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.041666666666666664, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 0.3924972285410237]
max_q:  0.392497228541
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.084375]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.1]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': 'forward', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.467245304877075, -0.21752875390317425]
max_q:  3.46724530488
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 0.25324750568692134]
max_q:  0.253247505687
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.26529773867640505, 1.0565209618736464, 3.3205207743893674, -0.21752875390317425]
max_q:  3.32052077439
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 2.50445329171895, 1.6728175432871728, 0.978379623117549]
max_q:  2.50445329172
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0)]
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 63
Environment.reset(): Trial set up with start = (2, 2), destination = (6, 4), deadline = 30
RoutePlanner.route_to(): destination = (6, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.5292562633102744, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.26529773867640505, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.272151388443273, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.360534570942811, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.3738773161440485, "(['red', None, None, None, 'forward'], 'right')": 0.19628170997387945, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.6728175432871728, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 3.9257189592598425, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.5292562633102744, 3.272151388443273, 1.6728175432871728, 0.978379623117549]
max_q:  3.27215138844
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 3.2981459817131564, 1.6728175432871728, 0.978379623117549]
max_q:  3.29814598171
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, 0.19628170997387945]
max_q:  0.196281709974
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.3738773161440485, -0.21752875390317425]
max_q:  3.37387731614
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 2.09814085498694, 1.6728175432871728, 0.978379623117549]
max_q:  2.09814085499
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.360534570942811]
max_q:  4.36053457094
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 64
Environment.reset(): Trial set up with start = (1, 2), destination = (5, 6), deadline = 40
RoutePlanner.route_to(): destination = (5, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.5292562633102744, "(['red', None, None, None, 'forward'], None)": 0.02981367322124228, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 2.078512683989552, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.960922055723996, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.0304079871080365, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.6728175432871728, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 3.9257189592598425, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.48230779740090574, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999945887077212, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 3.9257189592598425]
max_q:  3.92571895926
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 3.9628594796299215]
max_q:  3.96285947963
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 2.078512683989552, 1.6728175432871728, 0.978379623117549]
max_q:  2.07851268399
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5292562633102744, 2.3987605699912935, 1.6728175432871728, 0.978379623117549]
max_q:  2.39876056999
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.02981367322124228, -0.5842605206316723, -0.9999945887077212, -0.10278871751959043]
max_q:  0.0298136732212
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.3027971366461255, 1.6728175432871728, 0.978379623117549]
max_q:  2.30279713665
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 5.960922055723996]
max_q:  5.96092205572
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.4240259125999737, 1.6728175432871728, 0.978379623117549]
max_q:  2.4240259126
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.026832305899118055, -0.5842605206316723, -0.9999945887077212, -0.10278871751959043]
max_q:  0.0268323058991
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.025490690604162154, -0.5842605206316723, -0.9999945887077212, -0.10278871751959043]
max_q:  0.0254906906042
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.024332022849427513, -0.5842605206316723, -0.9999945887077212, -0.10278871751959043]
max_q:  0.0243320228494
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.023318188564034698, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.023318188564
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.511580028566642, 1.6728175432871728, 0.978379623117549]
max_q:  2.51158002857
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.022485396115319172, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.0224853961153
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.021782727486715447, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.0217827274867
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.47822420653271, 1.6728175432871728, 0.978379623117549]
max_q:  2.47822420653
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.5204957563512456, 1.6728175432871728, 0.978379623117549]
max_q:  2.52049575635
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 65
Environment.reset(): Trial set up with start = (7, 2), destination = (3, 4), deadline = 30
RoutePlanner.route_to(): destination = (3, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.021142059031223816, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.019973402307265, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.838364427241246, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.0304079871080365, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.6728175432871728, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.471660253745959, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5623997444390749, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9990981515546644, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.471660253745959]
max_q:  4.47166025375
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.4592481418052765]
max_q:  4.45924814181
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.019973402307265, 1.6728175432871728, 0.978379623117549]
max_q:  3.01997340231
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.021142059031223816, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.0211420590312
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.017618382526019848, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.017618382526
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 5.838364427241246]
max_q:  5.83836442724
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.015416084710267366, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.0154160847103
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.014314935802391127, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.0143149358024
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.5152722159114385, 1.239795643100765, 0.978379623117549]
max_q:  2.51527221591
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 66
Environment.reset(): Trial set up with start = (4, 5), destination = (8, 1), deadline = 40
RoutePlanner.route_to(): destination = (8, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.012674682741700477, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.084375, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.5895086051158662, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.220102094953131, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.0304079871080365, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.239795643100765, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.919182213620623, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5623997444390749, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9990981515546644, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.0304079871080365, -0.21752875390317425]
max_q:  3.03040798711
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.012674682741700477, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.0126746827417
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.006337341370850238, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.00633734137085
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0047530060281376785, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.00475300602814
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.5895086051158662, 1.239795643100765, 0.978379623117549]
max_q:  3.58950860512
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.1926265586314972, 1.239795643100765, 0.978379623117549]
max_q:  3.19262655863
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.003960838356781399, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.00396083835678
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0036307684937162826, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.00363076849372
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.954497330740876, 1.239795643100765, 0.978379623117549]
max_q:  2.95449733074
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.919182213620623]
max_q:  4.91918221362
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 5.220102094953131]
max_q:  5.22010209495
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 5.149559590730402]
max_q:  5.14955959073
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 2.927367188397233, -0.21752875390317425]
max_q:  2.9273671884
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0033714278870222627, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.00337142788702
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.8882690970062175]
max_q:  4.88826909701
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.860510687724774]
max_q:  4.86051068772
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 2.8560312508282153, -0.21752875390317425]
max_q:  2.85603125083
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0032510197482000388, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.0032510197482
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.8353958786412057, 1.2183224628487543, 0.978379623117549]
max_q:  2.83539587864
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 67
Environment.reset(): Trial set up with start = (4, 6), destination = (6, 3), deadline = 25
RoutePlanner.route_to(): destination = (6, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.003165466596931617, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.13055555555555554, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.364510981675175, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.1016612744499685, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 2.8084739591155365, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.06855527829110591, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.842294214165962, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5623997444390749, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9990981515546644, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.4662799808124058, 3.364510981675175, 1.2183224628487543, 0.978379623117549]
max_q:  3.36451098168
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.003165466596931617, -0.5842605206316723, -0.9990981515546644, -0.10278871751959043]
max_q:  0.00316546659693
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0015827332984658085, -0.5842605206316723, -0.9991533924527158, -0.10278871751959043]
max_q:  0.00158273329847
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.2963645692563395, 1.2183224628487543, 0.978379623117549]
max_q:  3.29636456926
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 2.8084739591155365, -0.21752875390317425]
max_q:  2.80847395912
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.384318998099297, 1.2183224628487543, 0.978379623117549]
max_q:  3.3843189981
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.842294214165962]
max_q:  4.84229421417
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 5.1016612744499685]
max_q:  5.10166127445
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.06855527829110591, 0.0]
max_q:  0.0685552782911
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.909949797243443]
max_q:  4.90994979724
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.81421774036043]
max_q:  4.81421774036
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.882014190184375]
max_q:  4.88201419018
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 3, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 2, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 1, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 2.86805026115976, -0.21752875390317425]
max_q:  2.86805026116
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 0, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
Simulator.run(): Trial 68
Environment.reset(): Trial set up with start = (8, 2), destination = (3, 2), deadline = 25
RoutePlanner.route_to(): destination = (3, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.0013189444153881738, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.13055555555555554, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.4123044981856925, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.8577332546181395, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 2.8333282507133695, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.792790957719366, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5623997444390749, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 0.0667937255521643, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.792790957719366]
max_q:  4.79279095772
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, 0.0, 0.0667937255521643, 0.0]
max_q:  0.0667937255522
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = left, reward = -0.5
next_waypoint:  forward
q:  [0.0013189444153881738, -0.5842605206316723, -0.9991533924527158, -0.10278871751959043]
max_q:  0.00131894441539
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0009892083115411302, -0.5842605206316723, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000989208311541
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0008243402596176086, -0.5842605206316723, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000824340259618
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.4123044981856925, 1.2183224628487543, 0.978379623117549]
max_q:  3.41230449819
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.4710740483671234, 1.2183224628487543, 0.978379623117549]
max_q:  3.47107404837
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 2.8333282507133695, -0.21752875390317425]
max_q:  2.83332825071
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 69
Environment.reset(): Trial set up with start = (6, 3), destination = (1, 3), deadline = 25
RoutePlanner.route_to(): destination = (1, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.0007212977271654075, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.13055555555555554, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.2259551484498665, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.8577332546181395, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.8916618381777015, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.682415193921635, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['red', None, None, None, 'right'], 'left')": 0.5623997444390749, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.4662799808124058, 3.2259551484498665, 1.2183224628487543, 0.978379623117549]
max_q:  3.22595514845
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.2646573910273737, 1.2183224628487543, 0.978379623117549]
max_q:  3.26465739103
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.632328695513687, 1.2183224628487543, 0.978379623117549]
max_q:  3.63232869551
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.8161643477568434, 1.2183224628487543, 0.978379623117549]
max_q:  2.81616434776
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.13055555555555554]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.8577332546181395]
max_q:  4.85773325462
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 0.5623997444390749, 4.682415193921635]
max_q:  4.68241519392
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.793167547410974]
max_q:  4.79316754741
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.8916618381777015, -0.21752875390317425]
max_q:  3.89166183818
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 70
Environment.reset(): Trial set up with start = (5, 5), destination = (6, 1), deadline = 25
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.978379623117549, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.0007212977271654075, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 2.9345479129811594, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.7535091700404255, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 4.805677209169624, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.644503238703766, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3026940579594739, "(['red', None, None, None, 'right'], 'left')": 0.5623997444390749, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.7535091700404255]
max_q:  4.75350917004
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.644503238703766]
max_q:  4.6445032387
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 4.805677209169624, -0.21752875390317425]
max_q:  4.80567720917
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0007212977271654075, -0.5842605206316723, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000721297727165
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0006311355112697316, -0.5842605206316723, -0.9991533924527158, -0.10278871751959043]
max_q:  0.00063113551127
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.9345479129811594, 1.2183224628487543, 0.978379623117549]
max_q:  2.93454791298
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.714303938159649]
max_q:  4.71430393816
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.500827603891795]
max_q:  4.50082760389
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.669659942024671]
max_q:  4.66965994202
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0005680219601427584, -0.5842605206316723, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000568021960143
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.023335586899396, 1.2183224628487543, 0.7672231070979094]
max_q:  3.0233355869
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 71
Environment.reset(): Trial set up with start = (7, 1), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.7672231070979094, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.0005422027801362694, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.897363270778588, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.6268131189452415, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.8704514727797497, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.482383422460744, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3026940579594739, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.5842605206316723, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.6268131189452415]
max_q:  4.62681311895
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.600695905655856]
max_q:  4.60069590566
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.897363270778588, 1.2183224628487543, 0.7672231070979094]
max_q:  3.89736327078
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.8704514727797497, -0.21752875390317425]
max_q:  3.87045147278
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.876928899140762, -0.21752875390317425]
max_q:  3.87692889914
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.264999214315748, 1.2183224628487543, 0.8585422321129005]
max_q:  3.26499921432
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 72
Environment.reset(): Trial set up with start = (6, 4), destination = (1, 5), deadline = 30
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.0005422027801362694, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.128957580385925, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.241191711230372, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.7062989992188746, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.482383422460744, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3026940579594739, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.7919947096208021, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.4662799808124058, 4.128957580385925, 1.2183224628487543, 0.8585422321129005]
max_q:  4.12895758039
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 4.123584347869844, 1.2183224628487543, 0.8585422321129005]
max_q:  4.12358434787
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0005422027801362694, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000542202780136
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00045183565011355786, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000451835650114
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.000271101390068, 1.2183224628487543, 0.8585422321129005]
max_q:  2.00027110139
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.200243991251061, 1.2183224628487543, 0.8585422321129005]
max_q:  2.20024399125
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00039535619384936313, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000395356193849
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00036711646571726576, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000367116465717
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.1669029390587053, 1.2183224628487543, 0.8585422321129005]
max_q:  2.16690293906
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.7062989992188746, -0.21752875390317425]
max_q:  3.70629899922
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 73
Environment.reset(): Trial set up with start = (1, 2), destination = (4, 6), deadline = 35
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.00034417168660993665, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 0.9702026196556066, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 2.1483772887014387, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.241191711230372, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 4.397440749283968, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.482383422460744, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3026940579594739, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.895861804115367, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 4.397440749283968, -0.21752875390317425]
max_q:  4.39744074928
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.00034417168660993665, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.00034417168661
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.1483772887014387, 1.2183224628487543, 0.8585422321129005]
max_q:  2.1483772887
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.9702026196556066, 0.0, 0.0]
max_q:  0.970202619656
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': 'right', 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.482383422460744]
max_q:  4.48238342246
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.333539559831295, 1.2183224628487543, 0.8585422321129005]
max_q:  2.33353955983
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00030115022578369456, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000301150225784
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.2918659367414946, 1.2183224628487543, 0.8585422321129005]
max_q:  2.29186593674
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.37727263990442, 1.2183224628487543, 0.8585422321129005]
max_q:  2.3772726399
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0)]
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 74
Environment.reset(): Trial set up with start = (6, 6), destination = (2, 3), deadline = 35
RoutePlanner.route_to(): destination = (2, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.0002844196576846004, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.3601238835451284, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.241191711230372, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.598293832855979, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.2183224628487543, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.43069948433995, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3026940579594739, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.895861804115367, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.241191711230372]
max_q:  4.24119171123
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.3601238835451284, 1.2183224628487543, 0.8585422321129005]
max_q:  3.36012388355
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0002844196576846004, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000284419657685
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0002133147432634503, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000213314743263
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00017776228605287527, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000177762286053
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.000142209828842, 1.2183224628487543, 0.8585422321129005]
max_q:  2.00014220983
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.200127988845958, 1.2183224628487543, 0.8585422321129005]
max_q:  2.20012798885
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.00015554200029626586, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000155542000296
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.00014582062527774924, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000145820625278
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.350117323108795, 1.2183224628487543, 0.8585422321129005]
max_q:  2.35011732311
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.43069948433995]
max_q:  4.43069948434
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.2281029217062756]
max_q:  4.22810292171
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 75
Environment.reset(): Trial set up with start = (2, 6), destination = (7, 3), deadline = 40
RoutePlanner.route_to(): destination = (7, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 0.00013771947942898538, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 2.432611456953355, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.995337779615385, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.598293832855979, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 1.1726845779058384, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.404312149049382, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3026940579594739, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.895861804115367, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.995337779615385]
max_q:  4.99533777962
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.9570555573224855]
max_q:  4.95705555732
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.00013771947942898538, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000137719479429
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.432611456953355, 1.1726845779058384, 0.8585422321129005]
max_q:  2.43261145695
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.00010328960957173904, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  0.000103289609572
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.037840837527166e-05, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  9.03784083753e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.13405675377445e-05, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  8.13405675377e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.456218690959913e-05, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  7.45621869096e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.404312149049382]
max_q:  4.40431214905
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.3026940579594739]
max_q:  0.302694057959
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.598293832855979, -0.21752875390317425]
max_q:  3.59829383286
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.3488961923137017, 0.9636033329373845, 0.8585422321129005]
max_q:  2.34889619231
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.615031589820313, -0.21752875390317425]
max_q:  3.61503158982
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0)]
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 76
Environment.reset(): Trial set up with start = (8, 3), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 6.923631641605633e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.0699793641654964, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.202156074524691, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.628780461612445, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9636033329373845, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.14713975128337, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.895861804115367, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.14713975128337]
max_q:  4.14713975128
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [6.923631641605633e-05, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  6.92363164161e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.192723731204225e-05, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  5.1927237312e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.0699793641654964, 0.9636033329373845, 0.8585422321129005]
max_q:  3.06997936417
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.8024899322113423, 0.9636033329373845, 0.8585422321129005]
max_q:  2.80248993221
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.64199627303885, 0.9636033329373845, 0.8585422321129005]
max_q:  2.64199627304
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.0735698756416845]
max_q:  4.07356987564
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 77
Environment.reset(): Trial set up with start = (8, 4), destination = (2, 1), deadline = 45
RoutePlanner.route_to(): destination = (2, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 4.327269776003522e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 2.5350005002571887, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.193583661265824, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.628780461612445, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9636033329373845, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.505458726354717, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.895861804115367, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.628780461612445, -0.21752875390317425]
max_q:  3.62878046161
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [4.327269776003522e-05, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  4.327269776e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.786361054003082e-05, -0.895861804115367, -0.9991533924527158, -0.10278871751959043]
max_q:  3.786361054e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [3.4077249486027736e-05, -0.9132153303253487, -0.9991533924527158, -0.10278871751959043]
max_q:  3.4077249486e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.193583661265824]
max_q:  4.19358366127
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.5350005002571887, 0.9390904475862858, 0.8585422321129005]
max_q:  2.53500050026
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.608250475244329, 0.9390904475862858, 0.8585422321129005]
max_q:  2.60825047524
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [3.164316023702576e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  3.1643160237e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.0426115612524772e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  3.04261156125e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.9339468626363173e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  2.93394686264e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.671511817278678, 0.9390904475862858, 0.8585422321129005]
max_q:  2.67151181728
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.8361486338817734e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  2.83614863388e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.6295423286987605, 0.9390904475862858, 0.8585422321129005]
max_q:  2.6295423287
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.255710961478217]
max_q:  4.25571096148
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 5.505458726354717]
max_q:  5.50545872635
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.248981725649843]
max_q:  4.24898172565
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.6906503846770375, -0.21752875390317425]
max_q:  3.69065038468
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.667610597346017, 0.933826190140622, 0.8585422321129005]
max_q:  2.66761059735
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 78
Environment.reset(): Trial set up with start = (7, 4), destination = (2, 4), deadline = 25
RoutePlanner.route_to(): destination = (2, 4)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 2.752732497591133e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.05646072927587, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.243323050066892, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.6973753763144934, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.933826190140622, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.439698351900916, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9204460676665598, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.6973753763144934, -0.21752875390317425]
max_q:  3.69737537631
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.47745924783202e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  2.47745924783e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.271004310512685e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  2.27100431051e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.1087897169046364e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  2.1087897169e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.9769903595980964e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  1.9769903596e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.05646072927587, 0.933826190140622, 0.8585422321129005]
max_q:  3.05646072928
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.8671575618426464e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  1.86715756184e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.950815589927064, 0.933826190140622, 0.8585422321129005]
max_q:  2.95081558993
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.7822867635770717e-05, -0.9204460676665598, -0.9991533924527158, -0.10278871751959043]
max_q:  1.78228676358e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.871581700052627, 0.933826190140622, 0.8585422321129005]
max_q:  2.87158170005
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.7137372726702613e-05, -0.9261278793556368, -0.9991533924527158, -0.10278871751959043]
max_q:  1.71373727267e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6601829828993158e-05, -0.9261278793556368, -0.9991533924527158, -0.10278871751959043]
max_q:  1.6601829829e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 8, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.611354071637571e-05, -0.9261278793556368, -0.9991533924527158, -0.10278871751959043]
max_q:  1.61135407164e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.5665942363143052e-05, -0.9261278793556368, -0.9991533924527158, -0.10278871751959043]
max_q:  1.56659423631e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.9091956433842063, 0.933826190140622, 0.8585422321129005]
max_q:  2.90919564338
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 79
Environment.reset(): Trial set up with start = (1, 1), destination = (2, 5), deadline = 25
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 1.525368072200771e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.363736242557014, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.243323050066892, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 3.7352034542751817, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.933826190140622, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.439698351900916, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9261278793556368, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.243323050066892]
max_q:  4.24332305007
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.5536759485401116, 0.5459851050373206, 0.09142361050650853, 4.237239973815219]
max_q:  4.23723997382
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 3.7352034542751817, -0.21752875390317425]
max_q:  3.73520345428
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 80
Environment.reset(): Trial set up with start = (1, 6), destination = (5, 3), deadline = 35
RoutePlanner.route_to(): destination = (5, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 1.525368072200771e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.363736242557014, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.719849175950458, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 6.268303022490784, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.933826190140622, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.439698351900916, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 0.5536759485401116, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9991533924527158, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9261278793556368, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.719849175950458]
max_q:  4.71984917595
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 5.439698351900916]
max_q:  5.4396983519
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.525368072200771e-05, -0.9261278793556368, -0.9991533924527158, -0.10278871751959043]
max_q:  1.5253680722e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.363736242557014, 0.933826190140622, 0.8585422321129005]
max_q:  3.36373624256
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.2711400601673091e-05, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  1.27114006017e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.1652117218200334e-05, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  1.16521172182e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0819823131186026e-05, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  1.08198231312e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.4273626183013124, 0.933826190140622, 0.8585422321129005]
max_q:  3.4273626183
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.4591758061734614, 0.933826190140622, 0.8585422321129005]
max_q:  3.45917580617
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.0565209618736464, 6.268303022490784, -0.21752875390317425]
max_q:  6.26830302249
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.4862170158647885, 0.933826190140622, 0.8585422321129005]
max_q:  3.48621701586
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0)]
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 81
Environment.reset(): Trial set up with start = (7, 2), destination = (1, 6), deadline = 50
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 1.01435841854869e-05, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.4078014222063473, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.19569935385873, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.719849175950458, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.0565209618736464, "(['green', None, None, None, 'left'], 'left')": 5.880275474991621, "(['red', None, None, None, 'forward'], 'right')": -0.10278871751959043, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.933826190140622, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.079773763925687, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993634554144617, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9261278793556368, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.719849175950458]
max_q:  4.71984917595
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 4.19569935385873, 0.933826190140622, 0.8585422321129005]
max_q:  4.19569935386
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 49, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.01435841854869e-05, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  1.01435841855e-05
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.607688139115176e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  7.60768813912e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.0000050717920925, 0.933826190140622, 0.8585422321129005]
max_q:  2.00000507179
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [6.339740115929313e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  6.33974011593e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.7057661043363826e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  5.70576610434e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.230285595641684e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  5.23028559564e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.03566718055659328]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.856693767381564e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  4.85669376738e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.613859079012486e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  4.61385907901e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.404138211784646e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  4.40413821178e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.220632452960286e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  4.22063245296e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.058300435538736e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  4.05830043554e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.000004021772636, 0.933826190140622, 0.8585422321129005]
max_q:  2.00000402177
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.066670554380215, 0.933826190140622, 0.8585422321129005]
max_q:  2.06667055438
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -0.5
next_waypoint:  forward
q:  [1.4662799808124058, 2.127087099555833, 0.933826190140622, 0.8585422321129005]
max_q:  2.12708709956
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.913361134269496e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  3.91336113427e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.1200268138405405, 0.933826190140622, 0.8585422321129005]
max_q:  2.12002681384
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.8103779465255617e-06, -0.9261278793556368, -0.9993634554144617, -0.10278871751959043]
max_q:  3.81037794653e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [3.7196546620844765e-06, -0.9294856184836837, -0.9993634554144617, -0.10278871751959043]
max_q:  3.71965466208e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.167026143494527, 0.933826190140622, 0.8585422321129005]
max_q:  2.16702614349
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.6387926042130746e-06, -0.9294856184836837, -0.9993634554144617, -0.10278871751959043]
max_q:  3.63879260421e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.566016752128813e-06, -0.9294856184836837, -0.9993634554144617, -0.10278871751959043]
max_q:  3.56601675213e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.4078014222063473, 0.0, 0.0]
max_q:  0.407801422206
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, -0.05555555555555555]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': 'forward', 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 5.880275474991621, -0.21752875390317425]
max_q:  5.88027547499
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.160066796657101, 0.933826190140622, 0.8585422321129005]
max_q:  2.16006679666
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [3.4974395068955668e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.4974395069e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.448863958188684e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.44886395819e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.4022576884834316e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.40225768848e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.357491139950755e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.35749113995e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.158629951372765, 0.933826190140622, 0.8585422321129005]
max_q:  2.15862995137
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 5.851786452643264, -0.21752875390317425]
max_q:  5.85178645264
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.1816470769806053, 0.933826190140622, 0.8585422321129005]
max_q:  2.18164707698
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.203294135587979, 0.933826190140622, 0.8585422321129005]
max_q:  2.20329413559
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 7, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.224186064243933, 0.933826190140622, 0.8585422321129005]
max_q:  2.22418606424
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 6, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.2190909640843706, 0.933826190140622, 0.8585422321129005]
max_q:  2.21909096408
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0)]
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 82
Environment.reset(): Trial set up with start = (4, 2), destination = (1, 1), deadline = 20
RoutePlanner.route_to(): destination = (1, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 3.314446381746258e-06, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 2.461101064483433, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.689855460285854, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 5.757840441603184, "(['red', None, None, None, 'forward'], 'right')": -0.0792431273179304, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.933826190140622, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.079773763925687, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [3.314446381746258e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.31444638175e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.277619199726855e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.27761919973e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6388095998634276e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.63880959986e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.2291071998975707e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.2291071999e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.461101064483433, 0.933826190140622, 0.8585422321129005]
max_q:  2.46110106448
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.0242559999146423e-06, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.02425599991e-06
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.218303999231781e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  9.21830399923e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.450111999295799e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  8.4501119993e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.846532570774671e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  7.84653257077e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.356124285101255e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  7.3561242851e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.653463431423004, 0.933826190140622, 0.8585422321129005]
max_q:  2.65346343142
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.720790259851854, 0.933826190140622, 0.8585422321129005]
max_q:  2.72079025985
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 9, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.689855460285854]
max_q:  4.68985546029
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0)]
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 83
Environment.reset(): Trial set up with start = (7, 5), destination = (1, 6), deadline = 35
RoutePlanner.route_to(): destination = (1, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 6.94745071370674e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 2.6552639041719157, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.510691412092269, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 5.757840441603184, "(['red', None, None, None, 'forward'], 'right')": -0.0792431273179304, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.933826190140622, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.079773763925687, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 5.510691412092269]
max_q:  5.51069141209
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 5.447745936588425]
max_q:  5.44774593659
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.6552639041719157, 0.933826190140622, 0.8585422321129005]
max_q:  2.65526390417
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.991447928128937, 0.933826190140622, 0.8585422321129005]
max_q:  2.99144792813
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.1595399401074475, 0.933826190140622, 0.8585422321129005]
max_q:  3.15953994011
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [6.94745071370674e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  6.94745071371e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.252705642336066e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  6.25270564234e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.731646838808061e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  5.73164683881e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.322243493178914e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  5.32224349318e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.989603274855233e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  4.98960327486e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.723872968294213]
max_q:  4.72387296829
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [4.712403092918831e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  4.71240309292e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.516052964047213e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  4.51605296405e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.342358619276166e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  4.34235861928e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.2645974475940167, 0.9536734435062606, 0.8585422321129005]
max_q:  3.26459744759
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.18029096504533, 0.9536734435062606, 0.8585422321129005]
max_q:  3.18029096505
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.2044000543087026, 0.9536734435062606, 0.8585422321129005]
max_q:  3.20440005431
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [4.1872743828734456e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  4.18727438287e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.0770829517451976e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  4.07708295175e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.137488951811759, 0.9536734435062606, 0.8585422321129005]
max_q:  3.13748895181
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.1580249291495743, 0.9536734435062606, 0.8585422321129005]
max_q:  3.15802492915
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0)]
LearningAgent.update(): deadline = 13, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 84
Environment.reset(): Trial set up with start = (8, 2), destination = (2, 6), deadline = 50
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 3.9751558779515674e-07, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.3076923076923077, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.559932895949948, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.707146960445907, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 5.702907927803085, "(['red', None, None, None, 'forward'], 'right')": -0.0792431273179304, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.079773763925687, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2224281139793473, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0313291357234897, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [3.9751558779515674e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.97515587795e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 50, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.884811426179941e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.88481142618e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.9424057130899704e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.94240571309e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4568042848174777e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.45680428482e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.559932895949948, 0.9536734435062606, 0.8585422321129005]
max_q:  3.55993289595
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.2140035706812314e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.21400357068e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0926032136131084e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.09260321361e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.001552945812016e-07, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.00155294581e-07
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.1699496871375055, 0.9536734435062606, 0.8585422321129005]
max_q:  3.16994968714
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [9.300134496825864e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  9.30013449683e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.783460358113317e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  8.78346035811e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [8.344287340207651e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  8.34428734021e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.221827831691411, 0.9536734435062606, 0.8585422321129005]
max_q:  3.22182783169
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [7.965001552016394e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  7.96500155202e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.658655338477303e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  7.65865533848e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.385131933531686e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  7.38513193353e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, -0.03566718055659328]
max_q:  0.0
count:  3
best:  [0, 1, 2]
action:  left
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 5.079773763925687]
max_q:  5.07977376393
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.120008849035877, 0.9536734435062606, 0.8585422321129005]
max_q:  3.12000884904
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 32, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.2224281139793473]
max_q:  0.222428113979
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
random
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 5.702907927803085, -0.21752875390317425]
max_q:  5.7029079278
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.3076923076923077, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  forward
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, -0.3333333333333333, 0.0]
max_q:  0.0
count:  3
best:  [0, 1, 3]
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': 'left', 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.0, 0.0, 1.0313291357234897, 0.0]
max_q:  1.03132913572
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': 'left', 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [7.138960869080631e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  7.13896086908e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4662799808124058, 3.0307157983346014, 0.9536734435062606, 0.8585422321129005]
max_q:  3.03071579833
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [7.023816338934169e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  7.02381633893e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4662799808124058, 2.9994819873280703, 0.9536734435062606, 0.8585422321129005]
max_q:  2.99948198733
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 85
Environment.reset(): Trial set up with start = (4, 3), destination = (7, 6), deadline = 30
RoutePlanner.route_to(): destination = (7, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.4662799808124058, "(['red', None, None, None, 'forward'], None)": 6.920524922185137e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.256639645821629, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.707146960445907, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 5.554791610690962, "(['red', None, None, None, 'forward'], 'right')": -0.0792431273179304, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.048015712045519, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.707146960445907]
max_q:  4.70714696045
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.256639645821629, 0.9536734435062606, 0.8585422321129005]
max_q:  3.25663964582
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 2.628319840212127, 0.9536734435062606, 0.8585422321129005]
max_q:  2.62831984021
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.697044861010965]
max_q:  4.69704486101
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 2.8569332001767727, 0.9536734435062606, 0.8585422321129005]
max_q:  2.85693320018
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [6.920524922185137e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  6.92052492219e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.343814512003043e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  6.343814512e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 2.685546567061943, 0.9536734435062606, 0.8585422321129005]
max_q:  2.68554656706
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0)]
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 86
Environment.reset(): Trial set up with start = (2, 5), destination = (6, 1), deadline = 40
RoutePlanner.route_to(): destination = (6, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 5.890684904002826e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.017699906620572, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.609914253384594, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 5.554791610690962, "(['red', None, None, None, 'forward'], 'right')": -0.0792431273179304, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.048015712045519, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.609914253384594]
max_q:  4.60991425338
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.571794612548057]
max_q:  4.57179461255
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [5.890684904002826e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  5.890684904e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.41801367800212e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  4.418013678e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.017699906620572, 0.9536734435062606, 0.8585422321129005]
max_q:  4.01769990662
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [3.681678065001767e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.681678065e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.31351025850159e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.3135102585e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.037384403626458e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  3.03738440363e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.8204283747959967e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  2.8204283748e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.6441516013712468e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  2.64415160137e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.0154874182930005, 0.9536734435062606, 0.8585422321129005]
max_q:  4.01548741829
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.4972542901839553e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  2.49725429018e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.813938677712328, 0.9536734435062606, 0.8585422321129005]
max_q:  3.81393867771
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 5.554791610690962, -0.21752875390317425]
max_q:  5.55479161069
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.38374273153923e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  2.38374273154e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.309250771178629e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  2.30925077118e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.6627771222295267, 0.9536734435062606, 0.8585422321129005]
max_q:  3.66277712223
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.6721444243898174, 0.9536734435062606, 0.8585422321129005]
max_q:  3.67214442439
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0)]
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 87
Environment.reset(): Trial set up with start = (6, 5), destination = (4, 3), deadline = 20
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 2.2413316308498457e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.1104526131696515, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.5240078560227595, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 5.317805503311565, "(['red', None, None, None, 'forward'], 'right')": -0.0792431273179304, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.048015712045519, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 5.317805503311565, -0.21752875390317425]
max_q:  5.31780550331
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.2413316308498457e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  2.24133163085e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.0545539949456922e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  2.05455399495e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.1104526131696515, 0.9536734435062606, 0.8585422321129005]
max_q:  4.11045261317
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.5240078560227595]
max_q:  4.52400785602
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.103549324846548, 0.9536734435062606, 0.8585422321129005]
max_q:  4.10354932485
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 88
Environment.reset(): Trial set up with start = (5, 1), destination = (3, 3), deadline = 20
RoutePlanner.route_to(): destination = (3, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 1.9078001381638573e-08, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.8931943933157935, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.5240078560227595, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 4.654244402649252, "(['red', None, None, None, 'forward'], 'right')": -0.0792431273179304, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 5.048015712045519, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.9078001381638573e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.90780013816e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.8124101312556646e-08, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  1.81241013126e-08
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [9.062050656278323e-09, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  9.06205065628e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [6.796537992208742e-09, -0.9294856184836837, -0.9993815924391984, -0.0792431273179304]
max_q:  6.79653799221e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 14, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.654244402649252, -0.21752875390317425]
max_q:  4.65424440265
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 12, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.8931943933157935, 0.9536734435062606, 0.8585422321129005]
max_q:  4.89319439332
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 11, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 5.048015712045519]
max_q:  5.04801571205
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 10, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [5.663781660173953e-09, -0.9294856184836837, -0.9993815924391984, -0.1844323447804751]
max_q:  5.66378166017e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 9, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.843572482576027, 0.9536734435062606, 0.8585422321129005]
max_q:  4.84357248258
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 8, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.406337039256955e-09, -0.9294856184836837, -0.9993815924391984, -0.1844323447804751]
max_q:  5.40633703926e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 7, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 6, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.5240078560227595]
max_q:  4.52400785602
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 5, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
random
action:  right
LearningAgent.update(): deadline = 4, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.506540927488667]
max_q:  4.50654092749
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 3, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.606608109253289, 0.9536734435062606, 0.8585422321129005]
max_q:  4.60660810925
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0)]
LearningAgent.update(): deadline = 2, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 89
Environment.reset(): Trial set up with start = (7, 5), destination = (1, 5), deadline = 30
RoutePlanner.route_to(): destination = (1, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.8585422321129005, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 5.198400999285534e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 5.145313439551808, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.491642664915471, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 4.613354127483674, "(['red', None, None, None, 'forward'], 'right')": -0.20697289139621255, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.5911111111111111, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.949218397524561, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9993815924391984, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [5.198400999285534e-09, -0.9294856184836837, -0.9993815924391984, -0.20697289139621255]
max_q:  5.19840099929e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.054000971527603e-09, -0.9294856184836837, -0.9993815924391984, -0.20697289139621255]
max_q:  5.05400097153e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.5270004857638017e-09, -0.9294856184836837, -0.9993815924391984, -0.20697289139621255]
max_q:  2.52700048576e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.6283198229108145, 5.145313439551808, 0.9536734435062606, 0.8585422321129005]
max_q:  5.14531343955
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.5911111111111111, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.613354127483674, -0.21752875390317425]
max_q:  4.61335412748
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.358985079900762, 0.9536734435062606, 0.5868337858798454]
max_q:  4.3589850799
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.3426675762689095, 0.9536734435062606, 0.5868337858798454]
max_q:  4.34266757627
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.328389760591038, 0.9536734435062606, 0.5868337858798454]
max_q:  4.32838976059
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.31575938518369, 0.9536734435062606, 0.5868337858798454]
max_q:  4.31575938518
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.58268642110949, -0.21752875390317425]
max_q:  4.58268642111
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 90
Environment.reset(): Trial set up with start = (1, 1), destination = (4, 3), deadline = 25
RoutePlanner.route_to(): destination = (4, 3)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 1.8952503643228513e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.46466571958182606, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.1503480005954, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.491642664915471, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 5.077173993035524, "(['red', None, None, None, 'forward'], 'right')": -0.20697289139621255, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.949218397524561, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.999587727976924, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.491642664915471]
max_q:  4.49164266492
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.4752545760849545]
max_q:  4.47525457608
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.8952503643228513e-09, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  1.89525036432e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4214377732421383e-09, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  1.42143777324e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.1503480005954, 0.9536734435062606, 0.5868337858798454]
max_q:  4.1503480006
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.6127610005946167, 0.9536734435062606, 0.5868337858798454]
max_q:  3.61276100059
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
random
action:  left
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [0.0, -0.037037037037037035, 0.0, 0.0]
max_q:  0.0
count:  3
best:  [0, 2, 3]
action:  left
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [0.0, 0.46466571958182606, 0.0, 0.0]
max_q:  0.464665719582
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 17, inputs = {'light': 'green', 'oncoming': 'left', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1845314777017819e-09, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  1.1845314777e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.6514849005351553, 0.9536734435062606, 0.5868337858798454]
max_q:  3.65148490054
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0)]
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 91
Environment.reset(): Trial set up with start = (6, 2), destination = (4, 6), deadline = 30
RoutePlanner.route_to(): destination = (4, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 1.1187241733850162e-09, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.4863364104816394, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.4746091987622805, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 4.564311660862937, "(['red', None, None, None, 'forward'], 'right')": -0.20697289139621255, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.949218397524561, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.999587727976924, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.6283198229108145, 4.4863364104816394, 0.9536734435062606, 0.5868337858798454]
max_q:  4.48633641048
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.1187241733850162e-09, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  1.11872417339e-09
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.593620866925081e-10, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  5.59362086693e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.195215650193811e-10, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  4.19521565019e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.564311660862937, -0.21752875390317425]
max_q:  4.56431166086
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.6782770771607587, 0.9536734435062606, 0.5868337858798454]
max_q:  3.67827707716
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.491801846384541, 0.9536734435062606, 0.5868337858798454]
max_q:  3.49180184638
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.517211754065314, 0.9536734435062606, 0.5868337858798454]
max_q:  3.51721175407
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0)]
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 92
Environment.reset(): Trial set up with start = (5, 1), destination = (8, 5), deadline = 35
RoutePlanner.route_to(): destination = (8, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 3.496013041828176e-10, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.448247583425982, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.4746091987622805, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 4.24377270325507, "(['red', None, None, None, 'forward'], 'right')": -0.20697289139621255, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.949218397524561, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.999587727976924, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.949218397524561]
max_q:  4.94921839752
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.906072106727989]
max_q:  4.90607210673
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 34, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [3.496013041828176e-10, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  3.49601304183e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 33, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.622009781371132e-10, -0.9294856184836837, -0.999587727976924, -0.20697289139621255]
max_q:  2.62200978137e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.24377270325507, -0.21752875390317425]
max_q:  4.24377270326
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 27, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.448247583425982, 0.9536734435062606, 0.5868337858798454]
max_q:  4.44824758343
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.4746091987622805]
max_q:  4.47460919876
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [2.1850081511426102e-10, -0.9294856184836837, -0.999587727976924, -0.2802296685198468]
max_q:  2.18500815114e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'right'}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.423344939902316, 0.9536734435062606, 0.5868337858798454]
max_q:  4.4233449399
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.407062442213766, 0.9536734435062606, 0.5868337858798454]
max_q:  4.40706244221
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.235129410634517, 0.9536734435062606, 0.5868337858798454]
max_q:  4.23512941063
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 93
Environment.reset(): Trial set up with start = (8, 1), destination = (3, 6), deadline = 50
RoutePlanner.route_to(): destination = (3, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6283198229108145, "(['red', None, None, None, 'forward'], None)": 2.0856895988179463e-10, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.752787449932502, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.449800081554252, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 4.228536909301629, "(['red', None, None, None, 'forward'], 'right')": -0.2802296685198468, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5521757472882938, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.453036053363995, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.999587727976924, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'right', 'forward'], None)": 0.022196639541910302, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.6283198229108145, 4.752787449932502, 0.9536734435062606, 0.5868337858798454]
max_q:  4.75278744993
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 50, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.0856895988179463e-10, -0.9294856184836837, -0.999587727976924, -0.2802296685198468]
max_q:  2.08568959882e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 49, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.0428447994089731e-10, -0.9294856184836837, -0.999587727976924, -0.2802296685198468]
max_q:  1.04284479941e-10
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 48, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.821335995567299e-11, -0.9294856184836837, -0.999587727976924, -0.2802296685198468]
max_q:  7.82133599557e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 47, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6283198229108145, 4.569268286610621, 0.9536734435062606, 0.5868337858798454]
max_q:  4.56926828661
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 46, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [6.517779996306083e-11, -0.9294856184836837, -0.999587727976924, -0.2802296685198468]
max_q:  6.51777999631e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.866001996675475e-11, -0.9294856184836837, -0.999587727976924, -0.2802296685198468]
max_q:  5.86600199668e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.0, 0.0, 0.0, 0.0]
max_q:  0.0
count:  4
best:  [0, 1, 2, 3]
action:  right
LearningAgent.update(): deadline = 42, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'left'}, action = right, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.453036053363995]
max_q:  4.45303605336
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.449800081554252]
max_q:  4.44980008155
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.9269512149661128, 0.9536734435062606, 0.5868337858798454]
max_q:  3.92695121497
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.930271614285835, 0.9536734435062606, 0.5868337858798454]
max_q:  3.93027161429
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6283198229108145, 3.9331769636905918, 0.9536734435062606, 0.5868337858798454]
max_q:  3.93317696369
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 37, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 36, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.228536909301629, -0.21752875390317425]
max_q:  4.2285369093
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.7844710434087685, 0.9536734435062606, 0.5868337858798454]
max_q:  3.78447104341
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.377168496952519e-11, -0.9294856184836837, -0.999587727976924, -0.285701764012098]
max_q:  5.37716849695e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.227802705370505e-11, -0.9294856184836837, -0.999587727976924, -0.285701764012098]
max_q:  5.22780270537e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.6795021585039516, 0.9536734435062606, 0.5868337858798454]
max_q:  3.6795021585
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [5.0902289499660184e-11, -0.9294856184836837, -0.999587727976924, -0.285701764012098]
max_q:  5.09022894997e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.969033022585875e-11, -0.9294856184836837, -0.999587727976924, -0.285701764012098]
max_q:  4.96903302259e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.8561004538907416e-11, -0.9294856184836837, -0.999587727976924, -0.285701764012098]
max_q:  4.85610045389e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.595527050580026, 0.9536734435062606, 0.5868337858798454]
max_q:  3.59552705058
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 26, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.5521757472882938]
max_q:  0.552175747288
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': 'forward'}, action = right, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.427687607521009]
max_q:  4.42768760752
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.427310077476539]
max_q:  4.42731007748
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.419251608789222]
max_q:  4.41925160879
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [4.750533052719204e-11, -0.9294856184836837, -0.999587727976924, -0.285701764012098]
max_q:  4.75053305272e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.540550418207698, 0.9536734435062606, 0.5868337858798454]
max_q:  3.54055041821
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0)]
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 94
Environment.reset(): Trial set up with start = (7, 2), destination = (2, 5), deadline = 40
RoutePlanner.route_to(): destination = (2, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6448145540854127, "(['red', None, None, None, 'forward'], None)": 4.6686273104309423e-11, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, 'left', 'left'], 'right')": 0.2017835568313518, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.822532070934886, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.411768745008141, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 4.220919012324908, "(['red', None, None, None, 'forward'], 'right')": -0.285701764012098, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5100887173977121, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.9536734435062606, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.419462845837914, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.2650362315047027, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.999587727976924, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'right', 'forward'], None)": 0.022196639541910302, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [4.6686273104309423e-11, -0.9294856184836837, -0.999587727976924, -0.285701764012098]
max_q:  4.66862731043e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 40, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 39, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.4431126414428196e-11, -0.9294856184836837, -0.9999999999770459, -0.285701764012098]
max_q:  3.44311264144e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.822532070934886, 0.9536734435062606, 0.5868337858798454]
max_q:  3.82253207093
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.869260534535683e-11, -0.9294856184836837, -0.9999999999770459, -0.285701764012098]
max_q:  2.86926053454e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.419462845837914]
max_q:  4.41946284584
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 32, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 31, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [2.582334481082115e-11, -0.9294856184836837, -0.9999999999781617, -0.285701764012098]
max_q:  2.58233448108e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 30, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.4532177570280094e-11, -0.9294856184836837, -0.9999999999781617, -0.285701764012098]
max_q:  2.45321775703e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.4196574654376883, 0.7460058087214966, 0.5868337858798454]
max_q:  3.41965746544
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.3417078589812817e-11, -0.9294856184836837, -0.9999999999781617, -0.285701764012098]
max_q:  2.34170785898e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.2516421720973865e-11, -0.9294856184836837, -0.9999999999781617, -0.285701764012098]
max_q:  2.2516421721e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.0, 0.0, 0.2650362315047027]
max_q:  0.265036231505
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': 'forward', 'left': None}, action = right, reward = -0.5
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.220919012324908, -0.21752875390317425]
max_q:  4.22091901232
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.0, -0.33333333333333337, -0.6422222222222222, -0.18333333333333332]
max_q:  0.0
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.082111574054601, -0.21752875390317425]
max_q:  4.08211157405
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.30135267665219, 0.7460058087214966, 0.5868337858798454]
max_q:  3.30135267665
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 19, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 95
Environment.reset(): Trial set up with start = (2, 5), destination = (4, 1), deadline = 30
RoutePlanner.route_to(): destination = (4, 1)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6448145540854127, "(['red', None, None, None, 'forward'], None)": 2.1712263802367656e-11, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.1814264396543184, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, 'left', 'left'], 'right')": 0.2017835568313518, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.649700600343526, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.411768745008141, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 4.080058784703235, "(['red', None, None, None, 'forward'], 'right')": -0.285701764012098, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5100887173977121, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.7460058087214966, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.392765536671184, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3240789052927955, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999999999781617, "(['green', 'right', None, None, 'forward'], 'forward')": 0.4395191727231112, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'right', 'forward'], None)": 0.022196639541910302, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.6448145540854127, 3.649700600343526, 0.7460058087214966, 0.5868337858798454]
max_q:  3.64970060034
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.657661950335719, 0.7460058087214966, 0.5868337858798454]
max_q:  3.65766195034
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 29, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 4.080058784703235, -0.21752875390317425]
max_q:  4.0800587847
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 28, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  forward
q:  [2.1712263802367656e-11, -0.9294856184836837, -0.9999999999781617, -0.285701764012098]
max_q:  2.17122638024e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  right
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = -0.5
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.392765536671184]
max_q:  4.39276553667
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 25, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [1.005238108398891, 0.5459851050373206, 0.09142361050650853, 4.411768745008141]
max_q:  4.41176874501
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [0.0, -1.0, -0.03333333333333333, 1.1814264396543184]
max_q:  1.18142643965
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': 'left', 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.8288309751678593, 0.7460058087214966, 0.5868337858798454]
max_q:  3.82883097517
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.8093553168639714e-11, -0.9294856184836837, -0.9999999999781617, -0.3392763230068118]
max_q:  1.80935531686e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 21, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.7088355770381952e-11, -0.9294856184836837, -0.9999999999781617, -0.3392763230068118]
max_q:  1.70883557704e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6233937981862854e-11, -0.9294856184836837, -0.9999999999781617, -0.3392763230068118]
max_q:  1.62339379819e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [0.0, 0.4395191727231112, 0.0, 0.0]
max_q:  0.439519172723
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': 'right', 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.5496031709959996e-11, -0.9294856184836837, -0.9999999999781617, -0.3392763230068118]
max_q:  1.549603171e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  left
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = -1.0
next_waypoint:  forward
q:  [1.490003049034615e-11, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  1.49000304903e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.839529039219868, 0.7460058087214966, 0.5868337858798454]
max_q:  3.83952903922
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0), (18, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 96
Environment.reset(): Trial set up with start = (2, 4), destination = (6, 5), deadline = 25
RoutePlanner.route_to(): destination = (6, 5)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6448145540854127, "(['red', None, None, None, 'forward'], None)": 1.4403362807334611e-11, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.5918126261902237, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, 'left', 'left'], 'right')": 0.2017835568313518, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.3495584742690765, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 4.108259490811311, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 3.0400293923516175, "(['red', None, None, None, 'forward'], 'right')": -0.3392763230068118, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5100887173977121, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.7460058087214966, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.355389303837761, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3240789052927955, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.005238108398891, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999999999791894, "(['green', 'right', None, None, 'forward'], 'forward')": 0.5695592416634976, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'right', 'forward'], None)": 0.022196639541910302, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  forward
q:  [1.6448145540854127, 4.3495584742690765, 0.7460058087214966, 0.5868337858798454]
max_q:  4.34955847427
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.4403362807334611e-11, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  1.44033628073e-11
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 24, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [7.201681403667306e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  7.20168140367e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [5.4012610527504795e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  5.40126105275e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 22, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 4.20271106962771, 0.7460058087214966, 0.5868337858798454]
max_q:  4.20271106963
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.6520333022213447, 0.7460058087214966, 0.5868337858798454]
max_q:  3.65203330222
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [4.501050877292066e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  4.50105087729e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.125963304184395e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  4.12596330418e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.831251639599795e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  3.8312516396e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6448145540854127, 3.6868299719992104, 0.7460058087214966, 0.5868337858798454]
max_q:  3.686829972
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 16, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  right
random
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  right
q:  [1.1101272720995676, 0.5459851050373206, 0.09142361050650853, 4.108259490811311]
max_q:  4.10825949081
count:  1
action index:  3
action:  right
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0), (18, 12.0), (14, 12.0), (14, 12.0)]
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 12.0
Simulator.run(): Trial 97
Environment.reset(): Trial set up with start = (1, 3), destination = (2, 6), deadline = 20
RoutePlanner.route_to(): destination = (2, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6448145540854127, "(['red', None, None, None, 'forward'], None)": 3.5917984121248078e-12, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.5918126261902237, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, 'left', 'left'], 'right')": 0.2017835568313518, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.499404419555053, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.023662687275635, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 3.0400293923516175, "(['red', None, None, None, 'forward'], 'right')": -0.3392763230068118, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5100887173977121, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.7460058087214966, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.355389303837761, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3240789052927955, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.1101272720995676, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999999999791894, "(['green', 'right', None, None, 'forward'], 'forward')": 0.5695592416634976, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'right', 'forward'], None)": 0.022196639541910302, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 3.0400293923516175, -0.21752875390317425]
max_q:  3.04002939235
count:  1
action index:  2
action:  left
LearningAgent.update(): deadline = 20, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.355389303837761]
max_q:  4.35538930384
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.5917984121248078e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  3.59179841212e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 17, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.9931653434373397e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  2.99316534344e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 16, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.619019675507672e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  2.61901967551e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 15, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6972583819314697, 3.499404419555053, 0.7460058087214966, 0.5868337858798454]
max_q:  3.49940441956
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 14, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.357117707956905e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  2.35711770796e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 13, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.188752157388555e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  2.18875215739e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 12, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.0519551475517705e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  2.05195514755e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 11, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6972583819314697, 3.249503682962741, 0.7460058087214966, 0.5868337858798454]
max_q:  3.24950368296
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0), (18, 12.0), (14, 12.0), (14, 12.0), (10, 12.0)]
LearningAgent.update(): deadline = 10, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
Simulator.run(): Trial 98
Environment.reset(): Trial set up with start = (6, 6), destination = (1, 2), deadline = 45
RoutePlanner.route_to(): destination = (1, 2)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6972583819314697, "(['red', None, None, None, 'forward'], None)": 1.93795763935445e-12, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.5918126261902237, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, 'left', 'left'], 'right')": 0.2017835568313518, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 4.124553314666564, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.023662687275635, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 2.9454812657741973, "(['red', None, None, None, 'forward'], 'right')": -0.3392763230068118, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5100887173977121, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.7460058087214966, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.511831343637818, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3240789052927955, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.1101272720995676, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999999999791894, "(['green', 'right', None, None, 'forward'], 'forward')": 0.5695592416634976, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'right', 'forward'], None)": 0.022196639541910302, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9294856184836837, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.511831343637818]
max_q:  4.51183134364
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 45, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  right
q:  [3.502224857708586, 0.4968484892614379, 1.3222516193518832, 4.4862397764559265]
max_q:  4.48623977646
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 44, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [1.93795763935445e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  1.93795763935e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 43, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.4534682295158375e-12, -0.9294856184836837, -0.9999999999791894, -0.3392763230068118]
max_q:  1.45346822952e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 42, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 41, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 40, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6972583819314697, 3.699642651733357, 0.7460058087214966, 0.5868337858798454]
max_q:  3.69964265173
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 39, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  forward
LearningAgent.update(): deadline = 38, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = -1.0
next_waypoint:  forward
q:  [1.0598205840219648e-12, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  1.05982058402e-12
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 37, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6972583819314697, 3.416368876444553, 0.7460058087214966, 0.5868337858798454]
max_q:  3.41636887644
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 36, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
random
action:  None
LearningAgent.update(): deadline = 35, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6904822715803056, 3.2589945568396574, 0.7460058087214966, 0.5868337858798454]
max_q:  3.25899455684
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 34, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  left
q:  [0.7391780451416115, 1.1379101839690677, 2.9454812657741973, -0.21752875390317425]
max_q:  2.94548126577
count:  1
action index:  2
action:  left
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0), (18, 12.0), (14, 12.0), (14, 12.0), (10, 12.0), (33, 12.0)]
LearningAgent.update(): deadline = 33, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = left, reward = 12.0
Simulator.run(): Trial 99
Environment.reset(): Trial set up with start = (2, 6), destination = (8, 6), deadline = 30
RoutePlanner.route_to(): destination = (8, 6)
q:  {"(['red', 'left', None, None, 'right'], 'left')": -0.03333333333333333, "(['green', None, None, None, 'forward'], 'right')": 0.5868337858798454, "(['green', None, None, None, 'forward'], None)": 1.6904822715803056, "(['red', None, None, None, 'forward'], None)": 9.935817975205919e-13, "(['green', None, None, 'forward', 'right'], 'forward')": 0.20045060869895037, "(['green', 'left', None, None, 'forward'], 'forward')": 0.6565825047081311, "(['green', 'left', None, None, 'right'], None)": 0.0, "(['red', None, None, None, 'left'], 'forward')": -0.33333333333333337, "(['red', 'left', None, None, 'forward'], 'forward')": -0.037037037037037035, "(['green', None, None, 'right', 'forward'], 'forward')": 0.5327193490058473, "(['red', None, 'right', None, 'left'], None)": 0.0, "(['red', None, None, None, 'right'], None)": 3.502224857708586, "(['red', 'forward', None, None, 'right'], 'right')": 4.427203871478544, "(['red', None, 'forward', None, 'left'], 'right')": -0.05555555555555555, "(['red', 'right', None, None, 'right'], 'left')": -0.0625, "(['green', None, 'left', None, 'right'], None)": 0.0, "(['green', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'forward', None, None, 'forward'], 'forward')": -0.5, "(['red', None, None, None, 'left'], 'right')": -0.18333333333333332, "(['red', None, 'left', None, 'right'], 'forward')": -0.1, "(['red', None, 'left', None, 'left'], 'left')": -0.3333333333333333, "(['green', None, None, 'forward', 'left'], 'left')": 0.5, "(['green', None, None, 'left', 'forward'], 'right')": 0.36293132606878936, "(['green', None, 'right', None, 'forward'], 'forward')": 1.141860612231821, "(['red', 'left', None, None, 'right'], 'right')": 1.5918126261902237, "(['green', None, None, None, 'left'], None)": 0.7391780451416115, "(['red', 'right', None, None, 'right'], 'right')": 0.25758086702511146, "(['green', None, None, 'left', 'left'], 'right')": 0.2017835568313518, "(['red', None, None, 'left', 'left'], 'forward')": -0.1111111111111111, "(['green', None, None, None, 'forward'], 'forward')": 3.1445405062179153, "(['red', 'left', None, None, 'forward'], None)": 0.0, "(['green', None, None, None, 'right'], 'right')": 5.023662687275635, "(['red', None, 'forward', None, 'left'], None)": 0.0, "(['red', 'left', None, None, 'right'], 'forward')": -1.0, "(['green', None, None, None, 'left'], 'forward')": 1.1379101839690677, "(['green', None, None, None, 'left'], 'left')": 3.822752879700272, "(['red', None, None, None, 'forward'], 'right')": -0.3392763230068118, "(['green', None, 'forward', None, 'right'], 'left')": 0.17952113831055388, "(['green', None, None, 'forward', 'left'], 'forward')": -0.041666666666666664, "(['red', None, None, None, 'left'], None)": 0.0, "(['red', None, 'left', None, 'left'], 'forward')": -0.034482758620689655, "(['green', None, None, 'forward', 'forward'], 'right')": 0.5100887173977121, "(['green', None, 'right', None, 'left'], 'right')": 0.23280423280423285, "(['red', None, None, None, 'left'], 'left')": -0.6422222222222222, "(['green', None, None, None, 'right'], 'left')": 0.09142361050650853, "(['green', None, None, None, 'forward'], 'left')": 0.7460058087214966, "(['red', 'forward', None, None, 'left'], 'left')": -0.1111111111111111, "(['green', None, None, 'forward', 'left'], None)": 0.0, "(['green', None, None, None, 'left'], 'right')": -0.21752875390317425, "(['red', None, None, None, 'right'], 'right')": 4.243119888227963, "(['red', 'forward', None, None, 'forward'], None)": 0.0, "(['green', None, 'forward', None, 'forward'], 'right')": 0.3240789052927955, "(['red', None, None, None, 'right'], 'left')": 1.3222516193518832, "(['green', None, None, None, 'right'], None)": 1.1101272720995676, "(['green', 'left', None, None, 'right'], 'forward')": 0.17466439646082368, "(['green', None, 'forward', None, 'left'], 'left')": 0.5, "(['green', None, 'left', None, 'left'], 'left')": 1.0636181645327067, "(['red', None, 'left', None, 'forward'], None)": 0.0, "(['green', None, None, 'forward', 'right'], None)": 0.0, "(['red', 'forward', None, None, 'left'], 'right')": -0.1, "(['red', None, None, None, 'forward'], 'left')": -0.9999999999791894, "(['green', 'right', None, None, 'forward'], 'forward')": 0.5695592416634976, "(['red', 'left', None, None, 'left'], 'forward')": -0.07142857142857142, "(['green', None, None, 'right', 'forward'], None)": 0.022196639541910302, "(['green', None, None, 'left', 'right'], 'left')": 1.8412075969608175, "(['green', None, 'right', None, 'right'], 'right')": 1.0160182048973492, "(['green', None, 'left', None, 'forward'], 'left')": -0.03124999776907473, "(['red', 'forward', None, None, 'forward'], 'left')": -0.5, "(['green', 'forward', None, None, 'left'], 'right')": 9.5, "(['red', None, None, 'left', 'right'], None)": 0.0, "(['green', None, 'left', None, 'forward'], None)": 0.0, "(['red', None, None, 'right', 'forward'], 'left')": -1.0, "(['green', None, None, None, 'right'], 'forward')": 0.5459851050373206, "(['red', None, None, None, 'forward'], 'forward')": -0.9395591015573675, "(['green', None, 'left', None, 'forward'], 'right')": -0.03566718055659328, "(['green', None, 'left', None, 'right'], 'right')": 0.0982779857908416, "(['red', 'forward', None, None, 'right'], 'forward')": -0.14285714285714285, "(['red', 'left', None, None, 'forward'], 'left')": -0.14285714285714285, "(['red', None, None, None, 'right'], 'forward')": 0.4968484892614379, "(['red', 'forward', None, None, 'forward'], 'right')": -0.16655610757549197}
next_waypoint:  right
q:  [1.1101272720995676, 0.5459851050373206, 0.09142361050650853, 5.023662687275635]
max_q:  5.02366268728
count:  1
action index:  3
action:  right
LearningAgent.update(): deadline = 30, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = right, reward = 2.0
next_waypoint:  forward
q:  [9.935817975205919e-13, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  9.93581797521e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 29, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [4.967908987602959e-13, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  4.9679089876e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 28, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.72593174070222e-13, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  3.7259317407e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 27, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [3.10494311725185e-13, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  3.10494311725e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 26, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6904822715803056, 3.1445405062179153, 0.7460058087214966, 0.5868337858798454]
max_q:  3.14454050622
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 25, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6904822715803056, 3.230086455596124, 0.7460058087214966, 0.5868337858798454]
max_q:  3.2300864556
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 24, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.716825227595369e-13, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  2.7168252276e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 23, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6904822715803056, 3.025072046330126, 0.7460058087214966, 0.5868337858798454]
max_q:  3.02507204633
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 22, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [1.6904822715803056, 3.086005043434493, 0.7460058087214966, 0.5868337858798454]
max_q:  3.08600504343
count:  1
action index:  1
action:  forward
LearningAgent.update(): deadline = 21, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 2.0
next_waypoint:  forward
q:  [2.5227662827671285e-13, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  2.52276628277e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 20, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [2.396627968628772e-13, -0.9395591015573675, -0.9999999999791894, -0.3392763230068118]
max_q:  2.39662796863e-13
count:  1
action index:  0
action:  None
LearningAgent.update(): deadline = 19, inputs = {'light': 'red', 'oncoming': None, 'right': None, 'left': None}, action = None, reward = 0.0
next_waypoint:  forward
q:  [1.6904822715803056, 2.9653378163862296, 0.7460058087214966, 0.5868337858798454]
max_q:  2.96533781639
count:  1
action index:  1
action:  forward
Environment.act(): Primary agent has reached destination!
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0), (18, 12.0), (14, 12.0), (14, 12.0), (10, 12.0), (33, 12.0), (18, 12.0)]
LearningAgent.update(): deadline = 18, inputs = {'light': 'green', 'oncoming': None, 'right': None, 'left': None}, action = forward, reward = 12.0
epsilon:  0.1 gamma:  0.5 alpha:  0.0833333333333 defaultq:  0.0
Results:  [(29, 12.0), (5, 12.0), (26, 12.0), (11, 12.0), (31, 12.0), (11, 12.0), (17, 12.0), (18, 12.0), (26, 12.0), (12, 12.0), (17, 12.0), (23, 12.0), (33, 12.0), (9, 12.0), (0, 12.0), (14, 12.0), (12, 12.0), (21, 12.0), (16, 12.0), (23, 12.0), (19, 12.0), (10, 12.0), (20, 12.0), (18, 12.0), (29, 12.0), (26, 12.0), (10, 12.0), (37, 12.0), (26, 12.0), (29, 12.0), (27, 12.0), (18, 12.0), (10, 12.0), (17, 12.0), (19, 12.0), (0, 12.0), (29, 12.0), (13, 12.0), (18, 12.0), (12, 12.0), (12, 12.0), (18, 12.0), (5, 12.0), (29, 9.5), (20, 12.0), (11, 12.0), (15, 12.0), (19, 12.0), (29, 12.0), (12, 12.0), (20, 12.0), (12, 12.0), (14, 12.0), (20, 12.0), (27, 12.0), (16, 12.0), (24, 12.0), (21, 12.0), (20, 12.0), (20, 12.0), (15, 12.0), (14, 12.0), (13, 12.0), (13, 12.0), (18, 12.0), (24, 12.0), (22, 12.0), (25, 12.0), (13, 12.0), (21, 12.0), (5, 12.0), (21, 12.0), (23, 12.0), (5, 12.0), (8, 12.0), (13, 12.0), (15, 12.0), (22, 12.0), (21, 12.0), (10, 12.0), (2, 12.0), (15, 12.0), (15, 12.0), (19, 12.0), (20, 12.0), (20, 12.0), (18, 12.0), (14, 12.0), (14, 12.0), (10, 12.0), (33, 12.0), (18, 12.0)]
Number of Successful Outcomes:  92
