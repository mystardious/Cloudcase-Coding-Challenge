# Cloudcase: Coding Challenge

## Brief

A bank would like to onboard a new staff member who has just been recruited. As part of this process, the bank would like to send the new staff member an electronic form to complete. This form needs to capture the information required to set up the staff member in their payroll and HR systems. However, their payroll systems has a major limitation, it can’t calculate an individual’s annual tax nor their annual superannuation contributions. Therefore the onboarding process needs calculate these numbers.

Before the system is built the bank would like the following:

A design for the new onboarding form,
A simple program which can calculate the annual tax and superannuation for a given salary amount

As part of this exercise can you please create the following:

1. A design of what information the new staff member onboarding form should contain. This can be done in: written text, drawn on paper (and scanned) or built in HTML/JavaScript.
2. Regarding the design above, please provide a some written notes on why you made the choices you did.
3. A program to calculate the annual tax and superannuation for a given salary (please see rate table below). This can be done in: Java or JavaScript
4. A few written or programmed tests to prove the tax and superannuation calculations

To create the above should take you no longer than 3 hours. We are not looking for a gold plated solution. The customer wants something to review asap.

## Answer

1. The onboarding form should contain the following fields:

    - Full Name
    - Current Address
    - TFN
    - Employee Start Date
    - Employment Type (Full Time / Part Time / Casual) / Hours Per Week
    - Bonuses, allowances, benefits
    - Salary
    - Tax Deductions
    - Bank Details
    - Residency Status

2. The information from part 1 is needed for the following reasons:

    1. Collecting new staff member information
    2. Calculating annual tax:

        - Salary
        - Tax Deductions
        - Residency Status

        Note: Taxable Income = Gross Income less Tax Deductions

    3. Calculating superannuation:
        Formula: Income Before Tax * Super Guarantee (Assuming 10.5%)
        - Salary
        - Super Guarantee

To keep things simple for this coding challenge I will ignore residency status and assume any tax deductions have already been included.