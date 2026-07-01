PS D:\Exam\2311cs020320\vehicle_scheduling-be> node test.js
--- Running Scheduler Tests ---
Test 1: checking basic knapsack...
Test 1 passed!
Test 2: capacity of 0...
Test 2 passed!
Test 3: item exceeds budget...
Test 3 passed!
Test 4: ample budget, everything fits...
Test 4 passed!
All tests passed successfully!
Fetching depot and vehicle information...
Fetched 5 depots and 31 vehicles from APIs.

--- Daily Maintenance Schedule ---

Depot ID: 1
Available Budget: 60 hours
Total Scheduled Duration: 60 hours
Total Operational Impact: 138
Number of Vehicles Scheduled: 19
Scheduled Tasks:
  - TaskID: 98ae62eb-30d8-4224-bcf8-577e90c3b746 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 39e34e5b-745b-4fa9-b36d-ae27e3069657 | Duration: 1 hr(s) | Impact: 4
  - TaskID: 23fbce1d-86b9-4954-abc1-0a3b26643a2a | Duration: 6 hr(s) | Impact: 10
  - TaskID: e525dd61-3be8-4328-aa9a-65e638541da2 | Duration: 6 hr(s) | Impact: 8
  - TaskID: 16c1fd4c-245b-4da4-9f48-e6e40d7f6a75 | Duration: 3 hr(s) | Impact: 6
  - TaskID: f8bf12a8-3747-4774-9b03-2bcef50f23b3 | Duration: 2 hr(s) | Impact: 7
  - TaskID: 36bb8745-ef25-4709-8337-23d15a11b665 | Duration: 4 hr(s) | Impact: 3
  - TaskID: 55e70c1d-d814-4a53-8737-d2d7fd1cbb95 | Duration: 4 hr(s) | Impact: 10
  - TaskID: 8cd10c22-8f70-4333-a389-c04ddf00c102 | Duration: 3 hr(s) | Impact: 8
  - TaskID: f22aa47c-8407-44fb-b5d8-ef9386835b20 | Duration: 4 hr(s) | Impact: 8
  - TaskID: 75fb31cf-9960-48d3-83d4-7d70cafbad3a | Duration: 1 hr(s) | Impact: 9
  - TaskID: da1cf97b-7b2c-468c-9a0c-c92adc85661a | Duration: 1 hr(s) | Impact: 6
  - TaskID: 54a7efab-94fa-41ab-98ca-210022895c99 | Duration: 3 hr(s) | Impact: 7
  - TaskID: 60706a27-efbf-47ea-be43-22c747d2d4d0 | Duration: 4 hr(s) | Impact: 9
  - TaskID: 9b426376-33da-49b0-abf9-133a0c6ffd37 | Duration: 1 hr(s) | Impact: 9
  - TaskID: 7c091163-51aa-4fbc-9966-dd9a86a639fb | Duration: 1 hr(s) | Impact: 5
  - TaskID: b3fb97ef-b4a5-464e-8d73-cceb647c2601 | Duration: 4 hr(s) | Impact: 8
  - TaskID: c3550af3-07b5-4d5f-b10f-3917b53c5b96 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 8901f217-9a60-4ec9-bc9e-98bf41355850 | Duration: 4 hr(s) | Impact: 7

