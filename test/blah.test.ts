import { BlobClient } from '../src';

describe('blah', () => {
  it('works', () => {
    let client = new BlobClient({blob_cs: "UseDevelopmentStorage=true", managed_identity_toggle: false});
    console.log("test pass")
  });
});
