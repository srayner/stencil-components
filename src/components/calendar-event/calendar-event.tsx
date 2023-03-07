import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import dayjs from 'dayjs';

@Component({
  tag: 'calendar-event',
  styleUrl: 'calendar-event.css',
  shadow: true,
})
export class CalendarEvent {
  
  @Prop() caption: string;
  @Prop() start: number;
  @Prop() duration: number;

  private durationString(): string {
    const start = dayjs().hour(9).minute(this.start);
    const end = start.add(this.duration, 'minute');
    return format(start.format('hh:mm'), ' - ', end.format('hh:mm'));
  }

  render() {
    return (
        <div>
          <p>{this.caption}</p>
          <p>{this.durationString()}</p>
        </div>
    );
  }
}
