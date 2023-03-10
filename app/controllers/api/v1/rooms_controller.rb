class Api::V1::RoomsController < ApplicationController
  before_action :set_room, only: %i[ show update destroy ]

  # GET /rooms
  def index
    @rooms = Room.all

    render json: @rooms
  end

  # GET /rooms/1
  def show
    render json: @room
  end

  # POST /rooms
  def create
    room = Room.create(
      name: params[:name],
      user_id: params[:userId],
      url: params[:url]
    )
    room.reload
    render :json => {
      id: room.id,
      name: room.name,
      user_id: room.user_id,
      url: room.url
    }
  end

  # PATCH/PUT /rooms/1
  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rooms/1
  def destroy
    @room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room
      @room = Room.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def room_params
      params.require(:room).permit(:name)
    end
end
