import {Event} from './event'
import {EventRepo} from './eventRepo'

export class EventApplication{
    private eventRepo: EventRepo

    public constructor(eventRepo: EventRepo){
        this.eventRepo = eventRepo
    }

    public scheduleEvent(eventName: string, eventDate: string, eventCost: string, eventLocation: string): boolean{
    
        const newEvent = new Event(eventName, eventDate, eventCost, eventLocation)
        const existingEvents: Event[] = this.eventRepo.getAllEvents()
        if(this.existingEventsContainsNewEvent(existingEvents, newEvent)){
            return false
        }
        existingEvents.push(newEvent)
        
        return this.eventRepo.saveAllEvents(existingEvents)

    }

    public updateNamedEvent(eventName: string, eventDate: string, eventCost: string, eventLocation: string): boolean{
       
        const newEvent = new Event(eventName, eventDate, eventCost, eventLocation)
        const existingEvents: Event[] = this.eventRepo.getAllEvents()
        
        if(this.replaceExistingEventWithNewEvent(existingEvents, newEvent)){
            return this.eventRepo.saveAllEvents(existingEvents)
        }

        return false
    }

    private existingEventsContainsNewEvent(existingEvents: Event[], newEvent: Event): boolean{
        let alreadyExists: boolean = false

        existingEvents.forEach((existingEvent) => {
            if(existingEvent.eventName === newEvent.eventName &&
                existingEvent.eventDate === newEvent.eventDate &&
                existingEvent.eventCost === newEvent.eventCost &&
                existingEvent.eventLocation === newEvent.eventLocation)
                alreadyExists = true
        })

        return alreadyExists
    }

    private replaceExistingEventWithNewEvent(existingEvents: Event[], newEvent: Event): boolean{
        let existingIndex: number = -1

        existingEvents.forEach((existingEvent, index) => {
            if(existingEvent.eventName === newEvent.eventName){
                existingIndex = index
            }
        })
        if(existingIndex < 0){
            return false
        }
        existingEvents[existingIndex] = newEvent

        return true
    }

}