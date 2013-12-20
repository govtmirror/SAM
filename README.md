SAM-Helper
==========

This file should be residing in the root-level folder of the SAM Helper.  It explains the overall directory structure of the helper and the procedure for using it.

SAM Helper is structured to allow the creation of different deliverables from the same core code.  As of 12/19/2013, there are three different packagings, derived from the decisions
The Chrome Extensions for SAM Helper and the helper configuration editor


This repository contains three directories:

samHelper contains the actual Chrome extension for user install

helper-gen contains an extension that parses and updates the helper content

processHelperFiles contains a super-trivial web server that serves up the JSON config file used by both extensions.  It can  be run as a node file.



sam-helper
==========

README file for SAM Helper 0.5.0
This file lives at: https://github.com/GSA-OCSIT/sam-helper

About SAM Helper:
SAM Helper is intended to be the first application of a USDS Helper.  It adds user assistance within the workflow of the existing SAM web registration service.
The assistance includes field-level information and validation, and page-level help as well.  The USDS Helper is a tool for creating "add-on" usability for an existing
form intensive web application.  The "add-on" model allows for the 
Developer's README file for the SAM Helper Repository
This file lives at: https://github.com/presidential-innovation-fellows/SAM

This directory contains three groups of files.

I. usdsJsHelper files
Files with the usdsJsHelper name or prefix are intended to be domain and application agnostic.
They form a JavaScript library that is the basis of a reusable web app assistant,
described elsewhere.
TODO:
Designate a custodian.
Provide references to the usdsJsHelper documentation and describe code management practices
for usdsJsHelper.

usdsJsHelper.js

II. samHelper files
Files with the samHelper name or prefix are intended to be domain specific but application agnostic.
Together, they tie the usdsJsHelper to SAM (sam.gov, the 'System for Award Management')
These files are to be maintained by people with an understanding of the SAM application domain.

Within samHelper, there are three types of file.
A. Connector files provide a glue-layer between the usdsJs application-agnostic code and the application-specific behavior of sam.gov.
Code which identifies an application page or a field on a page and tags it with a unique name is an example of glue code.

samHelper.js

B. Content files contain actual help content and styling for the SAM specific help.
samHelper.html
samHelper.css

C. The configuration file controls the behavior of SAM Helper.  It describes the pages and fields in SAM.
This information is stored locally at present, but should be retrieved from a BusinessUSA service in the future.

samHelper.json

III. Chrome extension files
The rest of the files package the SAM Helper in a Chrome browser extension.
These files are application specific but remain domain-agnostic.


