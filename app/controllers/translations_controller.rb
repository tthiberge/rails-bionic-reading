class TranslationsController < ApplicationController
  def home
    @translation = Translation.new
    @translations = Translation.all

  end

  def create
    input_content = params[:translation][:content]
    output_content = input_content.split(" ")
    # raise
    output_content.map! do |element|
      # if element.chars.count <= 3
        # element.gsub(element[0], "<strong>#{element[0]}</strong>")
        # else
        element.gsub(element.first(element.chars.count.to_f.fdiv(2).round), "<strong>#{element.first(element.chars.count.to_f.fdiv(2).round)}</strong>")
        # end
      end

    @translation = Translation.new
    @translation.content = output_content.join(" ")
    if @translation.save
      redirect_to root_path
    else
      render :home, alert: "it didn't work"
    end


    # >> "hello".gsub('hello'.first(3),'<strong>nana')
    # Try to add if else

    # En fait ça n'a pas l'air de fonctionner sur le double array de lettre, en .map ou .each
    # Je vais essayer de spliter au bon endroit et que ce soit en sub-words


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
