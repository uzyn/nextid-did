# NextID DID Method Specifications

This specification document defines how 

_(Very rough draft)_


## Abstract

NextID's mission is to enhance the usability and user-experience of decentralized technology, such as  decentralized verifiable credentials to make them more user-friendly and relatable by everyday Internet users.


## Motivation

![XKCD comic: standards](https://imgs.xkcd.com/comics/standards.png)

True to NextID's motivation on not only being agnostics to existing standards, but to enhance existing standards, making them more user-friendly and usable, just as NextID's certification solution, supporting most decentralized certification standards out there today: OpenCerts by Singapore GovTech, BlockCerts by MIT Media Lab and many more, we also plan to do the same for most DIDs solutions out there today.

As DID space is still expanding, and spanning across multiple blockchains, users would likely not have the liberty to dictate which DID they should carry and use, but to depend on the services. A likely problem would result in a user, having identities spread across multiple DID standards and having issues uniting them.

## Specification

`did:nxid:{extended public key}`

- NextID's DID is based on the idea of [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) and [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) of Bitcoin.
- To keep things more standardized, we are keeping index selections of BIP44 based off of Satoshi Lab's [SLIP44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)
- 1 extended private key to derive multiple private keys for each blockchains and thus for each public addresses.

### Benefits

Usage of NXID allows a master DID that derives many other DIDs.

- This allows user to have utilize DIDs across different services and standards while still keeping all the DIDs organized under a single master DID.
- The benefit of BIP32 + BIP44 over independently-generated DIDs across different standards is that anyone is able to independently link the different DIDs generated from the same master private key to a single identity despite them looking very different initially. 
    - This eliminates the need to have a centralized location or smart contract for a user to declare linkages between DIDs.
    - Linkage can be derived independently, via published extended public key, without having the extended private key or any private keys exposed.
    - Future-proof: NXID allows DID generation not only known DIDs of today, but also for future DIDs, as long as the bit-length is less than that of NXID's. _(we may want to even go higher than today's common size of 256-bit)_
- Privacy concerns: it may be argued that a user may want want to keep their DID independently across DID specs and NXID would affect it. While it may seem so initially, but it is not the case, all the user has to do is to generate another NXID to create a new independent DID from the former one.
- What NXID allows is to provide user the freedom to decide if an identity, even across different DID standards and spaces, should be linked or they should be independent from one another.

## CRUD

### Create

- NXID can be independently generated, and no need to publish at any registry.
- To allow verifiers to derive further DIDs, a user may want to publish the extended public key of NXID on a to-be-determined decentralized file storage, e.g. IPFS _(method to be further determined)_

### Delete/revocation

- User can revoke a NXID by publishing revocation to a to-be-determined decentralized file storage, e.g. IPFS _(method to be further determined)_



