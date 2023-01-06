import { ListResponse } from '@appStore/models/list-response.interface';
import { Message } from '../models/message.interface';

export const mockMessages: ListResponse<Message> = {
  list: [
    {
      id: crypto.randomUUID(),
      title: 'Title 1',
      content: 'lorem',
      dateAdd: new Date('2023-01-01'),
    },
  ],
};
