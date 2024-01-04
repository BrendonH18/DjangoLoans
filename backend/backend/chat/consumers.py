from channels.generic.websocket import AsyncWebsocketConsumer

class PersonalChatConsumer(AsyncWebsocketConsumer):
    async def connect(self) -> None:
        print("TESTING CONNECTION AND REDIS")
        await self.accept()
        # return await super().connect()