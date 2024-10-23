import sender from '@/http'

class TryService {
  tryGet() {
    return sender.get('/test/get');
  }
  tryPost(param) {
    return sender.post('/test/post', param);
  }
}

export default TryService;