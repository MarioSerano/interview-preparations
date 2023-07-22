from collections import defaultdict

def countPollingStation(n,m,region):
  # direct neighbors
  nodes = defaultdict(list)
  for i in range(n):
    for j in range(m):
      if region[i][j] == '.':
        continue

      if (i + 1) < m and region[i+1][j] == 'x':
        nodes[(i,j)].append((i+1, j))
      
      if (i - 1) >= 0 and region[i - 1][j] == 'x':
        nodes[(i,j)].append((i-1, j))

      if (j+1) < n and region[i][j+1] == 'x':
        nodes[(i,j)].append((i, j+1))
      
      if (j - 1) >= 0 and region[i][j-1] == 'x':
        nodes[(i,j)].append((i, j-1))
  
  for key in nodes.keys():
    if len(nodes[key]) < 1:
      continue
    stack = nodes.keys()
    del nodes[key] # delete node that we know has neighbors
    while len(stack) > 0:
      # TODO: conditions that keep deleting nodes that exist until all that's left is the extent of node
      pass


  return len(nodes)

n = 4
m = 4

region = [
  ['x','x','.','.'],
  ['.','x','x','.'],
  ['.','.','x','.'],
  ['x','.','.','.']
  ]

print(countPollingStation(n,m,region))