a = int(input())
b = int(input())

print(max(a,b))

year = int(input())
if (year % 4 == 0) and (year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

x = int(input())
y = int(input())
if (x != 1 and y != 1) or (x == 1 and y == 1):
    print("YES")
else:
    print("NO")

a1 = int(input())
if a1 == 0:
    print(0)
elif a1 > 0:
    print(1)
else:
    print(-1)

a2 = int(input())
b1 = int(input())

if a2 == b1:
    print(0)
elif a2 > b1:
    print(1)
else:
    print(2)