Depot ID: 2
Available Budget: 135 hours
Total Scheduled Duration: 134 hours
Total Operational Impact: 184
Number of Vehicles Scheduled: 31
Scheduled Tasks:
  - TaskID: ee48c772-5d58-4a19-8c42-104e9c54aded | Duration: 1 hr(s) | Impact: 1
  - TaskID: 98ae62eb-30d8-4224-bcf8-577e90c3b746 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 2951dc16-edf9-45ac-bf0a-c771340f6f1a | Duration: 6 hr(s) | Impact: 7
  - TaskID: 39e34e5b-745b-4fa9-b36d-ae27e3069657 | Duration: 1 hr(s) | Impact: 4
  - TaskID: c5d3f314-9826-45af-abd0-8d5c15fe2e78 | Duration: 7 hr(s) | Impact: 1
  - TaskID: 23fbce1d-86b9-4954-abc1-0a3b26643a2a | Duration: 6 hr(s) | Impact: 10
  - TaskID: e525dd61-3be8-4328-aa9a-65e638541da2 | Duration: 6 hr(s) | Impact: 8
  - TaskID: 16c1fd4c-245b-4da4-9f48-e6e40d7f6a75 | Duration: 3 hr(s) | Impact: 6
  - TaskID: f8bf12a8-3747-4774-9b03-2bcef50f23b3 | Duration: 2 hr(s) | Impact: 7
  - TaskID: 623edd56-2c25-4aff-90ec-09d546a38838 | Duration: 6 hr(s) | Impact: 5
  - TaskID: 36bb8745-ef25-4709-8337-23d15a11b665 | Duration: 4 hr(s) | Impact: 3
  - TaskID: 55e70c1d-d814-4a53-8737-d2d7fd1cbb95 | Duration: 4 hr(s) | Impact: 10
  - TaskID: ac33e699-6a46-43af-a188-86ea31e229e4 | Duration: 8 hr(s) | Impact: 4
  - TaskID: 8cd10c22-8f70-4333-a389-c04ddf00c102 | Duration: 3 hr(s) | Impact: 8
  - TaskID: f22aa47c-8407-44fb-b5d8-ef9386835b20 | Duration: 4 hr(s) | Impact: 8
  - TaskID: 75fb31cf-9960-48d3-83d4-7d70cafbad3a | Duration: 1 hr(s) | Impact: 9
  - TaskID: da1cf97b-7b2c-468c-9a0c-c92adc85661a | Duration: 1 hr(s) | Impact: 6
  - TaskID: 54a7efab-94fa-41ab-98ca-210022895c99 | Duration: 3 hr(s) | Impact: 7
  - TaskID: 8bfa2ac1-2946-45c3-826d-474f98242689 | Duration: 4 hr(s) | Impact: 2
  - TaskID: a5566aae-a67e-4ea3-92e8-847cec933bff | Duration: 8 hr(s) | Impact: 1
  - TaskID: 77a26274-2625-4435-b988-f8ba556b8755 | Duration: 5 hr(s) | Impact: 4
  - TaskID: 64591825-76e2-4138-9aa8-1519f910004c | Duration: 7 hr(s) | Impact: 3
  - TaskID: 60706a27-efbf-47ea-be43-22c747d2d4d0 | Duration: 4 hr(s) | Impact: 9
  - TaskID: 826f3464-e28a-4d48-a979-ae38dd9fdece | Duration: 7 hr(s) | Impact: 6
  - TaskID: 9b426376-33da-49b0-abf9-133a0c6ffd37 | Duration: 1 hr(s) | Impact: 9
  - TaskID: 7c091163-51aa-4fbc-9966-dd9a86a639fb | Duration: 1 hr(s) | Impact: 5
  - TaskID: 9ab814f8-bb9a-4beb-a03d-544c568ca413 | Duration: 7 hr(s) | Impact: 8
  - TaskID: b3fb97ef-b4a5-464e-8d73-cceb647c2601 | Duration: 4 hr(s) | Impact: 8
  - TaskID: c3550af3-07b5-4d5f-b10f-3917b53c5b96 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 8901f217-9a60-4ec9-bc9e-98bf41355850 | Duration: 4 hr(s) | Impact: 7
  - TaskID: cde28e5c-99c3-4656-b0d2-98d17ad19d68 | Duration: 8 hr(s) | Impact: 4

