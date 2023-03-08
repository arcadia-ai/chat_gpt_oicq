import { ChatCompletionRequestMessage } from 'openai/api'
import { ChatCompletionRequestMessageRoleEnum } from 'openai'

export class Chatmessage implements ChatCompletionRequestMessage {
  private _content: string
  private _role: ChatCompletionRequestMessageRoleEnum

  constructor (content: string, role: ChatCompletionRequestMessageRoleEnum) {
    this._content = content
    this._role = role
  }

  get content (): string {
    return this._content
  }

  set content (value: string) {
    this._content = value
  }

  get role (): ChatCompletionRequestMessageRoleEnum {
    return this._role
  }

  set role (value: ChatCompletionRequestMessageRoleEnum) {
    this._role = value
  }
}
