export class Event{
    public eventName: string
    public eventDate: string
    public eventCost: string
    public eventLocation: string

    public constructor(eventName: string, eventDate: string, eventCost: string, eventLocation: string){
        this.eventName = eventName
        this.eventDate = eventDate
        this.eventCost = eventCost
        this.eventLocation = eventLocation
        
        const validEvent: boolean = this.validEventName(eventName) && 
        this.validEventDate(eventDate) && 
        this.validEventLocation(eventLocation) && 
        this.validateEventCost(eventCost)
            if(!validEvent) {
                throw new Error('the event is not valid')
        }
    }
    private validEventName(eventName: string): boolean{
        return eventName.length > 10 // A nice long name makes an event seem important
    }
    private validEventDate(eventDate: string): boolean{
        return eventDate.length === 7 // MM/YYYY
    }
    private validEventLocation(eventLocation: string): boolean{
        return eventLocation.startsWith("online") //it's a pandemic, no in person events
    }
    private validateEventCost(eventCost: string): boolean{
        try{
            parseInt(eventCost)
            return true
        } catch(error: any){
            return false
        }
    }

}