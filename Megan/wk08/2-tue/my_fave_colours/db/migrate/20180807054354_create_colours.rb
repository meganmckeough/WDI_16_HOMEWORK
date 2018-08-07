class CreateColours < ActiveRecord::Migration[5.2]
  def change
    create_table :colours do |t|
      t.string :hexcode
      t.text :img_url

      t.timestamps
    end
  end
end
