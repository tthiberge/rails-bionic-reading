def selection(words, letters)
    output = []
    letters_array = letters.chars

    words.split.each do |word|
        letters_array.each do |letter|
            output << word if word.include?(letter)
        end
    end

    return output.uniq
    # return output & output # Intersection des deux donc ne garde qu'une uni


end




p selection("an apple a day keeps the doctor away", "ae")
p selection("she was the she she she", "ae")




