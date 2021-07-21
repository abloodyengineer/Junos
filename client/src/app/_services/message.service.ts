import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../_model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMessages(container){
    let params;
    params={"Container":container}
    console.log(params.Container)
    return this.http.get(this.baseUrl+"messages", { observe: 'response', params })
  }

  getMessageThread(username: string){
    return this.http.get<Message[]>(this.baseUrl+'messages/thread/'+username)
  }
  
  sendMessage(username: string, content: string) {
    return this.http.post<Message>(this.baseUrl + 'messages', {recipientUsername: username, content})
  }

  deleteMessage(id: number) {
    return this.http.delete(this.baseUrl + 'messages/' + id);
  }
}
