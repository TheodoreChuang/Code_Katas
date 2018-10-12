class Series
  attr_accessor :series

  def initialize(series)
    @series = series
  end

  def slices(slice_size)
    split_array = series.split(//)
    slice_array = []

    for n in split_array.length - 1
      #   p split_array.take(slice_size)
      split_set = split_array.take(slice_size).join
      slice_array.push(split_set)
      split_array.shift
    end
    return slice_array
  end
end

# series = Series.new("01234")
# series.slices(2)

# split series into split_array
# check slice_number
# if slice number greater than one
# iterate array index, number - 1
# build slice_set: index + series
# push slice_set into new slice_array
# shift split_array
# repeat until split_array[- slice_number]
# return slice_array