Depot ID: 3
Available Budget: 188 hours
Total Scheduled Duration: 134 hours
Total Operational Impact: 184
Number of Vehicles Scheduled: 31
Scheduled Tasks:
  - TaskID: ee48c772-5d58-4a19-8c42-104e9c54aded | Duration: 1 hr(s) | Impact: 1
  - TaskID: 98ae62eb-30d8-4224-bcf8-577e90c3b746 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 2951dc16-edf9-45ac-bf0a-c771340f6f1a | Duration: 6 hr(s) | Impact: 7
  - TaskID: 39e34e5b-745b-4fa9-b36d-ae27e3069657 | Duration: 1 hr(s) | Impact: 4
  - TaskID: c5d3f314-9826-45af-abd0-8d5c15fe2e78 | Duration: 7 hr(s) | Impact: 1
  - TaskID: 23fbce1d-86b9-4954-abc1-0a3b26643a2a | Duration: 6 hr(s) | Impact: 10
  - TaskID: e525dd61-3be8-4328-aa9a-65e638541da2 | Duration: 6 hr(s) | Impact: 8
  - TaskID: 16c1fd4c-245b-4da4-9f48-e6e40d7f6a75 | Duration: 3 hr(s) | Impact: 6
  - TaskID: f8bf12a8-3747-4774-9b03-2bcef50f23b3 | Duration: 2 hr(s) | Impact: 7
  - TaskID: 623edd56-2c25-4aff-90ec-09d546a38838 | Duration: 6 hr(s) | Impact: 5
  - TaskID: 36bb8745-ef25-4709-8337-23d15a11b665 | Duration: 4 hr(s) | Impact: 3
  - TaskID: 55e70c1d-d814-4a53-8737-d2d7fd1cbb95 | Duration: 4 hr(s) | Impact: 10
  - TaskID: ac33e699-6a46-43af-a188-86ea31e229e4 | Duration: 8 hr(s) | Impact: 4
  - TaskID: 8cd10c22-8f70-4333-a389-c04ddf00c102 | Duration: 3 hr(s) | Impact: 8
  - TaskID: f22aa47c-8407-44fb-b5d8-ef9386835b20 | Duration: 4 hr(s) | Impact: 8
  - TaskID: 75fb31cf-9960-48d3-83d4-7d70cafbad3a | Duration: 1 hr(s) | Impact: 9
  - TaskID: da1cf97b-7b2c-468c-9a0c-c92adc85661a | Duration: 1 hr(s) | Impact: 6
  - TaskID: 54a7efab-94fa-41ab-98ca-210022895c99 | Duration: 3 hr(s) | Impact: 7
  - TaskID: 8bfa2ac1-2946-45c3-826d-474f98242689 | Duration: 4 hr(s) | Impact: 2
  - TaskID: a5566aae-a67e-4ea3-92e8-847cec933bff | Duration: 8 hr(s) | Impact: 1
  - TaskID: 77a26274-2625-4435-b988-f8ba556b8755 | Duration: 5 hr(s) | Impact: 4
  - TaskID: 64591825-76e2-4138-9aa8-1519f910004c | Duration: 7 hr(s) | Impact: 3
  - TaskID: 60706a27-efbf-47ea-be43-22c747d2d4d0 | Duration: 4 hr(s) | Impact: 9
  - TaskID: 826f3464-e28a-4d48-a979-ae38dd9fdece | Duration: 7 hr(s) | Impact: 6
  - TaskID: 9b426376-33da-49b0-abf9-133a0c6ffd37 | Duration: 1 hr(s) | Impact: 9
  - TaskID: 7c091163-51aa-4fbc-9966-dd9a86a639fb | Duration: 1 hr(s) | Impact: 5
  - TaskID: 9ab814f8-bb9a-4beb-a03d-544c568ca413 | Duration: 7 hr(s) | Impact: 8
  - TaskID: b3fb97ef-b4a5-464e-8d73-cceb647c2601 | Duration: 4 hr(s) | Impact: 8
  - TaskID: c3550af3-07b5-4d5f-b10f-3917b53c5b96 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 8901f217-9a60-4ec9-bc9e-98bf41355850 | Duration: 4 hr(s) | Impact: 7
  - TaskID: cde28e5c-99c3-4656-b0d2-98d17ad19d68 | Duration: 8 hr(s) | Impact: 4

