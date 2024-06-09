# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

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
