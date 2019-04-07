
#[macro_use]
extern crate neon;
extern crate hex;
extern crate ring;

use neon::prelude::*;
use neon::context::Context;
use ring::digest::{digest, SHA256};

fn str_to_sha256_hex(mut cx: FunctionContext) -> JsResult<JsString> {
    let input = cx.argument::<JsString>(0)?;
    let result: String = {
        let result = digest(&SHA256, &input.value().as_bytes());
        hex::encode(result)
    };
    Ok(cx.string(result))
}

register_module!(mut ctx, {
    ctx.export_function("strToSHA256Hex", str_to_sha256_hex)
});
