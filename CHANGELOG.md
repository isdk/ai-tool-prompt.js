# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.3.0](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.7...v0.3.0) (2025-03-16)


### ⚠ BREAKING CHANGES

* change the shouldThink tags type

### Features

* add @ default supports for parameters ([19e2e62](https://github.com/isdk/ai-tool-prompt.js/commit/19e2e620d8565b78485bc0f3b7793dde9e6c3e76))
* add DeeSeek-R1 model ([1abcd50](https://github.com/isdk/ai-tool-prompt.js/commit/1abcd50a215941af274dc0228f7c769434906aa8))
* add fitSize to prompt ([f40ce7f](https://github.com/isdk/ai-tool-prompt.js/commit/f40ce7f17eba6cfad2e26730f9c801a1934290cf))
* add getVersionPromptSettings func ([a8b8921](https://github.com/isdk/ai-tool-prompt.js/commit/a8b89216afcf4cefd2d70b757b70ea8008960770))
* add id to AIPromptResult ([efff181](https://github.com/isdk/ai-tool-prompt.js/commit/efff181702b76aeadc39bd6c225d380b13f9edd8))
* add qwq_32b supports ([bf31283](https://github.com/isdk/ai-tool-prompt.js/commit/bf31283ef77e523584c4559b4f542ed9e63e4873))
* add s1 model ([8f806f6](https://github.com/isdk/ai-tool-prompt.js/commit/8f806f6f48b5f501566164c893c35db006cb5523))
* add sky-t1 model support ([99c6a7f](https://github.com/isdk/ai-tool-prompt.js/commit/99c6a7f65a571f65460e77789a6fc7306b2e071b))
* add tools to qwen ([7b70b6c](https://github.com/isdk/ai-tool-prompt.js/commit/7b70b6cabfc4b9c8f98e9e384aac9550b62aae1b))


### Bug Fixes

* add <eos> to gemma stop_words ([158d3a6](https://github.com/isdk/ai-tool-prompt.js/commit/158d3a6df4b93d4e2b17445a55006c1aa5f91d67))
* can not find the prompt type in parent ([69275e2](https://github.com/isdk/ai-tool-prompt.js/commit/69275e2725ef2699ba9e5e56df29ed8645781daf))
* Ministral should put the system prompt at last ([0a56792](https://github.com/isdk/ai-tool-prompt.js/commit/0a5679228a69ca3ed44fda31696762c53a5d737a))
* s1 think/answer tag ([0ad3277](https://github.com/isdk/ai-tool-prompt.js/commit/0ad3277f4f4c1cc08e0f4970359690f5c2d3a871))
* the thinkTag for s1 ([2b8075c](https://github.com/isdk/ai-tool-prompt.js/commit/2b8075cf339c1330331847a2227a0911b92d0336))


### Refactor

* change the shouldThink tags type ([2ce727d](https://github.com/isdk/ai-tool-prompt.js/commit/2ce727d5ce746e9febdc85bec6884e25e935bd02))
* DeepSeek-r1 recommend temperature as default and system prompt ([f2d3cba](https://github.com/isdk/ai-tool-prompt.js/commit/f2d3cbafe165a5a5b575027105575bebb84bcb55))
* extract Qwen from ChatML ([5ea37de](https://github.com/isdk/ai-tool-prompt.js/commit/5ea37de97bcabbfafc6ab5a1c7c7af7f10635839))

## [0.2.7](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.6...v0.2.7) (2024-12-18)

## [0.2.6](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.5...v0.2.6) (2024-12-17)

## [0.2.5](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.4...v0.2.5) (2024-12-15)


### Features

* add excludeModels option ([8233020](https://github.com/isdk/ai-tool-prompt.js/commit/823302019024d01f05f9653738cac0507a5a8b01))
* add Ministral ([ca23d47](https://github.com/isdk/ai-tool-prompt.js/commit/ca23d476f063a5faa71e78ae63f628d3f3d23da4))
* add monstral, cydonia supports ([4a8d5c4](https://github.com/isdk/ai-tool-prompt.js/commit/4a8d5c474e7257a95353124eefd7bcfde2cb6142))
* add phi-4 model ([6bfabd9](https://github.com/isdk/ai-tool-prompt.js/commit/6bfabd9d47001288341b73e49fd910c77a33992d))
* add qwq-32b model ([c0b31c7](https://github.com/isdk/ai-tool-prompt.js/commit/c0b31c7e828a26fbcf9cadab465464f64e8ad89b))
* add SmoLLM model ([d50f00d](https://github.com/isdk/ai-tool-prompt.js/commit/d50f00da45d2fc9ac594c7baf8113e46f7686960))
* add tonggu model ([95e5cbc](https://github.com/isdk/ai-tool-prompt.js/commit/95e5cbcd1470761a466920b7ca3036f27188c3a3))
* more lama3.3 models supports ([0c644d2](https://github.com/isdk/ai-tool-prompt.js/commit/0c644d2d4923abde87907de8d941afbe23b75caf))
* more models added ([24fbda5](https://github.com/isdk/ai-tool-prompt.js/commit/24fbda540e00c3e1900adff6ec3e7e17f8e58fef))


### Bug Fixes

* **prompt:** detect llama3 ([3110737](https://github.com/isdk/ai-tool-prompt.js/commit/31107379128579cad6ab6804bdeb6af701aa1c96))

## [0.2.4](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.3...v0.2.4) (2024-10-04)


### Features

* add default params to minicpm ([62dcc41](https://github.com/isdk/ai-tool-prompt.js/commit/62dcc414729d59aa5c9d70320d17de2e19b14307))
* add MiniCPM model supports ([9458199](https://github.com/isdk/ai-tool-prompt.js/commit/94581993fe925d4a5307f5bf7d5ef0c2272ef6e2))


### Refactor

* extract findPrompt from prompts-db ([e41c1e3](https://github.com/isdk/ai-tool-prompt.js/commit/e41c1e3ed2bd2d90b57efffe16652a00fa8b35c4))
* rename prompts.ts to prompts-db.ts ([78a7c12](https://github.com/isdk/ai-tool-prompt.js/commit/78a7c12609f49e432d69538e345b0b070ab90a99))

## [0.2.3](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.2...v0.2.3) (2024-09-30)

## [0.2.2](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.1...v0.2.2) (2024-09-25)

## [0.2.1](https://github.com/isdk/ai-tool-prompt.js/compare/v0.2.0...v0.2.1) (2024-09-17)

## [0.2.0](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.12...v0.2.0) (2024-09-16)


### ⚠ BREAKING CHANGES

* follow upstream

### Features

* **OpenBuddy:** add default system prompt ([3cd20b5](https://github.com/isdk/ai-tool-prompt.js/commit/3cd20b5c51c0b148f1b321055ea3af617d53a688))
* **prompt:** add reflection model ([e49aa5b](https://github.com/isdk/ai-tool-prompt.js/commit/e49aa5b207da33c5c29f751f36e56426f80e7a9a))


### Bug Fixes

* **ChatGLM:** v3 duplication template ([3862452](https://github.com/isdk/ai-tool-prompt.js/commit/3862452bd3b666e106a95328741fde9afbc0b196))
* **gemma:** use user instead of system prompt ([7b2759d](https://github.com/isdk/ai-tool-prompt.js/commit/7b2759d3d059910f1044ddf5b0a55dd3ecf6348a))


### Refactor

* follow upstream ([20facfd](https://github.com/isdk/ai-tool-prompt.js/commit/20facfda40476b1691af22ebeaa173d9e0b43f11))

## [0.1.12](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.11...v0.1.12) (2024-09-02)

## [0.1.11](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.10...v0.1.11) (2024-09-02)

## [0.1.10](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.9...v0.1.10) (2024-09-01)

## [0.1.9](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.8...v0.1.9) (2024-08-31)

## [0.1.8](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.7...v0.1.8) (2024-08-28)

## [0.1.7](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.6...v0.1.7) (2024-08-24)

## [0.1.6](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.5...v0.1.6) (2024-08-24)


### Bug Fixes

* can not work on windows ([282164a](https://github.com/isdk/ai-tool-prompt.js/commit/282164a46634033a9c9e066968045ee745f00f39))

## [0.1.5](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.4...v0.1.5) (2024-08-24)


### Features

* **prompt:** add NousHermes2 and Hermes3 LLM ([afd19d0](https://github.com/isdk/ai-tool-prompt.js/commit/afd19d024719e94e430872e6062c04fa1cd768e0))


### Bug Fixes

* can not getLLMParameters correctly ([bf6e30b](https://github.com/isdk/ai-tool-prompt.js/commit/bf6e30b3f55b9c7d8f94c01fd94be4e0f05119c1))

## [0.1.4](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.3...v0.1.4) (2024-08-23)

## [0.1.3](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.2...v0.1.3) (2024-08-18)

## [0.1.2](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.1...v0.1.2) (2024-08-16)


### Features

* glm3, glm4 supports ([725bf46](https://github.com/isdk/ai-tool-prompt.js/commit/725bf4619debb43a5b1b683ede66cffb6a973193))

## [0.1.1](https://github.com/isdk/ai-tool-prompt.js/compare/v0.1.0...v0.1.1) (2024-08-14)

## [0.1.0](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.10...v0.1.0) (2024-08-11)


### ⚠ BREAKING CHANGES

* rename option rule to modelPattern

### Features

* add tag option for prompt settings ([a012089](https://github.com/isdk/ai-tool-prompt.js/commit/a012089c819726221e6782c9ef7103dfe129c70e))
* **prompt:** add phi-3.1 support ([605d5bb](https://github.com/isdk/ai-tool-prompt.js/commit/605d5bbed13695155e62497bf6f068c5a3680d36))
* **prompt:** blilibili index 1.9B model system prompt template added ([9c32316](https://github.com/isdk/ai-tool-prompt.js/commit/9c32316e0574225ffbd9c5fceb4a63922ab50fab))
* **prompt:** Gemma system prompt template added ([2ae3786](https://github.com/isdk/ai-tool-prompt.js/commit/2ae378680e278cb7786c99fb02af150776849f93))


### Refactor

* rename option rule to modelPattern ([1f19bd2](https://github.com/isdk/ai-tool-prompt.js/commit/1f19bd2c85d4d386ad2dd914499c3c643eb1378a))
* update to latest sqlite ([cc3d3fb](https://github.com/isdk/ai-tool-prompt.js/commit/cc3d3fb912c748d79a239142632296cb8ffc1879))

## [0.0.10](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.9...v0.0.10) (2024-07-08)


### Bug Fixes

* **prompt:** qwen missing line feed with eot_token ([e3a2842](https://github.com/isdk/ai-tool-prompt.js/commit/e3a2842d24f17191c714451ddd1911342badbf4f))

## [0.0.9](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.8...v0.0.9) (2024-06-13)


### Features

* **prompt:** add miqu ([c6d3ab6](https://github.com/isdk/ai-tool-prompt.js/commit/c6d3ab64821b17807d91df1f7fe96999f630f93c))
* **prompt:** new system template added ([59bc73b](https://github.com/isdk/ai-tool-prompt.js/commit/59bc73b8289b0a0154bbf3da2b1dc80626976e41))


### Bug Fixes

* **prompt:** make high priority to openbuddy ([b869604](https://github.com/isdk/ai-tool-prompt.js/commit/b8696042284c77965cf145d093c30471c1584619))

## [0.0.8](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.7...v0.0.8) (2024-06-11)

## [0.0.7](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.6...v0.0.7) (2024-06-10)

## [0.0.6](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.5...v0.0.6) (2024-06-10)


### Bug Fixes

* **prompts:** phi-3 bug ([0dcdf12](https://github.com/isdk/ai-tool-prompt.js/commit/0dcdf12a456bba99bf90f4678ac17af119a55f66))

## [0.0.5](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.4...v0.0.5) (2024-06-09)

## [0.0.4](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.3...v0.0.4) (2024-06-09)


### Bug Fixes

* **prompt:** minor bug fixed ([945c6ab](https://github.com/isdk/ai-tool-prompt.js/commit/945c6abc4ae7032901f06d2bfe94553c3afdda87))
* use the first one when multi versions matched ([6e37a85](https://github.com/isdk/ai-tool-prompt.js/commit/6e37a854cf81d44d5985e76830ede14b628bf417))

## [0.0.3](https://github.com/isdk/ai-tool-prompt.js/compare/v0.0.2...v0.0.3) (2024-06-08)


### Bug Fixes

* **prompt:** typo ([58768bb](https://github.com/isdk/ai-tool-prompt.js/commit/58768bbe7e786a042f8c33cebd1b7d2833c6737a))

## 0.0.2 (2024-06-08)


### Features

* add $getDefaultPrompt() method ([15e161f](https://github.com/isdk/ai-tool-prompt.js/commit/15e161fa22350b859b990f5c436e5384bdcda199))
* add $getParameters to get LLM default parameters if any ([7066928](https://github.com/isdk/ai-tool-prompt.js/commit/70669284f8eb3d8f1997d0ef6a04dbcf061b58c4))
* add all matched prompts ([9418140](https://github.com/isdk/ai-tool-prompt.js/commit/94181400f386db1f90903db6efa9a5935966d36d))
* add array supports to registerYamlTag ([644b1d2](https://github.com/isdk/ai-tool-prompt.js/commit/644b1d2c01b388ccc6b241b4893e84eb0e50a8f1))
* add config init ([880729f](https://github.com/isdk/ai-tool-prompt.js/commit/880729f9bd81e1717e07e60e33f524de3f1af24f))
* add const AIPromptsName ([ff19eb2](https://github.com/isdk/ai-tool-prompt.js/commit/ff19eb24dc34427afaf121507252fae02a72e26c))
* add extends support for prompt ([d884979](https://github.com/isdk/ai-tool-prompt.js/commit/d88497974587c1a056af407afd1c5a43e05ff756))
* add filter the prompt type to $getPrompt ([139c47a](https://github.com/isdk/ai-tool-prompt.js/commit/139c47af3522625e3388d4f52b14037a984f2f34))
* add formatPrompt func ([9006544](https://github.com/isdk/ai-tool-prompt.js/commit/900654462041e18fe99eb5f660f4da82fbdc1625))
* add input, output to AIPromptSettings ([6c07ed4](https://github.com/isdk/ai-tool-prompt.js/commit/6c07ed4a30e8a4f892c9339bc82caee1cb149381))
* add isFitForLLM method ([b42af0a](https://github.com/isdk/ai-tool-prompt.js/commit/b42af0a7d966cfced3189205c3fc8117f1a6f750))
* add priority support for prompt ([6314dec](https://github.com/isdk/ai-tool-prompt.js/commit/6314deca662f6bb9eae122b833490f33049ac0cb))
* add registerYamlTag func ([f47990e](https://github.com/isdk/ai-tool-prompt.js/commit/f47990eb61e7184c706f1608633e32ac85d1cd8d))
* **AIPrompt:** add isFitForLLM method to check the prompt whether good fit LLM ([f49d303](https://github.com/isdk/ai-tool-prompt.js/commit/f49d303d466014f8297f065e0b43b3ee8a974d3d))
* **AIPrompts:** add custom method getPrompt to get a better prompt for LLM ([9d91a57](https://github.com/isdk/ai-tool-prompt.js/commit/9d91a579092f2631f56d6984d832a5630d0271c8))
* **AIPromptSettings:** add optional contentType field ([4495900](https://github.com/isdk/ai-tool-prompt.js/commit/44959000d80f2a4a8a9e63e859d60593dead9b67))
* export ConfigFile ([91a8c8c](https://github.com/isdk/ai-tool-prompt.js/commit/91a8c8ce0a2b180eae4cdf2001883d4f21cd018c))
* export parseYaml ([32b70aa](https://github.com/isdk/ai-tool-prompt.js/commit/32b70aadff3df1c62fd2baabca1ea9b4bfd09c22))
* more system prompts template added ([8549f34](https://github.com/isdk/ai-tool-prompt.js/commit/8549f34a291bb7cf7a6ffa8da988a99500cc78c8))
* **promptIsFitForLLM:** the modelName argument can be prompt id now ([36e5fbf](https://github.com/isdk/ai-tool-prompt.js/commit/36e5fbf007b937b00af5fa583af5dd16c9a25d06))
* **prompts:** $getDefaultPrompt can pass type now ([a9363d4](https://github.com/isdk/ai-tool-prompt.js/commit/a9363d475863814402bdb0bd6e1b1deba0b7d89d))
* **prompts:** add codeqwen support to ChatML ([a8f6601](https://github.com/isdk/ai-tool-prompt.js/commit/a8f6601509af70bd945860da5e401294a6e1fceb))
* **prompts:** add Deepseek system prompts ([355a50e](https://github.com/isdk/ai-tool-prompt.js/commit/355a50ef582bd62d390997b50e4e4d7b72ab9546))
* **prompts:** add default prompt ([5159ba3](https://github.com/isdk/ai-tool-prompt.js/commit/5159ba3fe44f01a9da14655a47fb9daa77c14778))
* return all fits for LLM ([2acaf91](https://github.com/isdk/ai-tool-prompt.js/commit/2acaf913b060e167fbe93e193eaaac7cb5a1c42d))


### Bug Fixes

* add ineractive mode supports ([54e00ec](https://github.com/isdk/ai-tool-prompt.js/commit/54e00ec948c59c0ed7515952565c23627a63f45c))
* **AIPromptsFunc:** extends should concat array(messages) ([4e6041b](https://github.com/isdk/ai-tool-prompt.js/commit/4e6041bd0d817d7bee44f3e90a65e636fe9bb4e9))
* **AIPromptsFunc:** get should extends array(concat) too ([f4454f0](https://github.com/isdk/ai-tool-prompt.js/commit/f4454f0c80449f7bfd65431579baf87db01f0c87))
* build commonjs need import.meta.url shims ([8a6dc4a](https://github.com/isdk/ai-tool-prompt.js/commit/8a6dc4a4dee3aa6b8d7e38516933796eb43e08ab))
* **build:** export commonjs and esm ([0936b7f](https://github.com/isdk/ai-tool-prompt.js/commit/0936b7f7549e536118d6fd65ed38bcb23eae468b))
* can not getPrompt by LLM ([7e34c74](https://github.com/isdk/ai-tool-prompt.js/commit/7e34c7462a9e61b3782e61345485ba457d844346))
* **ChatML:** the gguf file build-in eot_token is wrong, so correct it here ([260d54c](https://github.com/isdk/ai-tool-prompt.js/commit/260d54c766d3357e1d1ec13df01d532c99525f19))
* default prompt template ([367b858](https://github.com/isdk/ai-tool-prompt.js/commit/367b8589f2e1b32aadf6e6e6b87c0bfa344f7ead))
* forget to add new options to AIPromptSchema ([11bdf21](https://github.com/isdk/ai-tool-prompt.js/commit/11bdf21aee3b38abe4c6b8a6f3458ba9760a8eba))
* **OpenChat:** use eot_token instead of end_of_turn ([10bc4a0](https://github.com/isdk/ai-tool-prompt.js/commit/10bc4a0ea514c3e404495958a73eb588f550e43e))
* parmeters rule matched name should be lowercase always ([13c9772](https://github.com/isdk/ai-tool-prompt.js/commit/13c9772a95f2e2f969c9ca91719cea3c4e5fd408))
* **Phi-2:** forget to add rule ([d993921](https://github.com/isdk/ai-tool-prompt.js/commit/d99392159da27b184f2dd8844ce8336892699810))
* **prompt:** add stop words to PHi-3 ([59f7920](https://github.com/isdk/ai-tool-prompt.js/commit/59f792070399a87921c4baac8da714fc109e490a))
* **prompt:** add stop_words for qwen system prompt template ([a499d25](https://github.com/isdk/ai-tool-prompt.js/commit/a499d25264ee5e44b96e9890934e21a66165f3c2))
* **prompt:** add stop_words to llama3 ([90ab21f](https://github.com/isdk/ai-tool-prompt.js/commit/90ab21f86e7bf048d8172eca0cd04c0b1e4d0a68))
* **prompt:** for bagel ([1ba0c0b](https://github.com/isdk/ai-tool-prompt.js/commit/1ba0c0ba4dedb34b619f4ef1e2fe953b67409a5a))
* promptIsFitForLLM return not matched prompt ([7a655b4](https://github.com/isdk/ai-tool-prompt.js/commit/7a655b485e4e7ccd5658fb38ef400b08153b8122))
* **prompt:** let openbuddy embeded system prompt template first ([b16b423](https://github.com/isdk/ai-tool-prompt.js/commit/b16b4237ccccd25291155d7da9fe0f4234c488c3))
* **prompts:** add iteractive mode supports ([c2ac49e](https://github.com/isdk/ai-tool-prompt.js/commit/c2ac49e2a67a8ee21262a3bc596dfb757940f94e))
* **prompts:** many changes ([2aee0c7](https://github.com/isdk/ai-tool-prompt.js/commit/2aee0c76b401faff9519605aa8e5fa16705d8d18))
* **prompts:** update phi-3 rule ([75354f9](https://github.com/isdk/ai-tool-prompt.js/commit/75354f92aec3345a8a1bbf88a7228ce82cf38977))
* **prompt:** with line break ([abed8df](https://github.com/isdk/ai-tool-prompt.js/commit/abed8df584a8623e2911e54f3910d0f18a878370))
* **ts:** add_generation_prompt should be a boolean ([71007a7](https://github.com/isdk/ai-tool-prompt.js/commit/71007a717bba408b85a2e0886d822d13d4601b25))
* **ts:** treat id as any ([4469376](https://github.com/isdk/ai-tool-prompt.js/commit/44693768313551416c2c7bd1bee8f35c4627ff9d))
