class TranslationsController < ApplicationController
  def home
    @translation = Translation.new
    @translations = Translation.all


  end

  def create
    # raise
    input_content = params[:translation][:content]

    output_content = input_content.split(" ")
    oooo = []
    output_content.each do |element|
      if element.chars.count <= 3
        oooo << element.gsub(element[0], "<strong>#{element.first}</strong>")
        # element = element.gsub(element[0], "<strong>#{element.first}</strong>")
      else
        oooo << element.gsub(element.first(element.chars.count.to_f.fdiv(2).round), "<strong>#{element.first(element.chars.count.to_f.fdiv(2).round)}</strong>")
        # element = element.gsub(element.first(element.chars.count.to_f.fdiv(2).round), "<strong>#{element.first(element.chars.count.to_f.fdiv(2).round)}</strong>")
        # element.chars[0] = "<strong>#{element.chars[0]}"
        # element.chars[element.chars.count.to_f.fdiv(2).round - 1] = "#{element.chars[element.chars.count.to_f.fdiv(2).round - 1]}</strong>"
      end
      return oooo
      @translation = oooo.join(" ")
      raise
    end
    # raise

    # >> "hello".gsub('hello'.first(3),'<strong>nana')


    # En fait ça n'a pas l'air de fonctionner sur le double array de lettre, en .map ou .each
    # Je vais essayer de spliter au bon endroit et que ce soit en sub-words


    # coquille vide et forcer le .content
    # @translation = Translation.new(translation_params)


    # Penser à enregistrer avec redirection vers une nouvelle page
    # A voir si après j'ai envie de tester la création avec juste une modale et du JS

  end

  def edit
    @translation = Translation.find(params[:id])
  end

  def update
    @translation = Translation.find(params[:id])
    # Penser à enregistrer
    # @translation.update(translation_params)
    # redirect_to
  end

  def destroy
    @translation = Translation.find(params[:id])
    @translation.destroy
    # redirect_to xxxxx, status: :see_other

  end

  private

  def translation_params
    params.require(:translation).permit(:content)
  end

end
