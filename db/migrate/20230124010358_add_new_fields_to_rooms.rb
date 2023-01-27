class AddNewFieldsToRooms < ActiveRecord::Migration[7.0]
  def change
    add_column :rooms, :url, :string
  end
end
