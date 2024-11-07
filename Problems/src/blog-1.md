Question:The significance of union and intersection types in Typescript.

Answere:

Union allows a variable to various possible properties,there must be matches one properties.It is denoted by '|' this symbol.When we need to check property is included this variable or not ,we use union types.It is like as logical OR (|) operator.
Example:
bloodgroup:'O+'|'A+'|'AB+'; 

wheres intersection does not allows a variable to various properties,there must be matches all of this properties.It is like as logical And operator(&).It is denoted by(&) symbol.This type is closely related to union types.
type FrontendDev={
        skills:string[];
        designation1:'frontend Dev'
    }
    type BackendDev={
        skills:string[];
        designation2:'backend Dev'
    }
type Fullstack = FrontendDev & BackendDev;  // =>intersection 
