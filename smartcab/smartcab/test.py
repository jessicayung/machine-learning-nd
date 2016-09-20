var = "hi"

with open('test.html', 'w') as f:
		f.write("how\nnow")
		f.write("abc")
		f.write(repr(var) + "after")
		f.write("\nhello")