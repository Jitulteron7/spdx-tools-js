import {tokens, gen_tokenizer} from './spdx/utils';
import Algorithm from './spdx/checksum';

const printMsg = () => {
  const txt = "Javascript (tools) python. 1.9 and BSD-3.4";
  console.log(txt);
  const tknizer = gen_tokenizer().tokenize(txt);
  console.log(tokens);
  console.log(tknizer);
  const new_algo = new Algorithm("ID1", "VAL1");
  console.log(new_algo.to_tv())
}

exports.printMsg = printMsg();