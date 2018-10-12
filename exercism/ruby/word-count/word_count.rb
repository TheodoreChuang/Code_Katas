class Phrase
  attr_accessor :phrase

  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    word_hash = Hash.new
    # stuck on how to ignore apostrophes, attempted /\W[^']/ but doesn't work
    @phrase.downcase.split(/\W/).each do |word|
      word == "" ? nil :
        word_hash.has_key?(word) ? word_hash[word] += 1 : word_hash[word] = 1
    end
    word_hash
  end
end
