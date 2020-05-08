from django.test import TestCase
# Create your tests here.

s = 'media/html/index.html'
st = ''
for c in reversed(s):
    if c != '/':
        print(c)
        st += c
    else:
        break


print(st)