Depot ID: 4
Available Budget: 97 hours
Total Scheduled Duration: 96 hours
Total Operational Impact: 171
Number of Vehicles Scheduled: 26
Scheduled Tasks:
  - TaskID: ee48c772-5d58-4a19-8c42-104e9c54aded | Duration: 1 hr(s) | Impact: 1
  - TaskID: 98ae62eb-30d8-4224-bcf8-577e90c3b746 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 2951dc16-edf9-45ac-bf0a-c771340f6f1a | Duration: 6 hr(s) | Impact: 7
  - TaskID: 39e34e5b-745b-4fa9-b36d-ae27e3069657 | Duration: 1 hr(s) | Impact: 4
  - TaskID: 23fbce1d-86b9-4954-abc1-0a3b26643a2a | Duration: 6 hr(s) | Impact: 10
  - TaskID: e525dd61-3be8-4328-aa9a-65e638541da2 | Duration: 6 hr(s) | Impact: 8
  - TaskID: 16c1fd4c-245b-4da4-9f48-e6e40d7f6a75 | Duration: 3 hr(s) | Impact: 6
  - TaskID: f8bf12a8-3747-4774-9b03-2bcef50f23b3 | Duration: 2 hr(s) | Impact: 7
  - TaskID: 623edd56-2c25-4aff-90ec-09d546a38838 | Duration: 6 hr(s) | Impact: 5
  - TaskID: 36bb8745-ef25-4709-8337-23d15a11b665 | Duration: 4 hr(s) | Impact: 3
  - TaskID: 55e70c1d-d814-4a53-8737-d2d7fd1cbb95 | Duration: 4 hr(s) | Impact: 10
  - TaskID: 8cd10c22-8f70-4333-a389-c04ddf00c102 | Duration: 3 hr(s) | Impact: 8
  - TaskID: f22aa47c-8407-44fb-b5d8-ef9386835b20 | Duration: 4 hr(s) | Impact: 8
  - TaskID: 75fb31cf-9960-48d3-83d4-7d70cafbad3a | Duration: 1 hr(s) | Impact: 9
  - TaskID: da1cf97b-7b2c-468c-9a0c-c92adc85661a | Duration: 1 hr(s) | Impact: 6
  - TaskID: 54a7efab-94fa-41ab-98ca-210022895c99 | Duration: 3 hr(s) | Impact: 7
  - TaskID: 8bfa2ac1-2946-45c3-826d-474f98242689 | Duration: 4 hr(s) | Impact: 2
  - TaskID: 77a26274-2625-4435-b988-f8ba556b8755 | Duration: 5 hr(s) | Impact: 4
  - TaskID: 60706a27-efbf-47ea-be43-22c747d2d4d0 | Duration: 4 hr(s) | Impact: 9
  - TaskID: 826f3464-e28a-4d48-a979-ae38dd9fdece | Duration: 7 hr(s) | Impact: 6
  - TaskID: 9b426376-33da-49b0-abf9-133a0c6ffd37 | Duration: 1 hr(s) | Impact: 9
  - TaskID: 7c091163-51aa-4fbc-9966-dd9a86a639fb | Duration: 1 hr(s) | Impact: 5
  - TaskID: 9ab814f8-bb9a-4beb-a03d-544c568ca413 | Duration: 7 hr(s) | Impact: 8
  - TaskID: b3fb97ef-b4a5-464e-8d73-cceb647c2601 | Duration: 4 hr(s) | Impact: 8
  - TaskID: c3550af3-07b5-4d5f-b10f-3917b53c5b96 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 8901f217-9a60-4ec9-bc9e-98bf41355850 | Duration: 4 hr(s) | Impact: 7

