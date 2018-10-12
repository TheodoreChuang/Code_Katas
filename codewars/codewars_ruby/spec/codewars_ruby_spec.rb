require_relative "../codewars_ruby"

#### 6 Kyu  ####

describe "Sort the odd" do
  it "Test 1" do
    expect(sort_array([5, 3, 2, 8, 1, 4, 11])).to eq [1, 3, 2, 8, 5, 4, 11]
  end
  it "Test 2" do
    expect(sort_array([2, 22, 37, 11, 4, 1, 5, 0])).to eq [2, 22, 1, 5, 4, 11, 37, 0]
  end
  it "Test 3" do
    expect(sort_array([1, 111, 11, 11, 2, 1, 5, 0])).to eq [1, 1, 5, 11, 2, 11, 111, 0]
  end
  it "Test 4" do
    expect(sort_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).to eq [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  end
  it "Test 5" do
    expect(sort_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to eq [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  end
  it "Test 6" do
    expect(sort_array([0, 1, 2, 3, 4, 9, 8, 7, 6, 5])).to eq [0, 1, 2, 3, 4, 5, 8, 7, 6, 9]
  end
  it "Test 7" do
    expect(sort_array([])).to eq []
  end
  it "Test 8" do
    expect(sort_array([19])).to eq [19]
  end
  it "Test 9" do
    expect(sort_array([2])).to eq [2]
  end
  it "Test 10" do
    expect(sort_array([7, 5])).to eq [5, 7]
  end
end

describe "Count the smiley faces!" do
  it "Basic test 1" do
    expect(count_smileys([])).to eq 0
  end
  it "Basic test 2" do
    expect(count_smileys([":D", ":~)", ";~D", ":)"])).to eq 4
  end
  it "Basic test 3" do
    expect(count_smileys([":)", ":(", ":D", ":O", ":;"])).to eq 2
  end
  it "Basic test 4" do
    expect(count_smileys([";]", ":[", ";*", ":$", ";-D"])).to eq 1
  end
  it "Basic test 5" do
    expect(count_smileys([";", ")", ";*", ":$", "8-D"])).to eq 0
  end
end
# Rules for a smiling face:
# -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
# -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
# -Every smiling face must have a smiling mouth that should be marked with either ) or D.

describe "Format string of names" do
  it "Bart, Lisa & Maggie" do
    expect(list([{name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}])).to eq "Bart, Lisa & Maggie"
  end
  it "Bart & Lisa" do
    expect(list([{name: "Bart"}, {name: "Lisa"}])).to eq "Bart & Lisa"
  end
  it "Bart" do
    expect(list([{name: "Bart"}])).to eq "Bart"
  end
  it "returns ''" do
    expect(list([])).to eq ""
  end
end

describe "Persistence Bugger" do
  it "Basic test 1" do
    expect(persistence(39)).to eq 3
  end
  it "Basic test 2" do
    expect(persistence(4)).to eq 0
  end
  it "Basic test 3" do
    expect(persistence(25)).to eq 2
  end
  it "Basic test 4" do
    expect(persistence(999)).to eq 4
  end
end

describe "Array.diff" do
  it "test 1" do
    expect(array_diff([1, 2], [1])).to eq [2]
  end
  it "test 2" do
    expect(array_diff([1, 2, 2], [1])).to eq [2, 2]
  end
  it "test 3" do
    expect(array_diff([], [1, 2])).to eq []
  end
end

#### 7 Kyu  ####

describe "Shortest Word" do
  it "Simple Case 1" do
    expect(find_short("turns out random test cases are easier than writing out basic ones")).to eq 3
  end
  it "Simple Case 2" do
    expect(find_short("bitcoin take over the world maybe who knows perhaps")).to eq 3
  end
  it "Simple Case 3" do
    expect(find_short("lets talk about javascript the best language")).to eq 3
  end
  it "Simple Case 4" do
    expect(find_short("i want to travel the world writing code one day")).to eq 1
  end
  it "Simple Case 5" do
    expect(find_short("Lets all go on holiday somewhere very cold")).to eq 2
  end
end

describe "Binary Addition" do
  it "test 1" do
    expect(add_binary(1, 1)).to eq "10"
  end
  it "test 2" do
    expect(add_binary(1, 0)).to eq "1"
  end
  it "test 3" do
    expect(add_binary(2, 2)).to eq "100"
  end
  it "test 4" do
    expect(add_binary(51, 12)).to eq "111111"
  end
end

describe "You're a square" do
  it "test 1" do
    expect(is_square(0)).to eq true
  end
  it "test 2" do
    expect(is_square(-1)).to eq false
  end
  it "test 3" do
    expect(is_square(3)).to eq false
  end
  it "test 4" do
    expect(is_square(4)).to eq true
  end
end

describe "Ones and Zeros" do
  it "test 1" do
    expect(binary_array_to_number([0, 0, 0, 1])).to eq 1
  end
  it "test 2" do
    expect(binary_array_to_number([0, 0, 1, 0])).to eq 2
  end
  it "test 3" do
    expect(binary_array_to_number([1, 1, 1, 1])).to eq 15
  end
  it "test 4" do
    expected = 6
    actual = binary_array_to_number([0, 1, 1, 0])
    expect(actual).to eq expected
  end
end
