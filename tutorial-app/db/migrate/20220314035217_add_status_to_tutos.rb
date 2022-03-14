class AddStatusToTutos < ActiveRecord::Migration[6.1]
  def change
    add_column :tutos, :status, :boolean
  end
end
