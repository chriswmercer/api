

# Hierarchy

↳  [U8a](_codec_u8a_.u8a.md)

**↳ Bytes**

↳  [StorageData](_storagedata_.storagedata.md)

↳  [StorageKey](_storagekey_.storagekey.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Bytes**(value: *`AnyU8a`*): [Bytes](_bytes_.bytes.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [Bytes.ts:18](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/Bytes.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyU8a` |

**Returns:** [Bytes](_bytes_.bytes.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="length"></a>

##  length

getlength(): `number`

*Overrides [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [Bytes.ts:45](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/Bytes.ts#L45)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [U8a](_codec_u8a_.u8a.md).[byteLength](_codec_u8a_.u8a.md#bytelength)*

*Defined in [Bytes.ts:49](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/Bytes.ts#L49)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [U8a](_codec_u8a_.u8a.md)

*Inherited from [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/U8a.ts:41](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/codec/U8a.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [U8a](_codec_u8a_.u8a.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Bytes](_bytes_.bytes.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[fromU8a](_codec_u8a_.u8a.md#fromu8a)*

*Defined in [Bytes.ts:53](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/Bytes.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Bytes](_bytes_.bytes.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/codec/U8a.ts#L53)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:65](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/codec/U8a.ts#L65)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Bytes.ts:61](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/Bytes.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodebytes"></a>

## `<Static>` decodeBytes

▸ **decodeBytes**(value: *`AnyU8a`*): `Uint8Array`

*Defined in [Bytes.ts:23](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/Bytes.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyU8a` |

**Returns:** `Uint8Array`

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(value: *`any`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[decodeU8a](_codec_u8a_.u8a.md#decodeu8a)*

*Defined in [codec/U8a.ts:23](https://github.com/polkadot-js/api/blob/85ebacb/packages/types/src/codec/U8a.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___