Depot ID: 5
Available Budget: 164 hours
Total Scheduled Duration: 134 hours
Total Operational Impact: 184
Number of Vehicles Scheduled: 31
Scheduled Tasks:
  - TaskID: ee48c772-5d58-4a19-8c42-104e9c54aded | Duration: 1 hr(s) | Impact: 1
  - TaskID: 98ae62eb-30d8-4224-bcf8-577e90c3b746 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 2951dc16-edf9-45ac-bf0a-c771340f6f1a | Duration: 6 hr(s) | Impact: 7
  - TaskID: 39e34e5b-745b-4fa9-b36d-ae27e3069657 | Duration: 1 hr(s) | Impact: 4
  - TaskID: c5d3f314-9826-45af-abd0-8d5c15fe2e78 | Duration: 7 hr(s) | Impact: 1
  - TaskID: 23fbce1d-86b9-4954-abc1-0a3b26643a2a | Duration: 6 hr(s) | Impact: 10
  - TaskID: e525dd61-3be8-4328-aa9a-65e638541da2 | Duration: 6 hr(s) | Impact: 8
  - TaskID: 16c1fd4c-245b-4da4-9f48-e6e40d7f6a75 | Duration: 3 hr(s) | Impact: 6
  - TaskID: f8bf12a8-3747-4774-9b03-2bcef50f23b3 | Duration: 2 hr(s) | Impact: 7
  - TaskID: 623edd56-2c25-4aff-90ec-09d546a38838 | Duration: 6 hr(s) | Impact: 5
  - TaskID: 36bb8745-ef25-4709-8337-23d15a11b665 | Duration: 4 hr(s) | Impact: 3
  - TaskID: 55e70c1d-d814-4a53-8737-d2d7fd1cbb95 | Duration: 4 hr(s) | Impact: 10
  - TaskID: ac33e699-6a46-43af-a188-86ea31e229e4 | Duration: 8 hr(s) | Impact: 4
  - TaskID: 8cd10c22-8f70-4333-a389-c04ddf00c102 | Duration: 3 hr(s) | Impact: 8
  - TaskID: f22aa47c-8407-44fb-b5d8-ef9386835b20 | Duration: 4 hr(s) | Impact: 8
  - TaskID: 75fb31cf-9960-48d3-83d4-7d70cafbad3a | Duration: 1 hr(s) | Impact: 9
  - TaskID: da1cf97b-7b2c-468c-9a0c-c92adc85661a | Duration: 1 hr(s) | Impact: 6
  - TaskID: 54a7efab-94fa-41ab-98ca-210022895c99 | Duration: 3 hr(s) | Impact: 7
  - TaskID: 8bfa2ac1-2946-45c3-826d-474f98242689 | Duration: 4 hr(s) | Impact: 2
  - TaskID: a5566aae-a67e-4ea3-92e8-847cec933bff | Duration: 8 hr(s) | Impact: 1
  - TaskID: 77a26274-2625-4435-b988-f8ba556b8755 | Duration: 5 hr(s) | Impact: 4
  - TaskID: 64591825-76e2-4138-9aa8-1519f910004c | Duration: 7 hr(s) | Impact: 3
  - TaskID: 60706a27-efbf-47ea-be43-22c747d2d4d0 | Duration: 4 hr(s) | Impact: 9
  - TaskID: 826f3464-e28a-4d48-a979-ae38dd9fdece | Duration: 7 hr(s) | Impact: 6
  - TaskID: 9b426376-33da-49b0-abf9-133a0c6ffd37 | Duration: 1 hr(s) | Impact: 9
  - TaskID: 7c091163-51aa-4fbc-9966-dd9a86a639fb | Duration: 1 hr(s) | Impact: 5
  - TaskID: 9ab814f8-bb9a-4beb-a03d-544c568ca413 | Duration: 7 hr(s) | Impact: 8
  - TaskID: b3fb97ef-b4a5-464e-8d73-cceb647c2601 | Duration: 4 hr(s) | Impact: 8
  - TaskID: c3550af3-07b5-4d5f-b10f-3917b53c5b96 | Duration: 4 hr(s) | Impact: 7
  - TaskID: 8901f217-9a60-4ec9-bc9e-98bf41355850 | Duration: 4 hr(s) | Impact: 7
  - TaskID: cde28e5c-99c3-4656-b0d2-98d17ad19d68 | Duration: 8 hr(s) | Impact: 4

Scheduler run completed. Total depots: 5, Total operational impact: 861, Total duration: 558 hrs.
PS D:\Exam\2311cs020320\vehicle_scheduling-be> 