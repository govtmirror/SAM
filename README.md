SAM-Helper
==========

This file should be residing in the root-level folder of the SAM Helper.  It explains the overall directory structure of the helper and the procedure for using it.

SAM Helper is structured to allow the creation of different deliverables from the same core code.  As of 12/19/2013, there are three different packagings, derived from the decisions
The Chrome Extensions for SAM Helper and the helper configuration editor


This repository contains three directories:

samHelper contains the actual Chrome extension for user install

helper-gen contains an extension that parses and updates the helper content

processHelperFiles contains a super-trivial web server that serves up the JSON config file used by both extensions.  It can  be run as a node file.
