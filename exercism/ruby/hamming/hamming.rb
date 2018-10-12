class Hamming
  def self.compute(dnaA, dnaB)
    dnaA.length != dnaB.length ? compute : nil
    hamming = 0
    i = 0
    dnaA.each_char do |n|
      if n != dnaB[i]
        hamming += 1
      end
      i += 1
    end
    return hamming
  end
end
