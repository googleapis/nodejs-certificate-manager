// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, certificateMapEntryId, certificateMapEntry) {
  // [START certificatemanager_v1_generated_CertificateManager_CreateCertificateMapEntry_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the certificate map entry. Must be in the
   *  format `projects/* /locations/* /certificateMaps/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. A user-provided name of the certificate map entry.
   */
  // const certificateMapEntryId = 'abc123'
  /**
   *  Required. A definition of the certificate map entry to create.
   */
  // const certificateMapEntry = {}

  // Imports the Certificatemanager library
  const {CertificateManagerClient} = require('@google-cloud/certificate-manager').v1;

  // Instantiates a client
  const certificatemanagerClient = new CertificateManagerClient();

  async function callCreateCertificateMapEntry() {
    // Construct request
    const request = {
      parent,
      certificateMapEntryId,
      certificateMapEntry,
    };

    // Run request
    const [operation] = await certificatemanagerClient.createCertificateMapEntry(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateCertificateMapEntry();
  // [END certificatemanager_v1_generated_CertificateManager_CreateCertificateMapEntry_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
