# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Generic tickets since I'm unsure of the technologies we are using. 

Weight of a ticket will range from 1 - 5, 1 being a simple one liner, 5 being something more complicated. 

Also assuming that we are required to create tests for all the tickets given to provide full coverage. 

1. Add custom_id column in Agents table: 

    In order for facilities to save their own custom id's, we could add custom_id in the Agents table. This will allow us to send an update to the Agent whenever an agent is booked. Add tests and mocks to ensure that custom_id is returned if provided when making an API call. Weight: 3 

2. Add custom Id option when approving a shift for an Agent:

    Assuming we are using a form to approve an Agent for a shift, we could create an optional input in the form to add the custom_id. This will make a call to our API and update the Agents table with the custom_id. (Weight Depends on what kind of input we want to use. Are we using a library like MUI or creating an input from scratch? Do we use react or Vanilla javascript? ) Weight: 3 if using Libraries / frameworks. 5 If not.

3. Add custom_id prop to the Shifts metadata: 

    Since the Shifts table is already joined with the Agent table in order to return the agents metadata, let's ensure we also return the custom_id in the metadata. Make sure this is not a required prop. getShiftsByFacility will then return all of the information given.  Weight: 2

Also since generateReport is called with the list of shifts, I'm assuming that the shifts metadata will be present. 

4. Add custom id to the generateReport function.
    Since this will be a PDF reporting the information on the shifts, add the agents custom id in the report if present. Weight: 2 (shouldn't be too hard since metadata is present, just add another column in the report with the provided custom id )


