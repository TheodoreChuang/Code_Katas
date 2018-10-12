class SumOfMultiples
  def initialize(*nums)
    @nums_arr = nums
    @multiples_arr = []
  end

  def find_multiples(nums_arr, limit)
    nums_arr.each do |num0|
      num = num0
      while num < limit
        @multiples_arr.push(num)
        num += num0
      end
    end
  end

  def to(limit)
    find_multiples(@nums_arr, limit)
    @multiples_arr
      .uniq
      .sum
  end
end
