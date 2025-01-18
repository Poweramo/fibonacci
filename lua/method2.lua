function fibonacci(n) 
	phi = (1 + math.sqrt(5)) / 2

	operation1 = (2 * phi) ^ (n + 1)
	operation2 = (2 * (phi - math.sqrt(5))) ^ (n + 1)
	operation3 = (2 * phi - 1) * (2 ^ (n + 1))

	result = (operation1 - operation2) / operation3
	return math.floor(result)
end
