### Codewars ###

#### 6 Kyu  ####

# 6 Kyu - Sort the Odd
def sort_array(array)
  odd_arr = []
  array.each do |i|
    i.odd? ? odd_arr.push(i) : i
  end
  odd_arr.sort!
  array.map do |i|
    i.odd? ? odd_arr.shift : i
  end
end

p sort_array([5, 3, 2, 8, 1, 4, 11])

# 6 Kyu - Count the smiley faces!
def count_smileys(arr)
  arr.select { |face| face =~ /(:|;)(-|~)?(\)|D)/ }.length
end

# 6 Kyu - Format a string of names like 'Bart, Lisa & Maggie'
def list(names)
  names = names.map { |name| name[:name] }
  last_name = names.pop
  return last_name.to_s if names.empty?
  "#{names.join(", ")} & #{last_name}"
end

# def list(names)
# if names.empty?
#   return ""
# elsif names.length <= 1
#   return names[0][:name]
# elsif names.length == 2
#   return "#{names[0][:name]} & #{names[1][:name]}"
# else
#   name_arr = []
#   names.each { |hash| name_arr.push(hash[:name]) }
#   name_arr[0..-3].join(", ") + ", " + name_arr.last(2).join(" & ")
# end
# end

# 6 Kyu  - Persistent Bugger.
def persistence(n)
  persistence_count = 0
  current_num = n
  while current_num >= 10
    nums_arr = current_num.to_s.split(//)
    current_num = 1
    nums_arr.each do |num|
      current_num *= num.to_i
    end
    persistence_count += 1
  end
  persistence_count
end

# 6 Kyu  - Array.diff
def array_diff(a, b)
  a.keep_if { |n| !b.include?(n) }
  # a - b
end

#### 7 Kyu  ####

# 7 Kyu  - Shortest Word
def find_short(phrase)
  phrase.split.min { |a, b| a.length <=> b.length }.length
end

# 7 Kyu  - Binary Addition
def add_binary(a, b)
  (a + b).to_s(2)
end

# 7 Kyu  - You're a square!
def is_square(x)
  x < 0 ? false : Math.sqrt(x) == Math.sqrt(x).to_i ? true : false
end

# 7 Kyu  - Ones and Zeros
def binary_array_to_number(arr)
  arr.join("").to_i(2)
end
