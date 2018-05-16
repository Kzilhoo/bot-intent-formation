import test from 'ava'
import { logic } from '../src/logic'
import { formation }  from '../src/formation'
import { exists } from 'fs';

test(t => {
    return logic({ message: { content: 'taGrandeRace' } }).then(element => {
        t.true(formation.includes(element.message.content))
    })
})
