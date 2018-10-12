class FlattenArray
  def self.flatten(arr)
    arr.flatten.delete_if { |e| e == nil }
  end
end
