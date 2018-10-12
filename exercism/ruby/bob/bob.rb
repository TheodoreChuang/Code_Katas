class Bob
  def self.hey(remark)
    if remark.match(/^ $/)
      "Whatever."
    elsif remark == remark.upcase && remark[-1] == "?"
      "Calm down, I know what I'm doing!"
    elsif remark[-1] == "?"
      "Sure."
    elsif remark == remark.upcase
      "Whoa, chill out!"
    elsif remark.match(/[^ ]/)
      "Whatever."
    else
      "Fine. Be that way!"
    end
  end
end
