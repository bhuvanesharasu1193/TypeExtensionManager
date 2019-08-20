import CONSTANTS from '../../constants'

const {
    rl,
    QUESTIONS:{QUESTION_RULESET_TYPE},
    EVENTS:{POP,POPS,POPULATION,POPULATIONS,VALIDATION,VALIDATIONS,VLD,VLDS},
    MESSAGES:{ERRORS:{NO_RULESET_TYPE_RPOVIDED}},
    fields:{CUSTOMER, RULE_SET_TYPE,CUSTOMER_NAME, DOCUMENT_TYPE},
    RULE_SET:{POP_RULE_SET, VLD_RULE_SET}
} = CONSTANTS

export default (essentials) => {
    return new Promise((resolve, reject) => {
        rl.question(`${QUESTION_RULESET_TYPE}`, (rulesetName) => {
            if(rulesetName){
                let type = null
                switch(rulesetName.toLowerCase()){
                    case POP.toLowerCase():
                    case POPS.toLowerCase():
                    case POPULATION.toLowerCase():
                    case POPULATIONS.toLowerCase():
                        type = essentials[CUSTOMER][CUSTOMER_NAME]+essentials[CUSTOMER][DOCUMENT_TYPE]+POP_RULE_SET
                        break

                    case VLD.toLowerCase():
                    case VLDS.toLowerCase():
                    case VALIDATION.toLowerCase():
                    case VALIDATIONS.toLowerCase():
                        type = essentials[CUSTOMER][CUSTOMER_NAME]+essentials[CUSTOMER][DOCUMENT_TYPE]+VLD_RULE_SET          
                        break
                    default:
                        reject(new Error(NO_RULESET_TYPE_RPOVIDED))
                        break
                }
                essentials[CUSTOMER][RULE_SET_TYPE] = type
                resolve()    
            }else{
                reject(new Error(NO_RULESET_TYPE_RPOVIDED))
            }
        })
    })
}
